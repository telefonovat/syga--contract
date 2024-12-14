import { Algorithm } from './Algorithm';

/**
 * @deprecated
 */
export interface LogInFormData {
  username: string;
  password: string;
}

/**
 * @deprecated
 */
export interface RegisterFormData extends LogInFormData {
  email: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'admin';
  algorithms: Algorithm[];
}

export type UserLoginInfo = Pick<User, 'username' | 'password'>;

export type UserRegistrationInfo = Omit<User, 'role' | 'algorithms'>;
