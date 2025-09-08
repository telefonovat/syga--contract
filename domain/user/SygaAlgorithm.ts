export interface SygaAlgorithm {
  uuid: string;
  name: string;
  code: string;
}

export type SygaAlgorithmIdentifier = Pick<
  SygaAlgorithm,
  'uuid' | 'name'
>;

export function isSygaAlgorithmIdentifier(
  input: any,
): input is SygaAlgorithmIdentifier {
  return 'uuid' in input && 'name' in input;
}
