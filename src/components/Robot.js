import React from 'react'

export default function Robot(props) {
  let rand = Math.floor(Math.random() * 20);
  return (
    <div className={props.class}>
      <img src={`https://robohash.org/${rand}?size=${props.size}`} className="robot grow" alt=""/>
    </div>
  )
};
