import { useState } from "react";

export function Card({ jogador, isFavorito, onToggleFavorito, onVerDetalhes }) {
  const [imageError, setImageError] = useState(false);

  if (!jogador) return null;

  // Fallback basketball silhouette in SVG format
  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect width='200' height='200' fill='%2312111d'/><circle cx='100' cy='100' r='60' fill='%23ff6600' opacity='0.25'/><path d='M100 50 A50 50 0 0 1 100 150 M50 100 A50 50 0 0 1 150 100' stroke='%23a855f7' stroke-width='4' fill='none'/><text x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffa166' font-family='sans-serif' font-weight='bold' font-size='14'>NBA STAR</text></svg>";

  return (
    <article className={`nba-card ${isFavorito ? "card-is-favorito" : ""}`}>
      {/* Top Card Badges & Actions */}
      <div className="card-top-bar">
        <div className="card-badges-group">
          {jogador.numero && (
            <span className="badge-jersey-number" title="Número da camisa">
              {jogador.numero}
            </span>
          )}
          {jogador.posicao && (
            <span className="badge-position">
              {jogador.posicao}
            </span>
          )}
        </div>

        <button
          type="button"
          className={`btn-fav-star ${isFavorito ? "fav-active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito(jogador.id);
          }}
          title={isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          aria-label={isFavorito ? "Favoritado" : "Favoritar"}
        >
          <svg viewBox="0 0 24 24" className="heart-icon">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Card Image with Neon Backdrop */}
      <div className="card-media-wrapper">
        <div className="card-glow-aura"></div>
        <img
          src={imageError ? fallbackImage : (jogador.foto || fallbackImage)}
          alt={jogador.nome}
          className="card-player-img"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        {jogador.conferencia && (
          <span className="conference-tag">
            Conf. {jogador.conferencia}
          </span>
        )}
      </div>

      {/* Card Info Section */}
      <div className="card-info-content">
        <div className="card-team-name">
          <span className="team-indicator-dot"></span>
          {jogador.time || "NBA Franchise"}
        </div>

        <h3 className="card-player-name" title={jogador.nome}>
          {jogador.nome}
        </h3>

        {/* Mini stats showcase */}
        <div className="card-stats-grid">
          <div className="stat-box">
            <span className="stat-label">MÉDIA</span>
            <span className="stat-value orange">{jogador.ppg || "25.0 PPG"}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">TÍTULOS</span>
            <span className="stat-value purple">{jogador.titulos || "1x Campeão"}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">ALL-STAR</span>
            <span className="stat-value purple-light">{jogador.allStar || "All-Star"}</span>
          </div>
        </div>

        {/* Card Interactive Footer */}
        <div className="card-footer-action">
          <button
            type="button"
            className="btn-card-details"
            onClick={() => onVerDetalhes(jogador)}
          >
            <span>Ver Destaques</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
