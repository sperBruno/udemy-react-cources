import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesList = [
  {
    id: "e1",
    date: new Date(2021, 3, 28),
    title: "Car Insurance",
    amount: 300.4,
  },
  {
    id: "e2",
    date: new Date(2021, 2, 28),
    title: "Health Insurance",
    amount: 500.4,
  },
  { id: "e3", date: new Date(2021, 4, 4), title: "House Tax", amount: 500.4 },
  {
    id: "e4",
    date: new Date(2021, 4, 5),
    title: "House Tax second",
    amount: 500.4,
  },
  {
    id: "e5",
    date: new Date(2021, 3, 5),
    title: "House Tax third",
    amount: 500.4,
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(expensesList);

  const addExpenseHandler = (expense) => {
    
    console.log(expenses);
    console.log("In app.js");
    console.log(expense);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    } );
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2>This is bruno practicing </h2>
      <NewExpense onExpenseHandler={addExpenseHandler} />
      
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
