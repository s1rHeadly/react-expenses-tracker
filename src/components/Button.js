import React from 'react';
import PropTypes from 'prop-types'

const Button = ({type, disabled, children, onClick}) => {
  return (
    <button
    onClick={onClick}
    type={type || 'button'}
    className="btn form"
    disabled={disabled}>
    {children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
}

Button.defaultProps = {
  
  disabled: true,
  type: 'button',

}



export default Button