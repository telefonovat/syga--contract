import { ApiRequest } from './ApiRequest';

/** Denotes whether we know the identity of the client
 * By default assume anonymous
 */
type AlgorithmExecutionMode = 'anonymous' | 'named';

export interface ExecuteAlgorithmRequest extends ApiRequest {
  mode?: AlgorithmExecutionMode;
  code: string;
}
