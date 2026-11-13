export function Footer() {
  return (
    <footer className="nba-footer">
      <div className="footer-gradient-bar"></div>
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-ball-mini">🏀</span>
              <span className="footer-brand-title">NBA ASTROS</span>
            </div>
            <p className="footer-tagline">
              A vitrine definitiva dos maiores talentos do basquete mundial.
            </p>
          </div>

          <div className="footer-palette-showcase">
            <span className="palette-label">Identidade Visual:</span>
            <div className="palette-dots">
              <span className="dot dot-orange" title="Laranja Elétrico (#ff6600)"></span>
              <span className="dot dot-black" title="Preto Profundo (#08070d)"></span>
              <span className="dot dot-purple" title="Roxo Real (#8b2be2)"></span>
            </div>
            <span className="palette-names">Laranja • Preto • Roxo</span>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p>© 2026 NBA Astros Gallery. Todos os direitos reservados.</p>
          <p className="footer-tech">Desenvolvido com React 19 + Vite</p>
        </div>
      </div>
    </footer>
  );
}
