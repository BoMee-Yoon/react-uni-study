import axios from 'axios';

const BASE_URI = 'https://jsonplaceholder.typicode.com';

let users = [];

export const getUsers = async () => {
  const { data } = await axios.get(`${ BASE_URI }/users`);
  users = data
  return data;
}

export const getUserById = targetId => {
  return users.filter(({ id }) => id === targetId)
}