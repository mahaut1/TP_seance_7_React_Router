import { useState } from "react";

export default function TaskForm({ onAjouter, taches }) {
  const [texte, setTexte] = useState("");
  const [erreur, setErreur] = useState("");

  function gererEnvoi(event) {
    event.preventDefault();
    const valeur = texte.trim();

    if (!valeur) {
      setErreur("Saisis une tâche.");
      return;
    }

    if (valeur.length > 80) {
      setErreur("La tâche ne doit pas dépasser 80 caractères.");
      return;
    }
    const doublon = taches.some(
      (tache) =>
        tache.texte.trim().toLowerCase() === valeur.toLowerCase()
    );

    if (doublon) {
      setErreur("Cette tâche existe déjà.");
      return;
    }
    onAjouter(valeur);
    setTexte("");
    setErreur("");
  }

  return (
    <form onSubmit={gererEnvoi}>
      <label htmlFor="nouvelle-tache">Nouvelle tâche</label>
      <div className="ligne-formulaire">
        <input id="nouvelle-tache" value={texte}
          onChange={(event) => {
            setTexte(event.target.value);
            setErreur("");
          }} placeholder="Ex. : Réviser les props" />
        <button type="submit">Ajouter</button>
      </div>
      {erreur && <p className="erreur" role="alert">{erreur}</p>}
    </form>
  );
}
