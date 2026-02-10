import { Edge } from './Edge';
import { Node } from './Node';

import {
  ComponentStyle,
  NodeColors,
  NodeLabels,
  NodeShapes,
  EdgeColors,
  EdgeLabels,
  EdgeShapes,
} from './ComponentStyle';

import { Component } from './Component';
import { Frame } from './Frame';

import { VisualizationRequest } from './VisualizationRequest';
import { VisualizationResult } from './VisualizationResult';

import {
  LegacyFrame,
  LegacyComponent,
  LegacyVisualizationResult,
  isLegacyFrame,
  isLegacyVisualizationResult,
} from './Legacy';

export { isLegacyFrame, isLegacyVisualizationResult };
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
};
