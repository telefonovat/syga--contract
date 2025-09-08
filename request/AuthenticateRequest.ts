export interface AuthenticateRequest {
  username: string;
  password: string;
}

export function isAuthenticateRequest(
  input: any,
): input is AuthenticateRequest {
  return 'username' in input && 'password' in input;
}
