import {useState, useEffect} from 'react';
import { DUMMY_API } from './utils/helpers.js';

// components
import Container from './components/Container';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import ItemsList from './components/ItemsList';
import Form from './components/Form';
import Error from './components/Error.js';


const App = () => {


  //state

const [expenses, setExpenses] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);



// dervised state

const totalIncome = expenses
?.map((item) => item.amount > 0 ? item.amount : false )
.filter((item) => item !== false)
.reduce((total, item) => {
  return total += item
}, 0)


const totalExpenses = expenses
?.map((item) => item.amount < 0 ? item.amount : false)
.filter((item) => item !== false)
.reduce((total, item) => {
  return total += item
}, 0);

const balance = totalIncome - Math.abs(totalExpenses);




// functions

const addItem = async(item) => {

  try {
    // update the JSON 
    await fetch(DUMMY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item) // add the item and stringfy it
    });

     // IF the add is successful,  then update state
      setExpenses((prevState) => [...prevState, item])

  } catch (error) {
      console.log(error)
  }

 

}



  const deleteItem = async(id) => {
    // get the url of a specific item using its id
    // http://localhost:4000/expenses/5e22c921-51f0-4809-aa5f-6a2290b0fb3d

    try {
      await fetch(`${DUMMY_API}/${id}`, {
        method: 'DELETE',
      });

      // IF the delete is successful then update state
      setExpenses((prevState) => prevState?.filter((item) => item.id !== id));
  
  
    } catch (error) {
      console.log(error)
    }
   
  }




// effects

  useEffect(() => {
      const getData = async() => {
        setIsLoading(true);

       try {
        const response = await fetch(DUMMY_API);
       if(!response.ok){
        throw new Error('Something went wrong')
       }
      
        const data = await response.json();
        if(data){
          setExpenses(data)
          setError(null)
          setIsLoading(false)
        }
       
       } catch (error) {
          setError(error)

       } finally{
          setIsLoading(false)
       }
        
      }

      getData();

  }, []);





  return (
   <>
    <Header />
    <Container>

      <Balance balance={balance}/>
      <IncomeExpenses totalIncome={totalIncome} totalExpenses={totalExpenses}/>
      {error !== null && <Error error={error} />}
      {!isLoading && error === null && <ItemsList expenses={expenses} onDeleteItem={deleteItem}/>}
      <Form onGetExpense={addItem}/>
      

    </Container>
   </>
  );
}

export default App;
