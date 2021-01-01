import * as axios from "axios";
import { AxiosPromise, AxiosResponse } from "axios"

import Stack from "../models/Stack"
import Company from "../models/Company"

export interface CloudStorageApi {
  getProjects: () => AxiosPromise<AxiosResponse>
  getCompanies: () => AxiosPromise<AxiosResponse<Company[]>>
  getStack: () => AxiosPromise<AxiosResponse<Stack[]>>
}

export default (client: axios.AxiosInstance) => ({
  getProjects: async () => client.get<
    AxiosResponse
  >("/projects.xml", {
    "headers": {
      "Content-Type": "application/xml",
      "Accept": "application/xml"
    }
  }),
  getCompanies: async () => client.get<
   AxiosResponse<Company[]>
  >("/companies.json", {
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }),
  getStack: async () => client.get<
    AxiosResponse<Stack[]>
  >("/stack.json", {
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  })
})