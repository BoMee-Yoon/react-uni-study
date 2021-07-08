import React, { useState, useEffect, useMemo } from 'react';
import { getUserById, getUsers } from './apiHelper';

export default function ApiTest() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loding, setLoding] = useState(false);

  const fetchUsers = async() => {
    try {
      setError('');
      setLoding(true);
      const response = await getUsers();
      setUsers(response);

    } catch(error) {
      const ERROR_CODE = 1;
      setError(ERROR_CODE);
      console.error(error);
    }
    setLoding(false);
  }

  const fetchUserById = async({ target }) => {
    const id = target.dataset?.userId;
    if (!id) return null;

    try {
      setError('');
      setLoding(true);
      setUsers(await getUserById(Number(id)));
    } catch(error) {
      const ERROR_CODE = 2;
      setError(ERROR_CODE);
      console.error(error, ERROR_CODE)
    }
  }



  useEffect(() => fetchUsers(), []);

  if (loding) return <div>로딩중</div>;
  if (error) return error === 1 ? 'users 에러 발생' : 'user 에러 발생';
  if (!users) return null;

  return (
    <>
      <ul>
        {
          users.map(({ id, username, name }) => (
            <li key={ id }>
              <span>{ username } : ({ name })</span>
              <button onClick={ fetchUserById } data-user-id={ id } >view more</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}
