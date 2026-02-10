import { z } from 'zod';
import { SygaAlgorithmPublicDataSchema } from '../../domain/';
import { getApiSuccessBodySchema } from '../ApiSuccessResponse';

export const GetAlgorithmDetailSuccessBodySchema =
  getApiSuccessBodySchema(SygaAlgorithmPublicDataSchema);

export type GetAlgorithmDetailSuccessBody = z.infer<
  typeof GetAlgorithmDetailSuccessBodySchema
>;
