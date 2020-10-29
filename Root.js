import * as React from "react";
import App from "./src/App"

import axios from "axios";
import { Provider } from "react-redux"

import { createAppStore } from "./src/store";
import { createContentfulClient } from "./src/services/contentful";

import createArticlesApi from "./src/api/articles";
import createContactApi from "./src/api/contact";
import createCloudFunctionApi from "./src/api/cloud-function";
import createStorageApi from "./src/api/cloud-storage";

const contentfulClient = createContentfulClient(
  process.env.CONTENTFUL_ACCESS_TOKEN,
  process.env.CONTENTFUL_SPACE
);

const cloudFunctionClient = axios.create({
  "baseURL": process.env.CLOUD_FUNCTION_ENDPOINT
})

const cloudStorageClient = axios.create({
  "baseURL": process.env.CLOUD_STORAGE
})

const articlesApi = createArticlesApi(contentfulClient)
const contactApi = createContactApi(contentfulClient)
const cloudFunctionApi = createCloudFunctionApi(cloudFunctionClient)
const cloudStorageApi = createStorageApi(cloudStorageClient)

const store = createAppStore({
  cloudStorageApi,
  cloudFunctionApi,
  articlesApi,
  contactApi
});

export default ({ element, actions }) => {
  return <Provider store={store}>
    {<App store={store}>{element}</App>}
  </Provider>
}