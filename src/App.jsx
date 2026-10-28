import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const tachesInitiales = [
  { id: 1, texte: "Réviser React", terminee: false },
  { id: 2, texte: "Préparer le TP", terminee: true },
  { id: 3, texte: "Tester l'application", terminee: false },
];

export default function App() {
  const [taches, setTaches] = useState(tachesInitiales);

  function ajouterTache(texte) {
    const nouvelleTache = {
      id: crypto.randomUUID(),
      texte,
      terminee: false,
    };

    setTaches((precedentes) => [...precedentes, nouvelleTache]);
  }

  return (
    <main className="application">
      <h1>Mes tâches</h1>
      <TaskForm onAjouter={ajouterTache} />
      <TaskList taches={taches} />
    </main>
  );
}
