import React from 'react'

const List = (props) => {
  return (
    <div className='list'>
      <h2>Transition list</h2>
      <div className="list-text">
        {props.letter.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </div>
    </div>
  )
}

export default List