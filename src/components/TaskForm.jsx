import { useState } from "react";

export default function TaskForm({ onAjouter }) {
  const [texte, setTexte] = useState("");
  const [erreur, setErreur] = useState("");

  function gererEnvoi(event) {
    event.preventDefault();
    const valeur = texte.trim();

    if (!valeur) {
      setErreur("Saisis une tâche.");
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
          onChange={(event) => setTexte(event.target.value)}
          placeholder="Ex. : Réviser les props" />
        <button type="submit">Ajouter</button>
      </div>
      {erreur && <p className="erreur" role="alert">{erreur}</p>}
    </form>
  );
}
