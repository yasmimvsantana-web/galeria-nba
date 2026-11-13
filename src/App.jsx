import { useState } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { ModalDetalhes } from "./components/ModalDetalhes";
import { ModalNovoJogador } from "./components/ModalNovoJogador";
import "./App.css";

const jogadoresIniciais = [
  {
    id: 1,
    nome: "LeBron James",
    time: "Los Angeles Lakers",
    posicao: "Ala",
    numero: "#23",
    ppg: "27.1 PPG",
    titulos: "4x Campeão",
    allStar: "20x All-Star",
    conferencia: "Oeste",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdAqiwoRffTILgGBnuOR27MWiChkS0bSW-NilVssb_g&s"
  },
  {
    id: 2,
    nome: "Stephen Curry",
    time: "Golden State Warriors",
    posicao: "Armador",
    numero: "#30",
    ppg: "24.8 PPG",
    titulos: "4x Campeão",
    allStar: "10x All-Star",
    conferencia: "Oeste",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qlti9XWzYZ6Ch9f2_XIW2E5fJI3LG3k4Qz-ydT1rog&s=10"
  },
  {
    id: 3,
    nome: "Giannis Antetokounmpo",
    time: "Milwaukee Bucks",
    posicao: "Ala-Pivô",
    numero: "#34",
    ppg: "23.4 PPG",
    titulos: "1x Campeão",
    allStar: "8x All-Star",
    conferencia: "Leste",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAgcU9WDs_ZQvffyRH1J8oSu9rGEUa6lgTPpDLACDhQ&s=10"
  },
  {
    id: 4,
    nome: "Luka Dončić",
    time: "Dallas Mavericks",
    posicao: "Armador",
    numero: "#77",
    ppg: "28.7 PPG",
    titulos: "Vice-Campeão",
    allStar: "5x All-Star",
    conferencia: "Oeste",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwS9pjO4izddbeb9lGiD0oVvKXUUfnMtuCoTuoyKTJA&s=10"
  },
  {
    id: 5,
    nome: "Nikola Jokić",
    time: "Denver Nuggets",
    posicao: "Pivô",
    numero: "#15",
    ppg: "20.9 PPG",
    titulos: "1x Campeão",
    allStar: "6x All-Star",
    conferencia: "Oeste",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVERpr8N5qX0LrRx138qRlaIraccOJrMWDAjd39-4QGQ&s=10"
  },
  {
    id: 6,
    nome: "Jayson Tatum",
    time: "Boston Celtics",
    posicao: "Ala",
    numero: "#0",
    ppg: "23.1 PPG",
    titulos: "1x Campeão",
    allStar: "5x All-Star",
    conferencia: "Leste",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkg5nPl73ySmAvQeOL_vTavwON9CAluiYsodL08gjcQ&s=10"
  }
];

function App() {
  const [jogadores, setJogadores] = useState(jogadoresIniciais);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroTime, setFiltroTime] = useState("TODOS");
  const [favoritos, setFavoritos] = useState([1, 2]); // LeBron e Curry favoritados por padrão
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [jogadorDetalhes, setJogadorDetalhes] = useState(null);
  const [modalNovoAberto, setModalNovoAberto] = useState(false);

  // Toggle favorite status
  const handleToggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Add new player to gallery
  const handleAdicionarJogador = (novoJogador) => {
    setJogadores((prev) => [novoJogador, ...prev]);
  };

  // Extract unique short team names for filtering
  const times = Array.from(
    new Set(
      jogadores.map((j) => {
        const parts = j.time.split(" ");
        return parts[parts.length - 1]; // e.g. "Lakers", "Warriors", "Bucks"
      })
    )
  );

  // Filter logic
  const jogadoresFiltrados = jogadores.filter((jogador) => {
    const matchBusca =
      jogador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jogador.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jogador.posicao.toLowerCase().includes(searchTerm.toLowerCase());

    const matchTime =
      filtroTime === "TODOS" || jogador.time.includes(filtroTime);

    const matchFavorito = !mostrarFavoritos || favoritos.includes(jogador.id);

    return matchBusca && matchTime && matchFavorito;
  });

  return (
    <div className="app-layout">
      {/* Dynamic Header */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filtroTime={filtroTime}
        setFiltroTime={setFiltroTime}
        times={times}
        totalJogadores={jogadores.length}
        mostrarFavoritos={mostrarFavoritos}
        setMostrarFavoritos={setMostrarFavoritos}
        onAbrirModalNovo={() => setModalNovoAberto(true)}
      />

      {/* Main Showcase Gallery */}
      <main className="main-content">
        <div className="gallery-header-info">
          <div className="section-title-wrap">
            <h2 className="section-title">
              {mostrarFavoritos ? "Meus Astros Favoritos" : "Galeria de Jogadores"}
            </h2>
            <span className="results-counter">
              Exibindo {jogadoresFiltrados.length} de {jogadores.length} jogadores
            </span>
          </div>

          {(searchTerm || filtroTime !== "TODOS" || mostrarFavoritos) && (
            <button
              type="button"
              className="btn-clear-filters"
              onClick={() => {
                setSearchTerm("");
                setFiltroTime("TODOS");
                setMostrarFavoritos(false);
              }}
            >
              Resetar Filtros ↺
            </button>
          )}
        </div>

        {jogadoresFiltrados.length > 0 ? (
          <section className="galeria" aria-label="Galeria de Astros da NBA">
            {jogadoresFiltrados.map((jogador) => (
              <Card
                key={jogador.id}
                jogador={jogador}
                isFavorito={favoritos.includes(jogador.id)}
                onToggleFavorito={handleToggleFavorito}
                onVerDetalhes={(j) => setJogadorDetalhes(j)}
              />
            ))}
          </section>
        ) : (
          <div className="empty-state">
            <div className="empty-ball-icon">🏀</div>
            <h3>Nenhum astro encontrado</h3>
            <p>Tente alterar o termo de busca ou limpar os filtros selecionados.</p>
            <button
              type="button"
              className="btn-reset-empty"
              onClick={() => {
                setSearchTerm("");
                setFiltroTime("TODOS");
                setMostrarFavoritos(false);
              }}
            >
              Ver Todos os Astros
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal: Detalhes do Jogador */}
      {jogadorDetalhes && (
        <ModalDetalhes
          jogador={jogadorDetalhes}
          onClose={() => setJogadorDetalhes(null)}
        />
      )}

      {/* Modal: Cadastrar Novo Jogador */}
      <ModalNovoJogador
        isOpen={modalNovoAberto}
        onClose={() => setModalNovoAberto(false)}
        onAdicionar={handleAdicionarJogador}
      />
    </div>
  );
}

export default App;
