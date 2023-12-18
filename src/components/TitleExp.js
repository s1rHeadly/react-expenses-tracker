import React from 'react';


const TitleExp = ({title, amount, position}) => {

  return (
    <div>
    <h4>{title}</h4>
    <p className={`money ${position}`}>${amount}</p>
  </div>
  )
}

export default TitleExp