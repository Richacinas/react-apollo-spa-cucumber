import gql from 'graphql-tag';

export const searchQuery = gql`
  query search($searchString: String!) {
    search(q: $searchString, skip: 0, limit: 5) {
      companies {
        count
        res {
          subtype
          cnae
          id
          name
          region
          relatedName
          sales
        }
      }
    }
  }
`;
