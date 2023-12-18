import React from 'react';
import PropTypes from 'prop-types'

const Item = ({item}) => {
  const {title, amount} = item;
  

  const signIcon = amount < 0 ? 'minus' : 'plus';

  return (
    <li className={signIcon}>
    {title} <span>{amount}</span>
    <button className="delete-btn">X</button>
  </li>
  )
}


Item.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
}

export default Item