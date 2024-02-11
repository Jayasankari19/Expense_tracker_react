import React, { useState } from 'react'

function AddTransaction({transactions,AddTransaction}) {
  const[text,setText]=useState("")
  const[amount,setAmount]=useState("")
  const[date,setDate]=useState("")

  function onSubmit(e){
    e.preventDefault();
    AddTransaction(text,Number(amount),date)
    setText('')
    setAmount('')
    setDate('')
  }
  return (
    <>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text}id="text" placeholder="Enter text..." onChange={(e)=>setText(e.target.value)} />
        </div>

        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} id="amount" placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)}/>
        </div>

        <div className="form-control">
          <label htmlFor="date">Date</label><br />
          <input  id='date'
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter Amount..."
            type="date"/>
        </div>
        
        
        <button className="btn">Add transaction</button>
      </form>
      {/* <button className="btn" onClick={onSubmit} >Add transaction</button> */}
    </>
  )
}

export default AddTransaction