import { useState } from "react";

export function ModalDetalhes({ jogador, onClose }) {
  const [imgErr, setImgErr] = useState(false);

  if (!jogador) return null;

  const fallbackImage =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect width='200' height='200' fill='%2312111d'/><circle cx='100' cy='100' r='60' fill='%23ff6600' opacity='0.25'/><path d='M100 50 A50 50 0 0 1 100 150 M50 100 A50 50 0 0 1 150 100' stroke='%23a855f7' stroke-width='4' fill='none'/><text x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffa166' font-family='sans-serif' font-weight='bold' font-size='14'>NBA STAR</text></svg>";

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} title="Fechar">
          ✕
        </button>

        <div className="modal-header-hero">
          <div className="modal-glow"></div>
          <img
            src={imgErr ? fallbackImage : (jogador.foto || fallbackImage)}
            alt={jogador.nome}
            className="modal-player-img"
            onError={() => setImgErr(true)}
          />
          <div className="modal-player-title-box">
            <div className="modal-badges">
              <span className="badge-jersey-number">{jogador.numero}</span>
              <span className="badge-position">{jogador.posicao}</span>
              <span className="badge-team">{jogador.time}</span>
            </div>
            <h2 className="modal-player-name">{jogador.nome}</h2>
            <p className="modal-conf-text">
              Conferência {jogador.conferencia || "NBA"} • Temporada 2026
            </p>
          </div>
        </div>

        <div className="modal-body">
          <h4 className="modal-section-title">Estatísticas & Conquistas</h4>
          <div className="modal-stats-row">
            <div className="modal-stat-card orange-border">
              <span className="stat-card-title">MÉDIA DE PONTOS</span>
              <span className="stat-card-value orange">{jogador.ppg || "25+ PPG"}</span>
              <span className="stat-card-sub">Por partida na carreira</span>
            </div>

            <div className="modal-stat-card purple-border">
              <span className="stat-card-title">CAMPEONATOS</span>
              <span className="stat-card-value purple">{jogador.titulos || "1x"}</span>
              <span className="stat-card-sub">Troféus Larry O'Brien</span>
            </div>

            <div className="modal-stat-card purple-light-border">
              <span className="stat-card-title">SELEÇÕES ALL-STAR</span>
              <span className="stat-card-value purple-light">{jogador.allStar || "All-Star"}</span>
              <span className="stat-card-sub">Votação global da NBA</span>
            </div>
          </div>

          <div className="modal-bio-card">
            <h4>Sobre o Astro</h4>
            <p>
              {jogador.nome} é amplamente reconhecido como uma das forças mais dominantes da NBA moderna, defendendo as cores do <strong>{jogador.time}</strong> com jogadas memoráveis, liderança dentro de quadra e impacto global no basquete.
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal-close" onClick={onClose}>
            Fechar Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
