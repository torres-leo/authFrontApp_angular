import { IUser } from './user.interface';

// type UserLogged = Pick<IUser, 'email' | 'name'>;
export interface ILoginResponse {
  user: IUser;
  token: string;
}
