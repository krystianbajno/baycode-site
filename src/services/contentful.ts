import { ContentfulClient } from 'react-contentful';

export interface ContentfulResponse<T = any> {
  items: T;
}
export const createContentfulClient = (accessToken, space) => ContentfulClient({
  accessToken,
  space,
})
