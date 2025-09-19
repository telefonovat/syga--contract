import { z } from 'zod';

export interface ApiResponse {
  success: boolean;
}

export const ApiResponseBodySchema = z.object({
  success: z.boolean(),
});

export function isApiResponse(input: any): input is ApiResponse {
  return (
    typeof input === 'object' &&
    input !== null &&
    'success' in input &&
    typeof input.success === 'boolean'
  );
}
