import {useEffect, useState} from 'react';
import './App.css';

function useCounter() {
  const [count, setCount] = useState(0);
  console.log(count, setCount);

  useEffect(() => {
    console.log('hello world');
  }, []);
}

function App() {
  useCounter();

  return (
    <div>
      <h2>bobbyhadz.com</h2>
    </div>
  );
}

export default App;
