export interface LogInFormData {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'admin';
}

export interface RegisterFormData extends LogInFormData {}
