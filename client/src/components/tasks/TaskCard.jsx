import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">Código: {task.codigo}</h1>

      </header>
      <p className="text-slate-300">Estado: {task.estado}</p>
      <p>
        {task.createdAt &&
          new Date(task.createdAt).toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
  );
}
