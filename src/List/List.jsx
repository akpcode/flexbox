import React from 'react'

function List() {
  return ( 
    <div>
      <h2>List of Candidates</h2>
      {listitems.map(item=> (
      <h1 key={item.id}><div id='name'>{item.name}  </div> {item.age} {item.color} </h1>
      ))}
    </div>
  )
}

export default List

/*const list =[
    "Moses","Ade","Ayo","Seun","Dipo"
]*/

const listitems=[
    {id:1,name:"Moses",age:20,color:'blue'},
    {id:2,name:"Ade",age:21,color:'red'},
    {id:3,name:"Ayo",age:22,color:'green'},
    {id:4,name:"Seun",age:23,color:'orange'},
    {id:5,name:"Dipo",age:24,color:'purple'},
]
