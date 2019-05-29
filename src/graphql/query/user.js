import gql from 'graphql-tag';

export const userQuery = gql`
  {
    User @client {
      nombre @client
      apellido @client
      edad @client
      id @client
    }
  }
`;
