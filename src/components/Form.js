import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';

const Form = ({onGetExpense}) => {

  const [inputText, setInputText] = useState('');
  const [amount, setAmount] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');



  const inputChange = (e) => {
      setInputText(e.target.value);

    if (inputText.trim().length < 5) {
        setMessage('Please enter more than 5 characters')
    } else if(inputText.trim().length < 5 || amount === ''){
      setDisabled(true)
      setMessage(null)
    }else {
        setDisabled(false);
        setMessage(null);

    }
}

const amountChange = (e) => {
    setAmount(e.target.value);

    if (amount === '' ) {
        setMessage('Please enter an amount')
    } else if(amount === '' || inputText.trim().length < 5){
      setDisabled(true);
      setMessage(null)
    } else {
        setDisabled(false);
        setMessage(null);
    }

}




const onSubmitHandler = (e) => {

    e.preventDefault();

    if(inputText.trim().length < 5 || amount === 0){
      setDisabled(true)
      return
    }

    const item = {
        id: uuidv4(),
        title: inputText,
        amount: +amount,
    }

    onGetExpense(item);

    setInputText('');
    setAmount('');
    setDisabled(true);
    setMessage(null)

}


  return (
    <>
    <h3>Add new transaction</h3>
    <form>
        <div className="form-control">
            <label htmlFor="text">Add Item</label>
            <input
                value={inputText}
                onChange={inputChange}
                type="text"
                placeholder="Enter text..." />
        </div>

        {inputText && (<div style={{color: "red", fontSize: '12px'}}>{message}</div>)}
       
        <div className="form-control">
            <label htmlFor="amount">Enter Amount</label>
            <input
                value={amount}
                onChange={amountChange}
                type="number"
                placeholder="Enter amount..." />
        </div>
        
        {amount && (<div style={{color: "red", fontSize: '12px'}}>{message}</div>)}

       <Button
       onClick={onSubmitHandler}
       type="button"
       disabled={disabled}>Add Item</Button>
    </form>
</>
    
  );
};

export default Form;
