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

type GraphVertexName = GraphVertex['name'];
type GraphVertexColor = string;
type GraphVertexLabel = string;

interface GraphVertexColors {
  [key: GraphVertexName]: GraphVertexColor;
}

interface GraphVertexLabels {
  [key: GraphVertexName]: GraphVertexLabel;
}

interface GraphVertexShapes {
  [key: GraphVertexName]: GraphVertexShape;
}

interface GraphEdgeColors {
  [key: GraphVertexName]: { [key: GraphVertexName]: GraphVertexName };
}

interface GraphEdgeLabels {
  [key: GraphVertexName]: { [key: GraphVertexName]: string };
}

interface GraphEdgeShapes {
  [key: GraphVertexName]: { [key: GraphVertexName]: GraphEdgeShape };
}
