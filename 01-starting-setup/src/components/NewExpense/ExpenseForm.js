import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredAmount: "",
    enteredTitle: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    console.log("title change handler");

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    console.log(userInput.enteredTitle);
  };
  const amountChangeHandler = (event) => {
    console.log("amount change handler");

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    console.log(userInput.enteredAmount);
  };
  const dateChangeHandler = (event) => {
    console.log("date change handler");
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    console.log(userInput.enteredDate);
  };
  const submitHandler = (event) => {
    //Evita que se refresque el page cuando se hace el submit
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setUserInput((prevState) => {
      return {
        enteredAmount: "",
        enteredTitle: "",
        enteredDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      
        <button onClick={props.onCancel} type="button" >Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
