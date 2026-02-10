import { VisualizationFrame } from '../../domain/visualization/VisualizationFrame';
import { ApiSuccessResponse } from '../ApiSuccessResponse';

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

export const isExecuteAlgorithmResult = (
  input: unknown,
): input is ExecuteAlgorithmResult => {
  return (
    typeof input === 'object' &&
    input !== null &&
    'timestamp' in input &&
    'response' in input &&
    'algorithmTime' in input &&
    'parseTime' in input &&
    'elapsed' in input &&
    'frames' in input
  );
};

export const isExecuteAlgorithmSuccessResponse = (
  input: any,
): input is ExecuteAlgorithmSuccessResponse => {
  return 'result' in input && isExecuteAlgorithmResult(input.result);
};
