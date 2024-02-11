import {useState} from 'react' 

import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExp from './components/IncomeExp'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import './App.css'

function App() {


  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Set the user in state upon successful login

    console.log('Handling login with username:', username);
    setUser(username);
  };

  const InitialState={ 
   transaction : [  //intial state obj ku array values ahh kudukarom
   { id: 1, text: 'Flower', amount: -20,date:'2024-02-01' },
  { id: 2, text: 'Salary', amount: 300,date:'2024-03-01' },
   { id: 3, text: 'Book', amount: -10,date:'2024-04-01'},
   { id: 4, text: 'Camera', amount: 150,date:'2024-05-01' }
 ],
}
const [transaction,setTransaction]=useState(InitialState.transaction)

//write delete fun nd pass as props (if there is two name we dont name so we use id)
//if suppose 3rd we delete ohter than 3 ahh kudu
const deleteTransaction=(id)=>{
  const updatedTransaction=transaction.filter(transaction=>transaction.id!==id)
  setTransaction(updatedTransaction)
}


function addTransaction(text,amount,date){
  const newTransaction={id:Math.floor(Math.random()*1000000),
    text,
  amount,
  date,
}
setTransaction([...transaction,newTransaction]) //copy and add 
}

  return (

    <Router>
      
    
    
      <>
      <Header/>
      <Balance transactions={transaction}/>
      <IncomeExp transactions={transaction}/>
      <TransactionList transactions={transaction} deleteTransaction={deleteTransaction} />
      <AddTransaction transactions={transaction} AddTransaction={addTransaction}/>
     </>
    
    </Router>
  );
}

export default App
