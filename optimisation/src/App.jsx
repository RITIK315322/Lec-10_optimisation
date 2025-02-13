import { useCallback, useState } from 'react'
import './App.css'
import Child1 from './Child1'
import Child2 from './Child2' 

function App() {

  const [count, setCount] = useState(11);

  var name = "Ritik"


  function add(){
    console.log("add fn called");
    
  }

  const add1 = useCallback(add, []);

  return (
    <>
    {count}
    <br />
    <button onClick={()=>setCount(count+5)}>Click Me</button>
      <Child1 name={name} />
      <Child2 name={name} add={add1}/>
    </>
  )
}

export default App
