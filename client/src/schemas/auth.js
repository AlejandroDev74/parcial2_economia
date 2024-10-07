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
    email: z.string().email({
      message: "Por favor ingrese un correo electrónico válido!",
    }),
    password: z.string().min(6, {
      message: "El valor mínimo de la contraseña es de 6 caractéres!",
    }),
    confirmPassword: z.string().min(6, {
      message: "El valor mínimo de la contraseña es de 6 caractéres!",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden!",
    path: ["confirmPassword"],
  });
