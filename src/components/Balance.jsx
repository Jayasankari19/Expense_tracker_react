import React from 'react'

function Balance({transactions}) {
  const amounts=transactions.map(transaction=>transaction.amount)//all amt 

  const total=amounts.reduce((acc,item)=>(acc+=item),0)// prev value=0 all amt values get added to 0
  return (
    <div>
        <h3>Balance</h3>
        <h1>{total}</h1>
    </div>
  )
}

export default Balance