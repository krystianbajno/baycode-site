import Contact from "../models/Contact"

import { ContentfulResponse } from "../services/contentful"
import {ContentfulClientInterface} from "react-contentful";

const CONTENT_TYPE = "contact";

export interface ContactApi {
  getContact: ()
    => ContentfulResponse<Contact[]>
}

export default (client: ContentfulClientInterface) => ({
  getContact: async (mail) => {
    return client.getEntries({
      content_type: CONTENT_TYPE,
      mail
    })
  },
})