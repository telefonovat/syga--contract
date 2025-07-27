import { VisualizationFrame } from '../../domain/visualization/VisualizationFrame';
import { SygaAPIResponse } from '../SygaApiResponse';

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
  extends SygaAPIResponse {
  result: ExecuteAlgorithmResult;
}
