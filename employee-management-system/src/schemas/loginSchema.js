import { z } from "zod";

export const loginSchema = z.object({

  username: z
    .string()
    .min(3, "Minimum 3 characters"),

  role: z
    .string()
    .min(1, "Select a role")

});