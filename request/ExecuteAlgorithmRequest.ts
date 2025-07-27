import { SygaAPIRequest } from './SygaApiRequest';

/** Denotes whether we know the identity of the client
 * By default assume anonymous
 */
type AlgorithmExecutionMode = 'anonymous' | 'named';

export interface ExecuteAlgorithmRequest extends SygaAPIRequest {
  mode?: AlgorithmExecutionMode;
  code: string;
}
