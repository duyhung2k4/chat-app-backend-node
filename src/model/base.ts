export interface BaseModel {
  id: number
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export type OmitBaseModel = "id" | "createdAt" | "updatedAt" | "deletedAt";