import { SygaApiResponse } from './SygaApiResponse';

export interface SygaApiErrorResponse extends SygaApiResponse {
  errorMessages: string[];
}
