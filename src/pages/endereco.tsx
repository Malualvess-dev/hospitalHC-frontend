interface EnderecoProps {
  setPage: (page: number) => void;
}

function Endereco({ setPage }: EnderecoProps) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
           <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        {/* Navegação */}
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
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(14)}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(9)}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(8)}>
            TELECONSULTA
          </button>
        </nav>

        {/* Extras */}
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
      <div className="flex-1 flex flex-col">
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
            <button className="text-center" onClick={() => setPage(6)}>
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => setPage(1)} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Área central */}
        <main className="flex-1 p-10">
          <h2 className="text-2xl font-bold text-[#0F8E89] mb-6">Endereço</h2>

          <iframe
            className="w-full h-96 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.158430167192!2d-46.668957523987646!3d-23.563099361648103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c807d46f09%3A0x7df5b57a4bcb59a7!2sHospital%20das%20Cl%C3%ADnicas%20da%20FMUSP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* Rodapé com endereço */}
          <div className="mt-6 bg-[#CDE6E7] text-center font-semibold py-3 rounded">
            Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São Paulo - SP, 05403-000
          </div>
        </main>
      </div>
    </div>
  );
}

export default Endereco;




