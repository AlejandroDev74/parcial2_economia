import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/add-task");
  }, [isAuthenticated]);

  return (
    <div className="h-[calc(120vh-110px)] flex items-center justify-center">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold">Registro de nuevo usuario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">Nombre:</Label>
          <Input
            type="text"
            name="username"
            placeholder="Nombre completo"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="text-sm text-red-500">{errors.username?.message}</p>
          )}

          <Label htmlFor="fechanac">Fecha de nacimiento:</Label>
          <Input
            type="date"
            name="fechanac"
            {...register("fechanac")}
          />
          {errors.fechanac?.message && (
            <p className="text-sm text-red-500">{errors.fechanac?.message}</p>
          )}

          <Label htmlFor="identificacion">Número de identificación:</Label>
          <Input
            type="number"
            name="identificacion"
            {...register("identificacion")}
          />
          {errors.identificacion?.message && (
            <p className="text-sm text-red-500">{errors.identificacion?.message}</p>
          )}

          <Label htmlFor="email">Correo:</Label>
          <Input
            name="email"
            placeholder="Correo electrónico"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          )}

          <Label htmlFor="celular">Número de celular:</Label>
          <Input
            type="number"
            name="celular"
            {...register("celular")}
          />
          {errors.celular?.message && (
            <p className="text-sm text-red-500">{errors.celular?.message}</p>
          )}

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirmar contraseña:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-sm text-red-500">{errors.confirmPassword?.message}</p>
          )}

          <Input
          type="text"
          name="perfil"
          {...register("perfil")}
          autoFocus
          value="Estandar"
          hidden
          />

          <Button>Registrarse</Button>
        </form>
        <p className="flex gap-x-2 justify-between">
         ¿Ya posees una cuenta!? <Link to="/login" className="text-sky-500">Iniciar sesión!</Link>
        </p>
      </Card>
    </div>
  );
}

export default Register;
