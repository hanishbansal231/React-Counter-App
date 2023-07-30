
import {useState} from 'react';
function App() {
  const [count,setCount] = useState(0);
  function incHandler(){setCount(count + 1);}
  function decHandler(){setCount(count - 1);}
  function resetHandler(){setCount(0);}
  return (
    <div className="App">
     <div className="counter-app">
      <h1 className="title">increment & decrement</h1>
      <div className="counter">
        <button className="dev" onClick={decHandler}>-</button>
        <div>{count}</div>
        <button className="inc" onClick={incHandler}>+</button>
      </div>
      <button className='resetBtn' onClick={resetHandler}>Reset</button>
     </div>
    </div>
  );
}

export default App;
