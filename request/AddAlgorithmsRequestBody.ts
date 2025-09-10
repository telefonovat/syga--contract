import {
  isSygaAlgorithmCreateParams,
  SygaAlgorithmCreateParams,
} from '../domain/user';
import { ApiRequest } from './ApiRequest';

export interface AddAlgorithmsRequestBody extends ApiRequest {
  algorithms: SygaAlgorithmCreateParams[];
}

export function isAddAlgorithmsRequestBody(
  input: any,
): input is AddAlgorithmsRequestBody {
  return (
    'algorithms' in input &&
    Array.isArray(input.algorithms) &&
    (input.algorithms.length === 0 ||
      isSygaAlgorithmCreateParams(input.algorithms[0]))
  );
}
