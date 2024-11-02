import type { Node } from "./Node"
import type { Edge } from "./Edge"
interface LegacyFrame {
  lineno: number[],
  console_logs?: string,  // Mark optional fields as such
  components: LegacyComponent[],
}

interface LegacyComponent {
  nodes: Node[],
  edges: Edge[],
  style: {
    node_colors: { [key: string]: string },
    edge_colors: { [key: string]: { [key: string]: string } },
  },
}

interface LegacyVisualizationResult {
  timestamp: string,
  res: string,
  err?: string,
  alg_time: number,
  parse_time: number,
  elapsed: number,
  frames: LegacyFrame[],
}

export { LegacyFrame, LegacyComponent, LegacyVisualizationResult };
