export type {
  isExecuteAlgorithmResult,
  isExecuteAlgorithmSuccessResponse,
} from './results';
export type { ExecuteAlgorithmSuccessResponse } from './results';
import { ExecuteAlgorithmSuccessResponse } from './results';
import { ApiErrorResponse } from './ApiErrorResponse';

export type ExecuteAlgorithmResponse =
  | ExecuteAlgorithmSuccessResponse
  | ApiErrorResponse;
