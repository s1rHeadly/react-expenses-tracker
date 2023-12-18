import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';

const Form = ({onGetExpense}) => {

  const [inputText, setInputText] = useState('');
  const [amount, setAmount] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState({
      text: null,
      amount: null,
  });



  const inputChange = (e) => {
      setInputText(e.target.value);

    if (inputText.trim().length < 5) {
        setMessage((prevState) => {
          return {...prevState, text: 'Please enter more than 5 characters'}
        })
    } else if(inputText.trim().length < 5 || amount === ''){
      setDisabled(true)
      setMessage((prevState) => {
        return {...prevState, text: null}
      })
    }else {
        setDisabled(false);
        setMessage((prevState) => {
          return {...prevState, text: null}
        })

    }
}

const amountChange = (e) => {
    setAmount(e.target.value);

    if (amount === '' ) {
        setMessage((prevState) => {
          return {...prevState, amount: 'Please enter an amount'}
        })
    } else if(amount === '' || inputText.trim().length < 5){
      setDisabled(true);
      setMessage((prevState) => {
        return {...prevState, amount: null}
      })
    } else {
        setDisabled(false);
        setMessage((prevState) => {
          return {...prevState, amount: null}
        })
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

        {inputText && (<div style={{color: "red", fontSize: '12px'}}>{message.text}</div>)}
       
        <div className="form-control">
            <label htmlFor="amount">Enter Amount</label>
            <input
                value={amount}
                onChange={amountChange}
                type="number"
                placeholder="Enter amount..." />
        </div>
        
        {amount && (<div style={{color: "red", fontSize: '12px'}}>{message.amount}</div>)}

       <Button
       onClick={onSubmitHandler}
       type="button"
       disabled={disabled}>Add Item</Button>
    </form>
</>
    
  );
};

export default Form;
