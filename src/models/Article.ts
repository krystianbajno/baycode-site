import { Author } from "./Author"

interface Article {
  slug: number,
  title: string,
  thumbnail: string,
  createdAt: string,
  description?: string;
  shortDescription: string;
  author?: Author;
  header?: string;
  contents?: any;
  redirect?: string;
}

export default Article;