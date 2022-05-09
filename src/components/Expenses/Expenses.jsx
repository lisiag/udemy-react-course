import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onYearChange={setYear} />
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
};

export default Expenses;
