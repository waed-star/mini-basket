import React, { useEffect, useState } from 'react'
import Basket from './components/basketItem/Basket'
import UserInput from './components/userInput/UserInput';

function App() {
  const [randomProductNum, setRandomProductNum] = useState(3)

  return (
    <div>
      <UserInput
        randomProductNum={randomProductNum}
        setRandomProductNum={setRandomProductNum}
      />
      <Basket
        randomProductNum={randomProductNum}
      />
    </div>
  );
}

export default App;
