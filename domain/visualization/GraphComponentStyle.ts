import { GraphEdgeShape } from './GraphEdgeShape';
import { GraphVertex } from './GraphVertex';
import { GraphVertexShape } from './GraphVertexShape';

export interface GraphComponentStyle {
  vertexColors: GraphVertexColors;
  vertexLabels: GraphVertexLabels;
  vertexShapes: GraphVertexShapes;

  edgeColors: GraphEdgeColors;
  edgeLabels: GraphEdgeLabels;
  edgeShapes: GraphEdgeShapes;
}

type GraphVertexName = GraphVertex['id'];
type GraphVertexColor = string;
type GraphVertexLabel = string;
type GraphEdgeColor = string;
type GraphEdgeLabel = string;

export interface GraphVertexColors {
  [key: GraphVertexName]: GraphVertexColor;
}

export interface GraphVertexLabels {
  [key: GraphVertexName]: GraphVertexLabel;
}

export interface GraphVertexShapes {
  [key: GraphVertexName]: GraphVertexShape;
}

export interface GraphEdgeColors {
  [key: GraphVertexName]: { [key: GraphVertexName]: GraphEdgeColor };
}

export interface GraphEdgeLabels {
  [key: GraphVertexName]: { [key: GraphVertexName]: GraphEdgeLabel };
}

export interface GraphEdgeShapes {
  [key: GraphVertexName]: { [key: GraphVertexName]: GraphEdgeShape };
}
