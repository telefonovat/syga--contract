import { z } from 'zod';
import { ApiRequestBodySchema } from './ApiRequestBody';

export const AuthenticateRequestBodySchema =
  ApiRequestBodySchema.extend({
    username: z.string(),
    password: z.string(),
  });
export type AuthenticateRequestBody = z.infer<
  typeof AuthenticateRequestBodySchema
>;

export function isAuthenticateRequest(
  input: any,
): input is AuthenticateRequestBody {
  return 'username' in input && 'password' in input;
}
