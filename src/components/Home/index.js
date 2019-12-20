import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import { Container } from '@Uikit';
import Jedi from '@/components/Jedi';
import { fetchJedis } from '@/redux/modules/jedis';



const ContainerJedis = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const App = () => {
  const jedis = useSelector(state => state.jedis.results);
  const dispatch = useDispatch();
  const containerRef = React.useRef()

  return (
    <Container ref={containerRef} >
      <InfiniteScroll
        hasMore
        pageStart={0}
        loadMore={page => dispatch(fetchJedis(page))}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
      >
        <ContainerJedis>
          {jedis.map((jedi, idx) => (
            <Jedi key={idx} {...jedi} />
          ))}
        </ContainerJedis>
      </InfiniteScroll>
    </Container>
  );
};

export default App;
