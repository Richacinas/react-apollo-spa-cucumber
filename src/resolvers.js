import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type User {
    nombre: String!
    apellidos: String!
    edad: Int!
  }
`;

export const resolvers = {
  Mutation: {
    saveUser: (_root, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'User', id: variables.id });
      const fragment = gql`
        fragment userData on User {
          nombre
          apellido
          edad
        }
      `;
      const userData = cache.readFragment({ fragment, id });
      const data = { ...userData, ...variables };
      cache.writeData({ id, data });
      return { ...data };
    },
  },
};
