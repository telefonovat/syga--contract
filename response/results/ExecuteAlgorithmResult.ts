import { VisualizationFrame } from '../../domain/visualization/VisualizationFrame';
export interface ExecuteAlgorithmResult {
  timestamp: string;
  response: string;
  errorMessage?: string;
  algorithmTime: number;
  parseTime: number;
  elapsed: number;
  frames: VisualizationFrame[];
}
