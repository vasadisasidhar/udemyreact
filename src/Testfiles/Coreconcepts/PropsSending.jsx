import React from 'react'



export const PropsSending = (props) => {
  return (
    <li>
      <img src={props.image}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}



export const PropsSendingg = ({title,description,image}) => {
  return (
    <li>
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};


export const FrndsSending = ({name,phone}) => {
  return (
    <li>
      <h3>{name}</h3>
      <h2>{phone}</h2>
    </li>
  )
}






