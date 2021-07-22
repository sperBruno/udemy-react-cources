import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);

  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onExpenseHandler(expenseData);
    displayNewExpense();
  };

  const displayNewExpense = () => {
    if (newExpense) {
      setNewExpense(false);
      console.log("display: false");
    } else {
      setNewExpense(true);
      console.log("display: true");
    }
  };

  if (newExpense === false) {
    return (
      <div className="new-expense">
        <button className="new-expense__actions" onClick={displayNewExpense} >
          Add new Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onCancel={displayNewExpense} onSaveExpenseData={saveExpenseDatahandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
