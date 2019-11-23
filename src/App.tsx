import React from 'react';
import './App.scss';

import Counter from './Counter';

const App: React.FC = () => (
  <div className="App">
    <Counter>
      {(count, setCount) => (
        <div>
          {count}
          <button type="button" onClick={() => setCount(count + 1)}>
            Click
          </button>
        </div>
      )}
    </Counter>
  </div>
);

export default App;
