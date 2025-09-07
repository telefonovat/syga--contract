export {
  ExecuteAlgorithmSuccessResponse,
  isExecuteAlgorithmResult,
  isExecuteAlgorithmSuccessResponse,
} from './results';
import { ExecuteAlgorithmSuccessResponse } from './results';
import { ApiErrorResponse } from './ApiErrorResponse';

export type ExecuteAlgorithmResponse =
  | ExecuteAlgorithmSuccessResponse
  | ApiErrorResponse;
