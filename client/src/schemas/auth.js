import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingrese un correo electrónico válido!",
  }),
  password: z.string().min(6, {
    message: "El valor mínimo de la contraseña es de 6 caractéres!",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Nombre de usuario es requerido!",
      })
      .min(3, {
        message: "El valor mínimo del nombre de usuario es de 3 caractéres!",
      }),
    fechanac: z
      .string({
        required_error: "Fecha de nacimiento es requerida!",
      }),
    identificacion: z
      .string({
        required_error: "Número de dentificación es requerido!",
      }),
    email: z.string().email({
      message: "Por favor ingrese un correo electrónico válido!",
    }),
    celular: z
      .string({
        required_error: "Número de celular es requerido!",
      }),
    password: z.string().min(6, {
      message: "El valor mínimo de la contraseña es de 6 caractéres!",
    }),
    confirmPassword: z.string().min(6, {
      message: "El valor mínimo de la contraseña es de 6 caractéres!",
    }),
    perfil: z
      .string({
        required_error: "Número de perfil es requerido!",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden!",
    path: ["confirmPassword"],
  });
