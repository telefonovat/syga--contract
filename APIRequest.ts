import { Algorithm } from './user/Algorithm';
import {
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication';
import { VisualizationRequest } from './visualization/VisualizationRequest';

type AlgorithmUpdate = Partial<Algorithm>;
export interface APIRequest {
  content?:
    | VisualizationRequest
    | UserLoginInfo
    | UserRegistrationInfo
    | Omit<Algorithm, 'uuid' | 'creatorUsername'>
    | AlgorithmUpdate;
}
