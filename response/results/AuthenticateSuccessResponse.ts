import { ApiSuccessResponse } from '../ApiSuccessResponse';

interface AuthenticateSuccessPayload {
  accessToken: string;
  refreshToken: string;
}

export interface AuthenticateSuccessResponse
  extends ApiSuccessResponse<AuthenticateSuccessPayload> {
  payload: AuthenticateSuccessPayload;
}

export function isAuthenticateSuccessResponse(
  input: any,
): input is AuthenticateSuccessResponse {
  return 'accessToken' in input && 'refreshToken' in input;
}
