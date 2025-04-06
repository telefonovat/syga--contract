import { VisualizationFrame } from '../../domain/visualization/VisualizationFrame';
import { SygaApiResponse } from '../SygaApiResponse';

export interface ExecuteAlgorithmSuccessResult
  extends SygaApiResponse {
  timestamp: string;
  response: string;
  errorMessage?: string;
  algorithmTime: number;
  parseTime: number;
  elapsed: number;
  frames: VisualizationFrame[];
}
