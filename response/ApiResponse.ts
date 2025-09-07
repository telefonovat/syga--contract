export interface ApiResponse {
  success: boolean;
}

export function isApiResponse(input: any): input is ApiResponse {
  return (
    typeof input === 'object' &&
    input !== null &&
    'success' in input &&
    typeof input.success === 'boolean'
  );
}
