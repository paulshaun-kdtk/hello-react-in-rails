import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/slices/GreetingSlice.js';

const GreetingsComponent = () => {
  const dispatch = useDispatch();
  const { greetingsData, status, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Greetings</h1>
      <ul>
        {greetingsData.map((greeting) => (
          <li key={greeting.id}>{greeting.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default GreetingsComponent;
