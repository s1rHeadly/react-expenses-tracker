import React from 'react';
import PropTypes from 'prop-types'

const Button = ({type, isDisabled, children}) => {
  return (
    <button
    type={type || 'button'}
    className="btn form"
    disabled={isDisabled}>
    {children}</button>
  )
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
}

Button.defaultProps = {
  isDisabled: true,
  type: 'button',

}



export default Button