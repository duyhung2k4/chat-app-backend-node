import type { AxiosRequestConfig, AxiosError } from 'axios'
import axios from "axios";

export interface PayloadApiCall {
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
  headers?: AxiosRequestConfig['headers']
}

interface DataResponse {
  data: Record<string, any> | Record<string, any>[] | null
  error: Error | null,
  success: boolean
}
const apiCall = async (payload: PayloadApiCall): Promise<DataResponse> => {
  const BASE_URL: string = "http://127.0.0.1:18888";
  try {
    const result = await axios({
      ...payload,
      url: `${BASE_URL}/${payload.url}`
    });

    return {
      data: result.data.data,
      error: null,
      success: true,
    }
  } catch (axiosError) {
    const err = axiosError as AxiosError
    return {
      data: null,
      error: err,
      success: false,
    }
  }
}

export default apiCall;