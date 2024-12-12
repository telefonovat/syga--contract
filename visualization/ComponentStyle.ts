import { Node } from './Node';
export interface ComponentStyle {
  //Does it need to be nullable?
  nodeColors: NodeColors;
  edgeColors: EdgeColors;
  nodeShapes: NodeShapes;
  edgeShapes: EdgeShapes;
  nodeLabels: NodeLabels;
  edgeLabels: EdgeLabels;
}

export interface NodeColors {
  [key: Node]: string;
}

export interface EdgeColors {
  [key: Node]: { [key: Node]: string };
}

export interface NodeShapes {
  [key: Node]: string;
}

export interface EdgeShapes {
  [key: Node]: { [key: Node]: string };
}

export interface NodeLabels {
  [key: Node]: string;
}

export interface EdgeLabels {
  [key: Node]: { [key: Node]: string };
}
