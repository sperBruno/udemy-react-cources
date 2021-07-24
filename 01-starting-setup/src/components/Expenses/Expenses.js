import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseFilter.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");

  const expensesFiltered = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(yearFilter)
  );

  const onFilter = (year) => {
    setYearFilter(year);
    console.log("Expensese filtered by ", yearFilter);
    console.log(expensesFiltered);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFilter}
          onFilterChange={onFilter}
        ></ExpensesFilter>
        <ExpensesChart expenses={expensesFiltered}></ExpensesChart>
        <ExpensesList items={expensesFiltered}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
