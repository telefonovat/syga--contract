import {
  isSygaAlgorithmIdentifier,
  SygaAlgorithmIdentifier,
} from '../../domain';
import { ApiSuccessResponse } from '../ApiSuccessResponse';

type UserAlgorithmsPayload = SygaAlgorithmIdentifier[];

export interface GetUserAlgorithmsSuccessResponse
  extends ApiSuccessResponse<UserAlgorithmsPayload> {
  payload: UserAlgorithmsPayload;
}

export function isGetUserAlgorithmsSuccessResponse(
  input: any,
): input is UserAlgorithmsPayload {
  return (
    Array.isArray(input) &&
    (input.length === 0 || isSygaAlgorithmIdentifier(input[0]))
  );
}
