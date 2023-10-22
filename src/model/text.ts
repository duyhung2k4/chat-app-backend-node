import { BaseModel } from "./base";

export interface ModelText extends BaseModel {
  messageId: number
  content: string
}