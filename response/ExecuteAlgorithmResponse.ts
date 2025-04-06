import { ExecuteAlgorithmSuccessResult } from './results';
import { SygaApiErrorResponse } from './SygaApiErrorResponse';

export type ExecuteAlgorithmResponse =
  | ExecuteAlgorithmSuccessResult
  | SygaApiErrorResponse;
