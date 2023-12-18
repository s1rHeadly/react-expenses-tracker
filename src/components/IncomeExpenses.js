import React from "react";
import PropTypes from 'prop-types'

const IncomeExpenses = ({totalIncome, totalExpenses}) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalIncome}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${totalExpenses}</p>
      </div>
    </div>
  );
};


IncomeExpenses.propTypes = {
  incomeAmount: PropTypes.number.isRequired,
  expensesAmount: PropTypes.number.isRequired
}


IncomeExpenses.defaultProps = {
  incomeAmount: 0,
  expensesAmount: 0
}



export default IncomeExpenses;
