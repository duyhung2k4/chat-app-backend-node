import { BaseModel } from "./base";
import { RoleModel } from "./role";

export interface CredentialModel extends BaseModel {
  roleId: number
  email: string
  username: string

  role?: RoleModel
}