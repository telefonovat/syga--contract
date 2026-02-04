import { Edge } from './Edge.ts';
import { Node } from './Node.ts';

import {
  ComponentStyle,
  NodeColors,
  NodeLabels,
  NodeShapes,
  EdgeColors,
  EdgeLabels,
  EdgeShapes,
} from './ComponentStyle.ts';

import { Component } from './Component.ts';
import { Frame } from './Frame.ts';

import { VisualizationRequest } from './VisualizationRequest.ts';
import { VisualizationResult } from './VisualizationResult.ts';

import {
  LegacyFrame,
  LegacyComponent,
  LegacyVisualizationResult,
  isLegacyFrame,
  isLegacyVisualizationResult,
} from './Legacy.ts';

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
