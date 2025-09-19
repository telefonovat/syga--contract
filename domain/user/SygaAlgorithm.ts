export interface SygaAlgorithm {
  author: string;
  uuid: string;

  name: string;
  slug: string;
  code: string;

  createdAtIso: string;
  lastUpdatedAtIso: string;
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
