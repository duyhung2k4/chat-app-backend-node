import { TypeModelType } from "../constants/modelType"

export enum OPTION_QUERY {
  INSERT = "insert",
	UPDATE = "update",
	DELETE = "delete",
}
export interface BasicQueryPayload {
  data: Record<string, any> | Record<string, any>[]
  option: OPTION_QUERY
  modelType: TypeModelType
}

export const DEFAULT_QUERY: Omit<BasicQueryPayload, "data" | "modelType"> = {
  option: OPTION_QUERY.INSERT,
}