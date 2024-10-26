import { z } from "zod";

export const taskSchema = z.object({
  codigo: z.string({
    required_error: "El código es requerido!",
  }),
});