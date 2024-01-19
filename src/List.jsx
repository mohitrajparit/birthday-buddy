import React from 'react'
import Person from './Person';

const List = ({data}) => {
  return (
    <section style={{}}>
    {data.map((person)=>{
      
      return <Person key={person.id} {...person}/>

    })}    
  </section>
  )
}

export default List