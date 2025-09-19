import { z } from 'zod';

export const ApiRequestSchema = z.object({});
export type ApiRequest = z.infer<typeof ApiRequestSchema>;
