import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const tachesInitiales = [
  { id: 1, texte: "Réviser React", terminee: false },
  { id: 2, texte: "Préparer le TP", terminee: true },
  { id: 3, texte: "Tester l'application", terminee: false },
];

export default function App() {
  const [taches, setTaches] = useState(() => {
    const sauvegarde = localStorage.getItem("mes-taches");

    return sauvegarde ? JSON.parse(sauvegarde) : tachesInitiales;
  });
  useEffect(() => {
    localStorage.setItem("mes-taches", JSON.stringify(taches));
  }, [taches]);

  const [filtre, setFiltre] = useState("toutes");
  const tachesRestantes = taches.filter(
    (tache) => !tache.terminee
  );

  function ajouterTache(texte) {
    const nouvelleTache = {
      id: crypto.randomUUID(),
      texte,
      terminee: false,
    };

    setTaches((precedentes) => [...precedentes, nouvelleTache]);
  }

  function basculerTache(id) {
    setTaches((precedentes) =>
      precedentes.map((tache) =>
        tache.id === id
          ? { ...tache, terminee: !tache.terminee }
          : tache
      )
    );
  }

  function supprimerTache(id) {
    setTaches((precedentes) =>
      precedentes.filter((tache) => tache.id !== id)
    );
  }

  function modifierTache(id, nouveauTexte) {
    setTaches((precedentes) =>
      precedentes.map((tache) =>
        tache.id === id
          ? { ...tache, texte: nouveauTexte }
          : tache
      )
    );
  }
  const tachesFiltrees = taches.filter((tache) => {
    if (filtre === "actives") {
      return !tache.terminee;
    }

    if (filtre === "terminees") {
      return tache.terminee;
    }

    return true;
  });

  return (
    <main className="application">
      <h1>Mes tâches</h1>
      <p>
        {tachesRestantes.length} tâches restantes sur {taches.length}
      </p>
      <TaskForm onAjouter={ajouterTache} taches={taches} />
      <div className="filtres">
        <button
          type="button"
          className={filtre === "toutes" ? "actif" : ""}
          onClick={() => setFiltre("toutes")}
        >
          Toutes
        </button>

        <button
          type="button"
          className={filtre === "actives" ? "actif" : ""}
          onClick={() => setFiltre("actives")}
        >
          À faire
        </button>

        <button
          type="button"
          className={filtre === "terminees" ? "actif" : ""}
          onClick={() => setFiltre("terminees")}
        >
          Terminées
        </button>
      </div>
      <TaskList
        taches={tachesFiltrees}
        onBasculer={basculerTache}
        onSupprimer={supprimerTache}
        onModifier={modifierTache} />
    </main>
  );
}
