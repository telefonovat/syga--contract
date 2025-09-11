import {
  isSygaAlgorithmIdentifier,
  SygaAlgorithmIdentifier,
} from '../../domain/';
import { ApiSuccessResponse } from '../ApiSuccessResponse';
type AddAlgorithmsSuccessPayload = SygaAlgorithmIdentifier[];

export interface AddAlgorithmsSuccessBody
  extends ApiSuccessResponse<AddAlgorithmsSuccessPayload> {
  payload: AddAlgorithmsSuccessPayload;
}

export function isAddAlgorithmsSuccessBody(
  input: any,
): input is AddAlgorithmsSuccessBody {
  return (
    Array.isArray(input) &&
    (input.length === 0 || isSygaAlgorithmIdentifier(input[0]))
  );
}
