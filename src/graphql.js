import gql from "graphql-tag";

export const ADD_POST_MUTATION = gql `
  mutation AddPostMutation($title: String!, $content: String!) {
    addPost(title: $title, content: $content) {
      id
      slug
      title
      content
    }
  }
`;
export const ALL_POSTS_QUERY = gql `
  query AllPostsQuery {
    allPosts {
      id
      title
      slug
    }
  }
`;