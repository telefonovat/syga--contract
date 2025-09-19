import { APIRequest } from './APIRequest.ts';
import { APIResponse } from './APIResponse.ts';

import { Algorithm } from './user/Algorithm.ts';
import {
  JSONWebToken,
  User,
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication.ts';

export * from './visualization/';

export { APIRequest, APIResponse };
export { Algorithm };
export { JSONWebToken, User, UserLoginInfo, UserRegistrationInfo };

// Below is new DDD interfaces and types

export {
  SygaAlgorithm,
  SygaAlgorithmSchema,
  SygaAlgorithmIdentifier,
  SygaAlgorithmIdentifierSchema,
  SygaAlgorithmCreateParams,
  SygaAlgorithmCreateParamsSchema,
  isSygaAlgorithmCreateParams,
  isSygaAlgorithmIdentifier,
  GraphEdge,
  GraphVertex,
  GraphComponent,
  GraphComponentStyle,
  GraphType,
  GraphVertexShape,
  GraphEdgeShape,
  VisualizationFrame,
  GraphEdgeColors,
  GraphEdgeLabels,
  GraphEdgeShapes,
  GraphVertexColors,
  GraphVertexLabels,
  GraphVertexShapes,
} from './domain';

export {
  ApiRequest,
  ApiRequestSchema,
  ExecuteAlgorithmRequestBody,
  ExecuteAlgorithmRequestBodySchema,
  AlgorithmExecutionMode,
  AuthenticateRequest,
  AuthenticateRequestSchema,
  isAuthenticateRequest,
  AddAlgorithmsRequestBody,
  AddAlgorithmsRequestBodySchema,
  isAddAlgorithmsRequestBody,
} from './request';

export {
  ExecuteAlgorithmResponse,
  isApiErrorResponse,
  ApiErrorResponse,
  isExecuteAlgorithmResult,
  isExecuteAlgorithmSuccessResponse,
  AuthenticateSuccessResponse,
  isAuthenticateSuccessResponse,
  GetUserAlgorithmsSuccessResponse,
  isGetUserAlgorithmsSuccessResponse,
  AddAlgorithmsSuccessBody,
  isAddAlgorithmsSuccessBody,
} from './response';
