import { TypeModelType } from "../constants/modelType"

export interface AdvanceFilterPayload {
  conditions?: Record<string, any>
  modelType: TypeModelType
  page?: number
  pageSize?: number
  stringPreLoad?: string[]
  isPreload?: boolean
}

export const FILTER_DEFAULT: Omit<AdvanceFilterPayload, "modelType"> = {
  conditions: {},
  page: 1,
  pageSize: -1,
  stringPreLoad: [],
  isPreload: false
}
