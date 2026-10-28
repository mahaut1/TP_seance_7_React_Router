import { useState } from "react";



export default function TaskItem({ tache, onBasculer, onSupprimer, onModifier }) {
  const [enEdition, setEnEdition] = useState(false);
  const [texteModifie, setTexteModifie] = useState(tache.texte);


  function commencerEdition() {
    setTexteModifie(tache.texte);
    setEnEdition(true);
  }

  function annulerEdition() {
    setTexteModifie(tache.texte);
    setEnEdition(false);
  }
  function enregistrerEdition() {
    const texte = texteModifie.trim();

    if (!texte) return;

    onModifier(tache.id, texte);
    setEnEdition(false);
  }

  return (
    <li className="element-tache">
      {enEdition ? (
        <>
          <input
            type="text"
            value={texteModifie}
            onChange={(event) => setTexteModifie(event.target.value)}
          />

          <button type="button" onClick={enregistrerEdition}>
            Enregistrer
          </button>

          <button type="button" onClick={annulerEdition}>
            Annuler
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={tache.terminee}
              onChange={() => onBasculer(tache.id)}
            />
            <span
              style={{
                textDecoration: tache.terminee ? "line-through" : "none",
              }}
            >
              {tache.texte}
            </span>
          </label>
          <button
            type="button"
            onClick={commencerEdition}
          >
            Modifier
          </button>
          <button
            type="button"
            className="bouton-supprimer"
            onClick={() => onSupprimer(tache.id)}
          >
            Supprimer
          </button>
        </>
      )}
    </li>
  );
}
