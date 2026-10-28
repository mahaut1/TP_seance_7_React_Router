import TaskItem from "./TaskItem.jsx";

export default function TaskList({ taches }) {
  return (
    <ul className="liste-taches">
      {taches.map((tache) => (
        <TaskItem key={tache.id} tache={tache} />
      ))}
    </ul>
  );
}
