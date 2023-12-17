import Container from './components/Container';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import ItemsList from './components/ItemsList';
import Form from './components/Form';

const App = () => {



  function getExpense(item){
    console.log(item)
  }


  return (
   <>
    <Header />
    <Container>

      <Balance />
      <IncomeExpenses />
      <ItemsList />
      <Form onGetExpense={getExpense}/>
      

    </Container>
   </>
  );
}

export default App;
