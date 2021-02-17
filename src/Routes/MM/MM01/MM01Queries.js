import { gql } from "apollo-boost";

export const GET_USER = gql`
 mutation getUser($name: String!, $password: String!) {
  getUser(name: $name, password: $password) {
   isLogin
   login_user
   #    cookie
  }
 }
`;

export const GET_COOKIE = gql`
 query getCookie($cookieToken: String!) {
  getCookie(cookieToken: $cookieToken) {
   _id
   name
   password
  }
 }
`;
