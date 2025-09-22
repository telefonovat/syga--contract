import { ApiSuccessResponse } from '../ApiSuccessResponse';

interface SigninSuccessBodyPayload {
  accessToken: string;
  refreshToken: string;
}

export interface SigninSucessBody
  extends ApiSuccessResponse<SigninSuccessBodyPayload> {
  payload: SigninSuccessBodyPayload;
}

export function isSigninSuccessBody(
  input: any,
): input is SigninSucessBody {
  return 'accessToken' in input && 'refreshToken' in input;
}
