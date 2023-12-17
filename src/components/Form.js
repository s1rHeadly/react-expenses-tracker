import React, { useState } from "react";
import Button from "./Button";

const Form = ({onGetExpense}) => {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [disabled, setDisabled] = useState(true);


  function handleName(e){
      const {target} = e;
      setName(target.value)
  }

  function handleAmount(e){
    const {target} = e;
    setAmount(target.value)
  }


  function submitExpense(e){
      e.preventDefault();

      // checker => if both state values are true then set the disabled button to false and allow the form to be submitted
     


  }

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={submitExpense}>
        <div className="form-control">
          <label htmlFor="text">Add Item</label>
          <input type="text" placeholder="Enter text..."  value={name} onChange={handleName}/>
        </div>
        <div></div>
        <div className="form-control">
          <label htmlFor="amount">Enter Amount</label>
          <input type="number" placeholder="Enter amount..." value={amount} onChange={handleAmount}/>
        </div>
        <div></div>
       <Button
       isDisabled={disabled}
       >Add transaction</Button>
      </form>
    </>
  );
};

export default Form;
