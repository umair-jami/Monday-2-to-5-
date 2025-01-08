import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, "Minimum 3 characters")
      .max(20, "Maximum 20 characters"),
    email: z.string().email().min(3, "Minimum 3 characters"),
    password: z
      .string()
      .min(3, "Minimum 8 characters")
      .max(20, "Maximum 20 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// type formType = {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };
export type formType = z.infer<typeof signUpSchema>;