import { z } from 'zod';
import { ApiRequestBodySchema } from './ApiRequestBody';

/** Denotes whether we know the identity of the client
 * By default assume anonymous
 */
const AlgorithmExecutionModeSchema = z.enum(['anonymous', 'named']);
export type AlgorithmExecutionMode = z.infer<
  typeof AlgorithmExecutionModeSchema
>;

export const ExecuteAlgorithmRequestBodySchema =
  ApiRequestBodySchema.extend({
    mode: AlgorithmExecutionModeSchema.optional(),
    code: z.string(),
  });
export type ExecuteAlgorithmRequestBody = z.infer<
  typeof ExecuteAlgorithmRequestBodySchema
>;
