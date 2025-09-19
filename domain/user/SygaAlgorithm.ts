import { z } from 'zod';

export const SygaAlgorithmSchema = z.object({
  author: z.string(),
  uuid: z.string(),

  name: z.string(),
  slug: z.string(),
  code: z.string(),

  isPublic: z.boolean(),
  createdAtIso: z.string(),
  lastUpdatedAtIso: z.string(),
});

export const SygaAlgorithmPublicDataSchema = SygaAlgorithmSchema.pick(
  {
    author: true,
    uuid: true,

    name: true,
    slug: true,
    code: true,

    createdAtIso: true,
  },
);

export const SygaAlgorithmCreateParamsSchema =
  SygaAlgorithmSchema.pick({
    name: true,
    code: true,
  });

export const SygaAlgorithmIdentifierSchema = SygaAlgorithmSchema.pick(
  {
    uuid: true,
    name: true,
  },
);

export type SygaAlgorithm = z.infer<typeof SygaAlgorithmSchema>;
export type SygaAlgorithmPublicData = z.infer<
  typeof SygaAlgorithmPublicDataSchema
>;

export type SygaAlgorithmCreateParams = z.infer<
  typeof SygaAlgorithmCreateParamsSchema
>;

export type SygaAlgorithmIdentifier = z.infer<
  typeof SygaAlgorithmIdentifierSchema
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
