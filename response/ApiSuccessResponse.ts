import { z } from 'zod';
import { ApiResponse, ApiResponseBodySchema } from './ApiResponse';

export interface ApiSuccessResponse<T = any> extends ApiResponse {
  payload: T;
}

export function getApiSuccessBodySchema<T extends z.ZodType>(
  payloadSchema: T,
) {
  return ApiResponseBodySchema.extend({
    payload: payloadSchema,
  });
}
