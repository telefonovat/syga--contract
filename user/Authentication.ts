export interface LogInFormData {
  username: string;
  password: string;
}

export interface RegisterFormData extends LogInFormData {
  email: string;
}
