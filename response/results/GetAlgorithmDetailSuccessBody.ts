import { z } from 'zod';
import { SygaAlgorithmPublicDataSchema } from '../../domain/';
import { getApiSuccessBodySchema } from '../ApiSuccessResponse.ts';

export const GetAlgorithmDetailSuccessBodySchema =
  getApiSuccessBodySchema(SygaAlgorithmPublicDataSchema);

export type GetAlgorithmDetailSuccessBody = z.infer<
  typeof GetAlgorithmDetailSuccessBodySchema
>;
