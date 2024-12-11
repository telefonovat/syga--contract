import { VisualizationResult } from './visualization/VisualizationResult';

export interface APIResponse {
  success: boolean;
  message: string;
  content?: VisualizationResult | any;
  errors?: any;
}
