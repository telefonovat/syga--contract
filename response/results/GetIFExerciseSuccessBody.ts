import { IFOptions } from '../../domain/';
export interface GetIFExerciseSuccessBody {
  options: IFOptions;
  markdowntext: string;
  algorithm: string;
}

export function isGetIFExerciseSuccessBody(
  input: any,
): input is GetIFExerciseSuccessBody {
  return (
    'options' in input &&
    'algorithm' in input &&
    'markdowntext' in input
  );
}
