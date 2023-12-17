import React from 'react';
import PropTypes from 'prop-types'

const Balance = ({balance}) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  )
}


Balance.propTypes = {
balance: PropTypes.number.isRequired
}


Balance.defaultProps = {
  balance: 0,
}

export default Balance