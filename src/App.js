import {useState, useEffect, useReducer} from 'react';
import { DUMMY_API } from './utils/helpers.js';

// components
import Container from './components/Container';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import ItemsList from './components/ItemsList';
import Form from './components/Form';
import Error from './components/Error.js';



// reducer

const initialState = {
  expenses: [],
  isLoading: false,
  error: null
}

function reducerFunc(state, action){

  switch (action.type) {

      case 'loading':
        return{
          ...state,
          isLoading: true,
      }

      case 'success':
        return {
         ...state,
         expenses:  action.payload,
         isLoading: false,
         error: null,
        }

      case 'add_item':
      return{
        ...state,
        expenses: [...state.expenses, action.payload]
      }

      case 'delete_item':
      return{
        ...state,
        expenses: state.expenses.filter((item) => item.id !== action.payload)
      }

      case 'failed':
      return {
        ...state,
        error: action.payload
      }

    default:
     return state
  }
}



const App = () => {

  //state

// const [expenses, setExpenses] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);


const [state, dispatch] = useReducer(reducerFunc, initialState)
console.log('render', state)



// dervised state

const totalIncome = state.expenses
?.map((item) => item.amount > 0 ? item.amount : false )
.filter((item) => item !== false)
.reduce((total, item) => {
  return total += item
}, 0)


const totalExpenses = state.expenses
?.map((item) => item.amount < 0 ? item.amount : false)
.filter((item) => item !== false)
.reduce((total, item) => {
  return total += item
}, 0);

const balance = totalIncome - Math.abs(totalExpenses);




// functions

const deleteItem = async(id) => {
  // get the url of a specific item using its id
  // http://localhost:4000/expenses/5e22c921-51f0-4809-aa5f-6a2290b0fb3d

  try {
    await fetch(`${DUMMY_API}/${id}`, {
      method: 'DELETE',
    });

    // IF the delete is successful then dispatch and update state
    dispatch({
      type: 'delete_item',
      payload: id,
    })

    // setExpenses((prevState) => prevState?.filter((item) => item.id !== id));


  } catch (error) {
    dispatch({
      type: 'failed',
      payload: error
     })
  }
 
}




  const addItem = async (item) => {

    try {
      await fetch(DUMMY_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item) // add the item and stringify it
      });
  
      dispatch({
        type: 'add_item', 
        payload: item
      });
  
    } catch (error) {
      dispatch({
        type: 'failed',
        payload: error
       })
    }
  };






  useEffect(() => {
      const getData = async() => {

        dispatch({
          type: 'loading',
        })

       try {
        const response = await fetch(DUMMY_API);
       if(!response.ok){
        throw new Error('Something went wrong')
       }
      
        const data = await response.json();
        if(data){
         // dipspatch state
           dispatch({
            type: 'success',
            payload: data,
          })
        }
       
       } catch (error) {
         dispatch({
          type: 'failed',
          payload: error
         })

       } finally{
          setIsLoading(false)
       }
        
      }

      getData();

  }, []);




  useEffect(() => {
   window.addEventListener('click', function(){
      // when the submit button is enabled AND the user presses the enter key
      // the form  will submit
      const button = document.querySelector('button');
      if(button)
      console.log(button)
   })
    return () => {
     window.document.removeEventListener('click', function(e){
    
   })
    };
  }, []);





  return (
   <>
    <Header />
    <Container>

      <Balance balance={balance}/>
      <IncomeExpenses totalIncome={totalIncome} totalExpenses={totalExpenses}/>
      {state.error !== null && <Error error={error} />}
      {!state.isLoading && state.error === null && <ItemsList expenses={state.expenses} onDeleteItem={deleteItem}/>}
      <Form onGetExpense={addItem}/>
      

    </Container>
   </>
  );
}

export default App;
