import { SygaApiRequest } from './SygaApiRequest';

export interface ExecuteAlgorithmRequest extends SygaApiRequest {
  code: string;
}
