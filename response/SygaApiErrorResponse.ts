import { SygaAPIResponse } from './SygaApiResponse';

export interface SygaAPIErrorResponse extends SygaAPIResponse {
  errorMessages: string[];
}
