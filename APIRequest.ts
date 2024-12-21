import { Algorithm } from './user/Algorithm';
import {
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication';
import { VisualizationRequest } from './visualization/VisualizationRequest';

export interface APIRequest {
  content?:
    | VisualizationRequest
    | UserLoginInfo
    | UserRegistrationInfo
    | Omit<Algorithm, 'uuid'>;
}
