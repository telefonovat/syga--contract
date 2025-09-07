import { ApiResponse } from './ApiResponse.ts';

export interface ApiSuccessResponse<T = any> extends ApiResponse {
  payload: T;
}
