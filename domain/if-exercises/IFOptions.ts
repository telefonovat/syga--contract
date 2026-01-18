export type EdgeOptionInput = { [key: string]: string } | 'number';
export type VertexOptionInput = { [key: string]: string } | 'number';
export type EdgeOption = string | number;
export type VertexOption = string | number;
export interface IFOptions {
  edgeOptionInput: EdgeOptionInput;
  vertexOptionInput: VertexOptionInput;
}
