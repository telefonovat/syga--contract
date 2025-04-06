import { SygaApiRequest } from './SygaApiRequest';

type AlgorithmExecutionMode = 'anonymous' | 'named';

export interface ExecuteAlgorithmRequest extends SygaApiRequest {
  mode: AlgorithmExecutionMode;
  code: string;
}
