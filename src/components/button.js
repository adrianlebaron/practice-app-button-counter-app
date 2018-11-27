import React from  'react'

export const Button = (props) => {
  return(
    <div>
      <button className="{props.className}" onClick={props.please}> {props.title} </button>
      <div>{props.body}</div>
      <div>{props.count}</div>
    </div>
  )
}