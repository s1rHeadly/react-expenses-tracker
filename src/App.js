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


// functions


const addItem = async(item) => {

  try {
    
    await fetch(DUMMY_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });


  } catch (error) {
      console.log(error)
  }

  setExpenses((prevState) => [...prevState, item])

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

      <Balance />
      <IncomeExpenses/>
      {error !== null && <Error error={error} />}
      {!isLoading && error === null && <ItemsList expenses={expenses}/>}
      <Form onGetExpense={addItem}/>
      

    </Container>
   </>
  );
}

export default App;
