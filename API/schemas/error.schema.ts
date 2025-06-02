import { z } from "zod";

export const ErrorDetailSchema = z.object({
  status: z.literal("401"),
  title: z.literal("Unauthorized"),
  detail: z.literal("You are not authorized to perform the requested action."),
});

export const ErrorResponseSchema = z.object({
  errors: z.array(ErrorDetailSchema),
});

export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
export type ErrorDetail = z.infer<typeof ErrorDetailSchema>;
