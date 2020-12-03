import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Jumborton from "./jumborton";
import TrainingList from '../../components/TrainingList';
import { authCookieHandler } from '../../tools';
import { authSuccess } from '../../redux-config';

const { getAuthCookie } = authCookieHandler;

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state);

  console.log(isAuthenticated);

  const dispatch = useDispatch();

  const authUserIfAuthCookieExist = () => {
    const authCookie = getAuthCookie();
    if (authCookie) { dispatch(authSuccess(authCookie.currentUserId)); }
  };

  useEffect(
    () => { authUserIfAuthCookieExist(); },
    [],
  );
  
  return (
    <main>
      <Jumborton />
      <TrainingList />
    </main>
    )
  }
  
  export default Home