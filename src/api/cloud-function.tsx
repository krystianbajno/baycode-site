import Estimate from "../models/Estimate";
import * as axios from "axios";
import { AxiosPromise, AxiosResponse } from "axios"

interface SendMessageRouterResponse { message: string }
export interface CloudFunctionApi {
  sendEstimateToMessageRouter: (message: Estimate) => AxiosPromise<
    AxiosResponse<SendMessageRouterResponse>
  >
}

export default (client: axios.AxiosInstance) => ({
  sendEstimateToMessageRouter: async (message: Estimate) =>
    client.post("/sendMessageRouter", message, {
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
})