import { GraphComponentStyle } from './GraphComponentStyle';
import { GraphEdge } from './GraphEdge';
import { GraphVertex } from './GraphVertex';

export enum GraphType {
  UNDIRECTED,
  DIRECTED,
}
export interface GraphComponent {
  type: GraphType;
  vertices: GraphVertex[];
  edges: GraphEdge[];
  style: GraphComponentStyle;
}
