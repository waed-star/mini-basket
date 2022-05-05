import React, { useEffect, useState } from 'react'
import Basket from './components/basketItem/Basket'
import UserInput from './components/userInput/UserInput';

function App() {
  const [randomProductNum, setRandomProductNum] = useState(3)
  const [showItems, setShowItems] = useState(true)

  return (
    <div>
      <UserInput
        randomProductNum={randomProductNum}
        setRandomProductNum={setRandomProductNum}
        setShowItems={setShowItems}
      />
      <Basket
        randomProductNum={randomProductNum}
        showItems={showItems}
        setShowItems={setShowItems}
      />
    </div>
  );
}

export default App;
