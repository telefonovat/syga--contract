import type { APIRequest } from './APIRequest';
import type { APIResponse } from './APIResponse';

import type { Algorithm } from './user/Algorithm';
import type {
  JSONWebToken,
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication';

export {
  isLegacyFrame,
  isLegacyVisualizationResult,
} from './visualization/';
export type {
  Node,
  Edge,
  ComponentStyle,
  NodeColors,
  NodeLabels,
  NodeShapes,
  EdgeColors,
  EdgeLabels,
  EdgeShapes,
  Component,
  Frame,
  VisualizationRequest,
  VisualizationResult,
  LegacyFrame,
  LegacyComponent,
  LegacyVisualizationResult,
} from './visualization/';

export type { APIRequest, APIResponse };
export type { Algorithm };
export type { JSONWebToken, UserLoginInfo, UserRegistrationInfo };

// Below is new DDD interfaces and types

export {
  GraphType,
  UserSchema,
  SygaAlgorithmSchema,
  SygaAlgorithmPublicDataSchema,
  SygaAlgorithmIdentifierSchema,
  SygaAlgorithmCreateParamsSchema,
  SygaAlgorithmUpdateParamsSchema,
  isSygaAlgorithmCreateParams,
  isSygaAlgorithmIdentifier,
} from './domain';
export type {
  User,
  SygaAlgorithm,
  SygaAlgorithmPublicData,
  SygaAlgorithmIdentifier,
  SygaAlgorithmCreateParams,
  SygaAlgorithmUpdateParams,
  GraphEdge,
  GraphVertex,
  GraphComponent,
  GraphComponentStyle,
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
  ApiRequestBodySchema,
  ExecuteAlgorithmRequestBodySchema,
  AuthenticateRequestBodySchema,
  isAuthenticateRequest,
  AddAlgorithmsRequestBodySchema,
  isAddAlgorithmsRequestBody,
  UpdateAlgorithmRequestBodySchema,
} from './request';
export type {
  ApiRequestBody,
  ExecuteAlgorithmRequestBody,
  AlgorithmExecutionMode,
  AuthenticateRequestBody,
  AddAlgorithmsRequestBody,
  UpdateAlgorithmRequestBody,
} from './request';

export {
  isApiErrorResponse,
  isExecuteAlgorithmResult,
  isExecuteAlgorithmSuccessResponse,
  isSigninSuccessBody,
  AuthenticationSuccessBodySchema,
  isGetUserAlgorithmsSuccessResponse,
  isAddAlgorithmsSuccessBody,
  GetAlgorithmDetailSuccessBodySchema,
  isGetIFExerciseSuccessBody,
} from './response';
export type {
  ExecuteAlgorithmResponse,
  ApiErrorResponse,
  SigninSucessBody,
  AuthenticationSuccessBody,
  GetUserAlgorithmsSuccessResponse,
  AddAlgorithmsSuccessBody,
  GetAlgorithmDetailSuccessBody,
  GetIFExerciseSuccessBody,
} from './response';
