export default function TaskItem({ tache }) {
  return (
    <li>
      {tache.texte}
      {tache.terminee && " ✓"}
    </li>
  );
}
