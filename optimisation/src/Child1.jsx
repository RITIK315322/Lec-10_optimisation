import React from 'react'

export default function Child1({name}) {

var name = "Aviraj"

console.log("Child1 calling again....");


  return (
    <div>
      <h1>Child1 called.....{name} </h1>
    </div>
  )
}
