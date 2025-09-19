import { z } from 'zod';
import {
  isSygaAlgorithmCreateParams,
  SygaAlgorithmCreateParamsSchema,
} from '../domain/user';
import { ApiRequestBodySchema } from './ApiRequestBody';

export const AddAlgorithmsRequestBodySchema =
  ApiRequestBodySchema.extend({
    algorithms: z.array(SygaAlgorithmCreateParamsSchema),
  });
export type AddAlgorithmsRequestBody = z.infer<
  typeof AddAlgorithmsRequestBodySchema
>;

export function isAddAlgorithmsRequestBody(
  input: any,
): input is AddAlgorithmsRequestBody {
  return (
    'algorithms' in input &&
    Array.isArray(input.algorithms) &&
    (input.algorithms.length === 0 ||
      isSygaAlgorithmCreateParams(input.algorithms[0]))
  );
}
