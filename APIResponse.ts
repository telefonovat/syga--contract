import { Algorithm } from './user/Algorithm';
import { JSONWebToken } from './user/Authentication';
import { VisualizationResult } from './visualization/VisualizationResult';

export interface APIResponse {
  success: boolean;
  message: string;
  content?:
    | VisualizationResult
    | JSONWebToken
    | Algorithm[]
    | Algorithm;
  errors?: any;
}
