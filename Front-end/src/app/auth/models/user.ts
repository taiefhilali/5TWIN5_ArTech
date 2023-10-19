import { Role } from './role';

export class User {
  id?: number;
  username: string;
  email?:string;
  password?: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: Role;
  token?: string;
  address?:String;
  facebook?:String;
  github?:String;
  instagram?:String;
  twitter?:String;
  phone?:String;
  description?:String;

}
