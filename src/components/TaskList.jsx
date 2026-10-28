import TaskItem from "./TaskItem.jsx";

export default function TaskList({ taches, onBasculer, onSupprimer, onModifier }) {
  return (
    <ul className="liste-taches">
       {taches.map((tache) => (
        <TaskItem 
        key={tache.id}
         tache={tache}
        onBasculer={onBasculer}
        onSupprimer={onSupprimer}
        onModifier={onModifier}
          />
      ))}
    </ul>
  );
}
