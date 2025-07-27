export interface SygaAPIResponse {
  success: boolean;
}

export function isSygaAPIResponse(
  input: any,
): input is SygaAPIResponse {
  return (
    typeof input === 'object' &&
    input !== null &&
    'success' in input &&
    typeof input.success === 'boolean'
  );
}
