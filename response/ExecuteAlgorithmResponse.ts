export {
  ExecuteAlgorithmSuccessResponse,
  isExecuteAlgorithmResult,
  isExecuteAlgorithmSuccessResponse,
} from './results';
import { ExecuteAlgorithmSuccessResponse } from './results';
import { SygaAPIErrorResponse } from './SygaApiErrorResponse';

export type ExecuteAlgorithmResponse =
  | ExecuteAlgorithmSuccessResponse
  | SygaAPIErrorResponse;
