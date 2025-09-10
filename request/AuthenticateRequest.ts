import { ApiRequest } from './ApiRequest';

export interface AuthenticateRequest extends ApiRequest {
  username: string;
  password: string;
}

export function isAuthenticateRequest(
  input: any,
): input is AuthenticateRequest {
  return 'username' in input && 'password' in input;
}
