import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Jumborton from "./jumborton";
import TrainingList from '../../components/TrainingList';

const Home = () => (
    <main>
      <Jumborton />
      <TrainingList />
    </main>
  )
  
  export default Home