import { Edge } from './Edge';
import { Node } from './Node';
import { ComponentStyle } from './ComponentStyle';

export interface Component {
  type: 'Graph' | 'DiGraph';
  nodes: Node[];
  edges: Edge[];
  style: ComponentStyle;
}
