import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '@Uikit';
import Jedi from '@/components/Jedi';
import { fetchJedis } from '@/redux/modules/jedis';

const App = () => {
  const jedis = useSelector(state => state.jedis.list);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchJedis());
  }, [dispatch]);

  return (
    <Container>
      {jedis.map((jedi, idx) => (
        <Jedi key={idx} {...jedi} />
      ))}
    </Container>
  );
};

export default App;
