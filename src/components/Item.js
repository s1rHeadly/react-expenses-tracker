import React from 'react';
import PropTypes from 'prop-types'

const Item = ({item, onDeleteItem}) => {
  const {title, amount, id} = item;

  const signIcon = amount < 0 ? 'minus' : 'plus';




  return (
    <li className={signIcon} data-id={id}>
    {title} <span>{amount}</span>
    <button className="delete-btn" onClick={() => onDeleteItem(id)}>X</button>
  </li>
  )
}


Item.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
}

Item.defaultProps = {
  title: 'Item Title',
  amount: 0,
}

export default Item