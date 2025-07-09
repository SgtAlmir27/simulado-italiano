import { useState } from "react";

export default function SimuladoItaliano() {
  const perguntas = [
    {
      pergunta: "Dove si trova il turista?",
      opcoes: ["Alla stazione ferroviaria", "All'aeroporto", "Al museo", "Al ristorante"],
      resposta: 0,
    },
    {
      pergunta: "Che cosa ordina il cliente?",
      opcoes: ["Pizza margherita", "Pasta alla carbonara", "Insalata mista", "Risotto ai funghi"],
      resposta: 1,
    },
    {
      pergunta: "A che ora parte il treno?",
      opcoes: ["Alle 13:30", "Alle 14:00", "Alle 14:30", "Alle 15:00"],
      resposta: 2,
    },
    {
      pergunta: "Chi accompagna il ragazzo?",
      opcoes: ["Sua sorella", "Suo padre", "Un amico", "Nessuno"],
      resposta: 3,
    },
    {
      pergunta: "Perché il turista è in ritardo?",
      opcoes: ["Ha perso il biglietto", "C'era traffico", "Ha dimenticato i documenti", "Si è svegliato tardi"],
      resposta: 1,
    },
  ];

  const [nome, setNome] = useState("");
  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));
  const [resultado, setResultado] = useState(null);
  const [mostrarGabarito, setMostrarGabarito] = useState(false);

  function finalizarSimulado() {
    const corretas = respostas.filter((resposta, i) => resposta === perguntas[i].resposta).length;
    setResultado(`Aluno: ${nome || "(sem nome)"}. Você acertou ${corretas} de ${perguntas.length} questões.`);
  }

  return (
    <div style={{ padding: 20, backgroundColor: '#e0f2e9', minHeight: '100vh', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#1b4332' }}>Simulado Italiano - Nível 2 (CIDEX)</h1>

      <div style={{ marginBottom: 20 }}>
        <label>Digite seu nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginLeft: 10, padding: 5 }}
        />
      </div>

      <div style={{ marginBottom: 20, padding: 10, backgroundColor: '#ffffff', borderRadius: 5 }}>
        <h2>Texto base:</h2>
        <p>
          Un turista arriva in una grande stazione ferroviaria d'Italia. Dopo aver acquistato il biglietto,
          cerca un posto per pranzare. Decide di ordinare un piatto tipico e successivamente prende il treno
          delle 14:30 per Roma. Durante il viaggio, è accompagnato da nessuno e si lamenta del traffico che ha
          causato il suo ritardo.
        </p>
      </div>

      {perguntas.map((p, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <p><strong>{p.pergunta}</strong></p>
          {p.opcoes.map((opcao, j) => (
            <label key={j} style={{ display: 'block', marginBottom: 4 }}>
              <input
                type="radio"
                name={`pergunta-${i}`}
                value={j}
                checked={respostas[i] === j}
                onChange={() => {
                  const novasRespostas = [...respostas];
                  novasRespostas[i] = j;
                  setRespostas(novasRespostas);
                }}
              /> {opcao}
            </label>
          ))}
        </div>
      ))}

      <button onClick={finalizarSimulado} style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '8px 16px', borderRadius: 5, marginRight: 10 }}>
        Finalizar
      </button>

      <button onClick={() => setMostrarGabarito(!mostrarGabarito)} style={{ backgroundColor: '#6c757d', color: 'white', padding: '8px 16px', borderRadius: 5 }}>
        {mostrarGabarito ? "Ocultar Gabarito" : "Ver Gabarito"}
      </button>

      {resultado && <p style={{ marginTop: 20, fontWeight: 'bold', color: '#1b4332' }}>{resultado}</p>}

      {mostrarGabarito && (
        <div style={{ marginTop: 20, padding: 10, backgroundColor: '#ffffff', borderRadius: 5 }}>
          <h3>Gabarito:</h3>
          <ul>
            {perguntas.map((p, i) => (
              <li key={i}>{i + 1}. {p.opcoes[p.resposta]}</li>
            ))}
          </ul>
        </div>
      )}

      {resultado && (
        <button onClick={() => window.location.href = "#"} style={{ marginTop: 20, backgroundColor: '#1e6091', color: 'white', padding: '8px 16px', borderRadius: 5 }}>
          Próximo Simulado
        </button>
      )}
    </div>
  );
}
