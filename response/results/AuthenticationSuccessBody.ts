import { z } from 'zod';
import { getApiSuccessBodySchema } from '../ApiSuccessResponse';

const AuthenticationSuccessBodyPayload = z.object({
  username: z.string(),
});

export const AuthenticationSuccessBodySchema =
  getApiSuccessBodySchema(AuthenticationSuccessBodyPayload);

export type AuthenticationSuccessBody = z.infer<
  typeof AuthenticationSuccessBodySchema
>;
