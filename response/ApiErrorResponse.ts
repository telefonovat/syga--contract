import { ApiResponse, isApiResponse } from './ApiResponse.ts';

export interface ApiErrorResponse extends ApiResponse {
  errorMessages: string[];
}

export function isApiErrorResponse(
  input: any,
): input is ApiErrorResponse {
  return isApiResponse(input) && 'errorMessages' in input;
}
