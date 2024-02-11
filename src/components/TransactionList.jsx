import React from 'react'


function TransactionList({transactions,deleteTransaction}) {
  return (
    <div>
          <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=> <li className={transaction.amount<0?'minus':'plus'}><span>
          {transaction.text} </span> <span>{transaction.date}</span> <span>${transaction.amount}</span>
          <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
         
        </li> )}
      </ul>
    </div>
  )
}

export default TransactionList

{/*function onclick ku function than vennum but inga namma props ahh than iruku so function use pandrom onclick kulla*/}