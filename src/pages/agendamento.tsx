import { useState, useEffect } from "react";

interface AgendamentoProps {
  setPage: (page: number) => void;
}

function Agendamento({ setPage }: AgendamentoProps) {
  const [tipo, setTipo] = useState<"presencial" | "teleconsulta">("presencial");
  const [busca, setBusca] = useState("");
  const [selecionadoEspecialidade, setSelecionadoEspecialidade] = useState<string | null>(null);
  const [selecionadoDia, setSelecionadoDia] = useState<string | null>(null);
  const [selecionadoHorario, setSelecionadoHorario] = useState<string | null>(null);

  const [especialidades, setEspecialidades] = useState<string[]>([]);

  // useEffect simula o carregamento das especialidades
  useEffect(() => {
    setTimeout(() => {
      setEspecialidades([
        "Clínica geral",
        "Cardiologia",
        "Dermatologia",
        "Ginecologia",
        "Neurologia",
        "Otorrinolaringologia",
        "Pneumologia",
      ]);
    }, 500);
  }, []);

  const filtradas = especialidades.filter((e) =>
    e.toLowerCase().includes(busca.toLowerCase())
  );

  // Dias disponíveis simulados
  const diasDisponiveis = ["05/10/2025", "06/10/2025", "07/10/2025", "10/10/2025"];

  // Horários disponíveis simulados
  const horariosDisponiveis = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(3)}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(7)}>
            FAQ
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(14)}>
            CONTATO
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(9)}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(8)}>
            TELECONSULTA
          </button>
        </nav>

        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => setPage(10)}>
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
        {/* Barra superior com pesquisa */}
        <header className="flex justify-between items-center gap-6 mb-6 px-6 py-4 border-b bg-white">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Pesquisar no sistema..."
              className="flex-1 outline-none text-gray-700"
            />
            <span className="text-gray-500">🔍</span>
          </div>

          <div className="flex gap-8">
            <button className="text-center">
              <div className="text-3xl">🧓</div>
              <p className="text-sm">Modo Idoso</p>
            </button>
            <button onClick={() => setPage(6)} className="text-center">
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => setPage(1)} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Agendamento */}
        <section>
          <h1 className="text-2xl font-bold mb-4 text-[#004A80]">Agendamento</h1>

          {/* Botões de escolha */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setTipo("presencial")}
              className={`px-6 py-2 rounded-full font-semibold ${
                tipo === "presencial"
                  ? "bg-[#0F8E89] text-white"
                  : "bg-gray-400 text-white"
              }`}
            >
              Presencial
            </button>
            <button
              onClick={() => setTipo("teleconsulta")}
              className={`px-6 py-2 rounded-full font-semibold ${
                tipo === "teleconsulta"
                  ? "bg-[#0F8E89] text-white"
                  : "bg-gray-400 text-white"
              }`}
            >
              Teleconsulta
            </button>
          </div>

          {/* Campo de busca + sugestões */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">
              Selecione a especialidade:
            </label>
            <div className="flex flex-col border border-gray-300 rounded-lg bg-white">
              <input
                type="text"
                placeholder="Digite a especialidade"
                className="p-2 outline-none"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              {busca.length > 0 && (
                <ul className="divide-y">
                  {filtradas.length > 0 ? (
                    filtradas.map((e, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          setSelecionadoEspecialidade(e);
                          setBusca(e);
                        }}
                        className="p-2 hover:bg-[#CDE6E7] cursor-pointer text-[#0F8E89] font-medium"
                      >
                        {e}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">
                      Nenhuma especialidade encontrada
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>

          {/* Escolha de dia */}
          {selecionadoEspecialidade && (
            <div className="mb-4">
              <label className="font-semibold block mb-2">
                Escolha o dia da consulta:
              </label>
              <div className="flex gap-3 flex-wrap">
                {diasDisponiveis.map((dia, i) => (
                  <button
                    key={i}
                    onClick={() => setSelecionadoDia(dia)}
                    className={`px-4 py-2 rounded-full font-medium ${
                      selecionadoDia === dia
                        ? "bg-[#0F8E89] text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {dia}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Escolha de horário */}
          {selecionadoDia && (
            <div className="mb-4">
              <label className="font-semibold block mb-2">
                Escolha o horário disponível:
              </label>
              <div className="flex gap-3 flex-wrap">
                {horariosDisponiveis.map((hora, i) => (
                  <button
                    key={i}
                    onClick={() => setSelecionadoHorario(hora)}
                    className={`px-4 py-2 rounded-full font-medium ${
                      selecionadoHorario === hora
                        ? "bg-[#0F8E89] text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirmação */}
          {selecionadoEspecialidade && selecionadoDia && selecionadoHorario && (
            <div className="mt-6 p-4 bg-[#CDE6E7] rounded-lg font-semibold text-[#004A80]">
              ✅ Consulta de <b>{selecionadoEspecialidade}</b> marcada para o dia{" "}
              <b>{selecionadoDia}</b> às <b>{selecionadoHorario}</b> ({tipo}).
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Agendamento;


