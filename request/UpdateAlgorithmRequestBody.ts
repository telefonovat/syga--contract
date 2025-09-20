import { z } from 'zod';
import { ApiRequestBodySchema } from './ApiRequestBody';
import { SygaAlgorithmUpdateParamsSchema } from '../domain/user';

export const UpdateAlgorithmRequestBodySchema =
  ApiRequestBodySchema.extend(SygaAlgorithmUpdateParamsSchema.shape);
export type UpdateAlgorithmRequestBody = z.infer<
  typeof UpdateAlgorithmRequestBodySchema
>;
