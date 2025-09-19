import { z } from 'zod';
import { ApiRequest, ApiRequestSchema } from './ApiRequest';

export const AuthenticateRequestSchema = ApiRequestSchema.extend({
  username: z.string(),
  password: z.string(),
});
export type AuthenticateRequest = z.infer<
  typeof AuthenticateRequestSchema
>;

export function isAuthenticateRequest(
  input: any,
): input is AuthenticateRequest {
  return 'username' in input && 'password' in input;
}
