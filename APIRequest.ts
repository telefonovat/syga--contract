import {
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication';
import { VisualizationRequest } from './visualization/VisualizationRequest';

export interface APIRequest {
  token?: string;
  content?:
    | VisualizationRequest
    | UserLoginInfo
    | UserRegistrationInfo;
}
