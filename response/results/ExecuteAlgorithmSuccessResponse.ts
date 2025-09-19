import { VisualizationFrame } from '../../domain/visualization/VisualizationFrame';
import { ApiSuccessResponse } from '../ApiSuccessResponse.ts';

interface ExecuteAlgorithmResult {
  timestamp: string;
  response: string;
  errorMessage?: string;
  algorithmTime: number;
  parseTime: number;
  elapsed: number;
  frames: VisualizationFrame[];
}

export interface ExecuteAlgorithmSuccessResponse
  extends ApiSuccessResponse<ExecuteAlgorithmResult> {
  payload: ExecuteAlgorithmResult;
}

export function isExecuteAlgorithmResult(
  input: any,
): input is ExecuteAlgorithmResult {
  return (
    'timestamp' in input &&
    'response' in input &&
    'algorithmTime' in input &&
    'parseTime' in input &&
    'elapsed' in input &&
    'frames' in input
  );
}

export function isExecuteAlgorithmSuccessResponse(
  input: any,
): input is ExecuteAlgorithmSuccessResponse {
  return 'result' in input && isExecuteAlgorithmResult(input.result);
}
