import { BaseModel } from "./base";

export enum ROLE_CODE {
  ADMIN = "admin",
  USER = "user",
  MENTOR = "mentor",
  MENTOR_UNI = "mentor_uni",
  CREATOR_COURSE = "creator_course",
  ENTERPRISE = "enterprise"
}
export interface RoleModel extends BaseModel {
  code: ROLE_CODE
  name: string
}