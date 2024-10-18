import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  function handle(){
  var a = 0;
  if (a < 8) {
  console.log('count');
  
  }
  }


  return (
    <>
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=>setCount((count) => count/9)}> discount{count}</button>

        <button onClick={()=> setCount((count) => count=0 ) }>
          value is{count}
        </button>
        <button onClick={handle()}>
          handle{count}
        </button>
        <p>
          Edit 
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
