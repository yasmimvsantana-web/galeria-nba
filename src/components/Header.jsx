export function Header({
  searchTerm,
  setSearchTerm,
  filtroTime,
  setFiltroTime,
  times,
  totalJogadores,
  mostrarFavoritos,
  setMostrarFavoritos,
  onAbrirModalNovo
}) {
  return (
    <header className="nba-header">
      {/* Top Banner Ticker */}
      <div className="header-ticker">
        <div className="ticker-item">
          <span className="ticker-dot orange"></span>
          <span>NBA ALL-STAR EXPERIENCE</span>
        </div>
        <div className="ticker-item hide-mobile">
          <span className="ticker-dot purple"></span>
          <span>TEMPORADA 2026</span>
        </div>
        <div className="ticker-item hide-mobile">
          <span className="ticker-dot orange"></span>
          <span>EDICAO ESPECIAL: LARANJA & ROXO</span>
        </div>
      </div>

      {/* Main Header Brand Area */}
      <div className="header-main-content">
        <div className="brand-badge-container">
          <div className="nba-logo-ball">
            <svg viewBox="0 0 100 100" className="ball-svg" aria-hidden="true">
              <defs>
                <linearGradient id="nbaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6600" />
                  <stop offset="60%" stopColor="#8b2be2" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#nbaGrad)" filter="url(#glow)" />
              <path d="M5 50h90M50 5v90" stroke="#08070d" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M17 17c18 20 18 46 0 66M83 17c-18 20-18 46 0 66" stroke="#08070d" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="brand-text-block">
            <div className="brand-tag">GALERIA OFICIAL DE ASTROS</div>
            <h1 className="header-title">
              NBA <span className="title-highlight-orange">ASTROS</span> <span className="title-highlight-purple">SHOWCASE</span>
            </h1>
            <p className="header-description">
              As maiores lendas do basquete em alta definição, estatísticas de elite e visual com energia eletrizante.
            </p>
          </div>
        </div>

        {/* Action Button: Add Player */}
        <div className="header-actions">
          <button 
            type="button"
            className="btn-add-astro" 
            onClick={onAbrirModalNovo}
            title="Adicionar novo jogador à galeria"
          >
            <span className="btn-icon">+</span>
            <span>Novo Astro</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="header-controls-bar">
        {/* Search input */}
        <div className="search-box">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por nome, time ou posição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              type="button" 
              className="clear-search-btn"
              onClick={() => setSearchTerm("")}
              title="Limpar busca"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="filter-pills-row">
          <button
            type="button"
            className={`pill-btn ${filtroTime === "TODOS" && !mostrarFavoritos ? "active" : ""}`}
            onClick={() => {
              setFiltroTime("TODOS");
              setMostrarFavoritos(false);
            }}
          >
            Todos ({totalJogadores})
          </button>

          <button
            type="button"
            className={`pill-btn pill-favorite ${mostrarFavoritos ? "active-fav" : ""}`}
            onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
          >
            ★ Favoritos
          </button>

          {times.map((time) => (
            <button
              key={time}
              type="button"
              className={`pill-btn ${filtroTime === time && !mostrarFavoritos ? "active" : ""}`}
              onClick={() => {
                setFiltroTime(time);
                setMostrarFavoritos(false);
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
