import React, {memo} from 'react'

 function Child2({name,add}) {

    console.log("Child2 calling again....");

  return (
    <div>
      <h1>Child2 called.......name is {name}</h1>
    </div>
  )
}

export default memo(Child2); 