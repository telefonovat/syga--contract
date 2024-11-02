import { Node } from "./Node";
export interface ComponentStyle {
  //Does it need to be nullable?
  nodeColors: NodeColors,
  edgeColors: EdgeColors,
}

export interface NodeColors {
  [key: Node]: string,
}

export interface EdgeColors {
  [key: Node]: { [key: Node]: string },
}
