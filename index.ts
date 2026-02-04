import type { APIRequest } from './APIRequest.ts';
import type { APIResponse } from './APIResponse.ts';

import type { Algorithm } from './user/Algorithm.ts';
import type {
  JSONWebToken,
  UserLoginInfo,
  UserRegistrationInfo,
} from './user/Authentication.ts';

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
  isLegacyFrame,
  isLegacyVisualizationResult,
} from './visualization/';

export type { APIRequest, APIResponse };
export type { Algorithm };
export type { JSONWebToken, UserLoginInfo, UserRegistrationInfo };

// Below is new DDD interfaces and types

export type {
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

export type {
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
