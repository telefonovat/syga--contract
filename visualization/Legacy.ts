import type { Node } from './Node';
import type { Edge } from './Edge';
interface LegacyFrame {
  lineno: number[];
  console_logs?: string; // Mark optional fields as such
  components: LegacyComponent[];
}

interface LegacyComponent {
  type: 'Graph' | 'DiGraph';
  nodes: Node[];
  edges: Edge[];
  style: {
    node_colors: { [key: Node]: string };
    edge_colors: { [key: Node]: { [key: Node]: string } };

    node_labels: { [key: Node]: string };
    edge_labels: { [key: Node]: { [key: Node]: string } };

    node_shapes: { [key: Node]: string };
    edge_shapes: { [key: Node]: { [key: Node]: string } };
  };
}

interface LegacyVisualizationResult {
  timestamp: string;
  res: string;
  err?: string;
  alg_time: number;
  parse_time: number;
  elapsed: number;
  frames: LegacyFrame[];
}

function isLegacyFrame(object: any): object is LegacyFrame {
  return (
    'lineno' in object &&
    Array.isArray(object.lineno) &&
    typeof object.lineno[0] === 'number' &&
    (!('console_logs' in object) ||
      !object.console_logs ||
      typeof object.console_logs === 'string') &&
    'components' in object &&
    Array.isArray(object.components)
  );
}

function isLegacyVisualizationResult(
  object: any,
): object is LegacyVisualizationResult {
  return (
    'timestamp' in object &&
    typeof object.timestamp === 'string' &&
    'res' in object &&
    typeof object.res === 'string' &&
    (!('err' in object) ||
      !object.err ||
      typeof object.err === 'string') &&
    'alg_time' in object &&
    typeof object.alg_time === 'number' &&
    'parse_time' in object &&
    typeof object.parse_time === 'number' &&
    'elapsed' in object &&
    typeof object.elapsed === 'number' &&
    'frames' in object
  );
}

export type {
  LegacyFrame,
  LegacyComponent,
  LegacyVisualizationResult,
};
export { isLegacyFrame, isLegacyVisualizationResult };
