import { BaseModel } from "./base";
import { CredentialModel } from "./credential";

export interface ProfileModel extends BaseModel {
  userId: number
  phone: string

  credential?: CredentialModel
}