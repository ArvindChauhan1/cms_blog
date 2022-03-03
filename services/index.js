import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
                node {
                    title
                    slug
                    excerpt
                    featuredImage {
                        url
                    }
                    createdAt
                    author {
                        bio
                        name
                        id
                        photo {
                            url
                        }
                    }
                    categories {
                        name
                        slug
                    }
                }
            }
        }
      }
    `

    const result = await request(graphqlAPI, query)
    console.log(result)
    return result.postsConnection.edges;
} 