import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState(2021);

  const filterExpenses = () =>
    props.expenses.filter((expense) => expense.date.getFullYear() == year);

  let filteredExpenses = filterExpenses();

  const onYearChangeHandler = (yr) => {
    setYear(yr);
    filteredExpenses = filterExpenses();
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onYearChange={onYearChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
