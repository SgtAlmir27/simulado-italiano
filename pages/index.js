
import { useState } from 'react';

export default function Home() {
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

  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));
  const [resultado, setResultado] = useState(null);

  function finalizarSimulado() {
    const corretas = respostas.filter((resposta, i) => resposta === perguntas[i].resposta).length;
    setResultado(`Você acertou ${corretas} de ${perguntas.length} questões.`);
  }

  return (
    <div style={{ padding: 20, backgroundColor: '#e0f2e9', minHeight: '100vh', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#1b4332' }}>Simulado Italiano - Nível 2 (CIDEX)</h1>
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
      <button onClick={finalizarSimulado} style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '8px 16px', borderRadius: 5 }}>
        Finalizar
      </button>
      {resultado && <p style={{ marginTop: 20, fontWeight: 'bold', color: '#1b4332' }}>{resultado}</p>}
    </div>
  );
}
