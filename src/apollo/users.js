import { gql } from "@apollo/client"

export const All_USERS = gql`
   query allUsers {
    allUsers{
        id
        firstname
        lastname
        img
        about
  }
}
`;

export const DELETE_USER = gql`
    mutation removeUser($id: ID!) {
      removeUser(id: $id) { id }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!,$firstname: String!,$lastname: String!,$img: String!,$about: String!) {
      updateUser(id: $id,firstname: $firstname,lastname: $lastname,img: $img,about: $about) { 
        id,
        firstname,
        lastname,
        img,
        about  
      } 
}
`

export const ADD_USER = gql`
    mutation createUser($firstname: String!,$lastname: String!,$img: String!,$about: String!) {
        createUser(firstname: $firstname,lastname: $lastname,about: $about,img: $img) {
            id,
            firstname,
            lastname,
            img,
            about
        }
    }
`



