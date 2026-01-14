import { IFOptions } from '../../domain/';
export interface GetIFExerciseSuccessBody {
  options: IFOptions;
  algorithm: string;
}

export function isGetIFExerciseSuccessBody(
  input: any,
): input is GetIFExerciseSuccessBody {
  return 'options' in input && 'algorithm' in input;
}
