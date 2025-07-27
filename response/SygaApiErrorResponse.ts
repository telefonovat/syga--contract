import {
  isSygaAPIResponse,
  SygaAPIResponse,
} from './SygaApiResponse';

export interface SygaAPIErrorResponse extends SygaAPIResponse {
  errorMessages: string[];
}

export function isSygaAPIErrorResponse(
  input: any,
): input is SygaAPIErrorResponse {
  return isSygaAPIResponse(input) && 'errorMessages' in input;
}
