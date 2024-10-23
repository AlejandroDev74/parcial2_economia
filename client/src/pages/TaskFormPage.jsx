import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <div className="h-[calc(100vh-110px)] flex items-center justify-center">
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">A continuación digite el código:</Label><br />
        <Input
          type="text"
          name="title"
          placeholder="Código sin espacios"
          {...register("title")}
          autoFocus
        />

        {errors.title && (
          <p className="text-sm text-red-500">Debe ingresar un código!</p>
        )}

        <Label htmlFor="date">Fecha:</Label>
        <Input type="date" name="date" {...register("date")} />

        <br /><br /><Button>Registrar</Button>
      </form>
    </Card>
    </div>
  );
}
