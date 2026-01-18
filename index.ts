import { APIRequest } from './APIRequest.ts';
import { APIResponse } from './APIResponse.ts';

import { Algorithm } from './user/Algorithm.ts';
import {
  JSONWebToken,
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication.ts';

export * from './visualization/';

export { APIRequest, APIResponse };
export { Algorithm };
export { JSONWebToken, UserLoginInfo, UserRegistrationInfo };

// Below is new DDD interfaces and types

export {
  User,
  UserSchema,
  SygaAlgorithm,
  SygaAlgorithmSchema,
  SygaAlgorithmPublicData,
  SygaAlgorithmPublicDataSchema,
  SygaAlgorithmIdentifier,
  SygaAlgorithmIdentifierSchema,
  SygaAlgorithmCreateParams,
  SygaAlgorithmCreateParamsSchema,
  SygaAlgorithmUpdateParams,
  SygaAlgorithmUpdateParamsSchema,
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
  IFOptions,
  EdgeOption,
  EdgeOptionInput,
  VertexOption,
  VertexOptionInput,
} from './domain';

export {
  ApiRequestBody,
  ApiRequestBodySchema,
  ExecuteAlgorithmRequestBody,
  ExecuteAlgorithmRequestBodySchema,
  AlgorithmExecutionMode,
  AuthenticateRequestBody,
  AuthenticateRequestBodySchema,
  isAuthenticateRequest,
  AddAlgorithmsRequestBody,
  AddAlgorithmsRequestBodySchema,
  isAddAlgorithmsRequestBody,
  UpdateAlgorithmRequestBody,
  UpdateAlgorithmRequestBodySchema,
} from './request';

export {
  ExecuteAlgorithmResponse,
  isApiErrorResponse,
  ApiErrorResponse,
  isExecuteAlgorithmResult,
  isExecuteAlgorithmSuccessResponse,
  SigninSucessBody,
  isSigninSuccessBody,
  AuthenticationSuccessBody,
  AuthenticationSuccessBodySchema,
  GetUserAlgorithmsSuccessResponse,
  isGetUserAlgorithmsSuccessResponse,
  AddAlgorithmsSuccessBody,
  isAddAlgorithmsSuccessBody,
  GetAlgorithmDetailSuccessBody,
  GetAlgorithmDetailSuccessBodySchema,
  GetIFExerciseSuccessBody,
  isGetIFExerciseSuccessBody,
} from './response';
