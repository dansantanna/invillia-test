import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { Container, ErrorMessage } from '@Uikit';
import Jedi from '@/components/Jedi';
import PageLoading from '@/components/PageLoading';
import ContainerJedis from '@/components/ContainerJedis';
import { fetchJedis } from '@/redux/modules/jedis';

const App = () => {
  const [showError, setShowError] = React.useState(true);
  const { results, next, error } = useSelector(state => state.jedis);
  const dispatch = useDispatch();
  const containerRef = React.useRef();

  return (
    <Container ref={containerRef}>
      {error ? (
        <ErrorMessage
          show={showError}
          onClose={() => setShowError(false)}
          message="Erro ao listar Jedis"
        />
      ) : (
        <InfiniteScroll
          hasMore={next}
          pageStart={0}
          loadMore={page => dispatch(fetchJedis(page))}
          loader={<PageLoading key="loadaing" />}
          useWindow={false}>
          <ContainerJedis>
            {results.map((jedi, idx) => (
              <Jedi key={idx} {...jedi} />
            ))}
          </ContainerJedis>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default App;
