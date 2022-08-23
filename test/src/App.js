import Container from './components/Container'
import Header from './components/Header'
import Trending from './Pages/'

import SearchContextProvider from './contexts/Search';
function App() {
  return (
    <>
      <SearchContextProvider>
        <Header />
        <Container>
          <Trending />
        </Container>
      </SearchContextProvider>
    </>
  );
}

export default App;
