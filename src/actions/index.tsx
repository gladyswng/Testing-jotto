import axios from "axios";

export const getSecretWord = () => {
  // TODO - Write actual action in Redux / context
  // return response from server
  return axios.get('http://localhost:3030')
    .then(response => response.data)
}
  