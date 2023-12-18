import React from 'react';
import PropTypes from 'prop-types'

const Balance = ({balance}) => {

  const styles = {
    color: balance < 0 ? "var(--base-red)" : "var(--base-green)",
  };
  return (
    <>
      <h4>Your Balance</h4>
      <h1 style={styles}>${balance}</h1>
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