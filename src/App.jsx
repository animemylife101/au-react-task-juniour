import React from 'react';
import FormPage from './components/FormPage/FormPage';
import HeadersContainer from './components/Header/HeadersContainer';

function App() {
  return (
    <>
      <header>
        <HeadersContainer />
      </header>

      <main>
        <FormPage />
      </main>
    </>
  );
}

export default App;
