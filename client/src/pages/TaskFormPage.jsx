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
        });
      } else {
        createTask({
          ...data,
        });
      }

      alert('Cógido registrado correctamente!');
      navigate("/tasks");
    } catch (error) {
      console.log(error);
      alert('El cógido ya se encuentra registrado!');
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("codigo", task.codigo);
        setValue("estado", task.estado);
        setValue("completed", task.completed);
      }
    };
    loadTask();
  }, []);

  return (
    <div className="h-[calc(100vh-110px)] flex items-center justify-center">
    <Card>
    <h1 className="text-3xl font-bold">Registro de nuevo código</h1><br />
    <p>El rango numérico de los posibles códigos ganadores es desde 1 hasta 999, mucha suerte!</p><br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="codigo">A continuación digite el código obtenido:</Label>
        <Input
          type="number"
          name="codigo"
          id="codigo"
          placeholder="Código sin espacios"
          {...register("codigo")}
          autoFocus
          required
          min="1"
          max="999"
        />

         <Input
          type="text"
          name="estado"
          placeholder="Estado"
          {...register("estado")}
          autoFocus
          value="Registrado"
          hidden
        />

        <br /><br /><Button>Registrar</Button>
      </form>
    </Card>
    </div>
  );
}
