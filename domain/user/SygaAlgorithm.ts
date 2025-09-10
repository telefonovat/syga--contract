export interface SygaAlgorithm {
  uuid: string;
  name: string;
  code: string;
}

export type SygaAlgorithmCreateParams = Pick<
  SygaAlgorithm,
  'name' | 'code'
>;

export type SygaAlgorithmIdentifier = Pick<
  SygaAlgorithm,
  'uuid' | 'name'
>;

export function isSygaAlgorithmIdentifier(
  input: any,
): input is SygaAlgorithmIdentifier {
  return 'uuid' in input && 'name' in input;
}

export function isSygaAlgorithmCreateParams(
  input: any,
): input is SygaAlgorithmCreateParams {
  return 'name' in input && 'code' in input;
}
