import { useState } from "react";

export function ModalNovoJogador({ isOpen, onClose, onAdicionar }) {
  const [nome, setNome] = useState("");
  const [time, setTime] = useState("Los Angeles Lakers");
  const [posicao, setPosicao] = useState("Ala");
  const [numero, setNumero] = useState("");
  const [foto, setFoto] = useState("");
  const [ppg, setPpg] = useState("");
  const [titulos, setTitulos] = useState("");
  const [allStar, setAllStar] = useState("");
  const [conferencia, setConferencia] = useState("Oeste");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim()) return;

    const novo = {
      id: Date.now(),
      nome: nome.trim(),
      time: time.trim(),
      posicao: posicao.trim(),
      numero: numero.trim().startsWith("#") ? numero.trim() : `#${numero.trim() || "00"}`,
      foto: foto.trim() || "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=60",
      ppg: ppg.trim() ? (ppg.includes("PPG") ? ppg : `${ppg} PPG`) : "20.5 PPG",
      titulos: titulos.trim() || "1x Campeão",
      allStar: allStar.trim() || "1x All-Star",
      conferencia: conferencia
    };

    onAdicionar(novo);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container modal-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} title="Fechar">
          ✕
        </button>

        <div className="modal-form-header">
          <span className="form-tag">NBA DRAFT 2026</span>
          <h2 className="modal-form-title">Adicionar Novo Astro</h2>
          <p className="modal-form-subtitle">Cadastre um novo jogador de basquete para a galeria.</p>
        </div>

        <form onSubmit={handleSubmit} className="new-player-form">
          <div className="form-row">
            <div className="form-group flex-2">
              <label>Nome do Jogador *</label>
              <input
                type="text"
                required
                placeholder="Ex: Kevin Durant"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="form-group flex-1">
              <label>Número da Camisa</label>
              <input
                type="text"
                placeholder="Ex: #35"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label>Time</label>
              <input
                type="text"
                placeholder="Ex: Phoenix Suns"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-group flex-1">
              <label>Posição</label>
              <select value={posicao} onChange={(e) => setPosicao(e.target.value)}>
                <option value="Armador">Armador (PG)</option>
                <option value="Ala-Armador">Ala-Armador (SG)</option>
                <option value="Ala">Ala (SF)</option>
                <option value="Ala-Pivô">Ala-Pivô (PF)</option>
                <option value="Pivô">Pivô (C)</option>
              </select>
            </div>
            <div className="form-group flex-1">
              <label>Conferência</label>
              <select value={conferencia} onChange={(e) => setConferencia(e.target.value)}>
                <option value="Oeste">Oeste</option>
                <option value="Leste">Leste</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label>Média (PPG)</label>
              <input
                type="text"
                placeholder="Ex: 27.3"
                value={ppg}
                onChange={(e) => setPpg(e.target.value)}
              />
            </div>
            <div className="form-group flex-1">
              <label>Títulos</label>
              <input
                type="text"
                placeholder="Ex: 2x Campeão"
                value={titulos}
                onChange={(e) => setTitulos(e.target.value)}
              />
            </div>
            <div className="form-group flex-1">
              <label>All-Star</label>
              <input
                type="text"
                placeholder="Ex: 14x All-Star"
                value={allStar}
                onChange={(e) => setAllStar(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>URL da Foto (imagem na internet)</label>
            <input
              type="url"
              placeholder="https://..."
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit-orange">
              Cadastrar Astro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
