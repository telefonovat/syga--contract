import { Frame } from "./Frame"
export interface VisualizationResult {
  timestamp: string,
  response: string,
  errorMessage?: string,
  algorithmTime: number,
  parseTime: number,
  elapsed: number,
  frames: Frame[],
}
