import { z } from 'zod';

export const ApiRequestBodySchema = z.object({});
export type ApiRequestBody = z.infer<typeof ApiRequestBodySchema>;
