import { IUser } from './user.interface';

export interface ICheckToken {
  user: IUser;
  token: string;
}
