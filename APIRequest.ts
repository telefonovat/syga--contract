import { Algorithm } from './user/Algorithm';
import {
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication';
import { VisualizationRequest } from './visualization/VisualizationRequest';

type AlgorithmUpdate = Partial<Algorithm>;
type PotentialUsername = string;

export interface APIRequest {
  content?:
    | VisualizationRequest
    | UserLoginInfo
    | UserRegistrationInfo
    | Omit<Algorithm, 'uuid' | 'creatorUsername'>
    | AlgorithmUpdate
    | PotentialUsername;
}
