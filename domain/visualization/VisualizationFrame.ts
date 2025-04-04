import { GraphComponent } from './GraphComponent';

export interface VisualizationFrame {
  lineNo: number[];
  consoleLogs: string[];
  graphComponents: GraphComponent[];
}
