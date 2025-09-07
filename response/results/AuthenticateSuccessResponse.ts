import { ApiSuccessResponse } from '../ApiSuccessResponse';

interface AuthenticateSuccessPayload {
  accessToken: string;
  refreshToken: string;
}

export interface AuthenticateSuccessResponse
  extends ApiSuccessResponse<AuthenticateSuccessPayload> {
  payload: AuthenticateSuccessPayload;
}
