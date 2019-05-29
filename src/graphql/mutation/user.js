import gql from 'graphql-tag';

export const saveUser = gql`
  mutation saveUser($nombre: String!, $apellido: String!, $edad: Int!, $id: Int!) {
    saveUser(nombre: $nombre, apellido: $apellido, edad: $edad, id: $id) @client
  }
`;
