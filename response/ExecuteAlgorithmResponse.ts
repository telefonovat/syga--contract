import { ExecuteAlgorithmSuccessResponse } from './results';
import { SygaAPIErrorResponse } from './SygaApiErrorResponse';

export type ExecuteAlgorithmResponse =
  | ExecuteAlgorithmSuccessResponse
  | SygaAPIErrorResponse;
