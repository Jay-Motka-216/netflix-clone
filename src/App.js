import React from 'react';
import Jumbotron from './components/jumbotron/index';
import jumboData from './fixtures/jumbo.json';

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map( (item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>{item.title}</p>
          <p>{item.subTitle}</p>
        </Jumbotron>
      ) )}
    </Jumbotron.Container>
  );
}

export default App;
