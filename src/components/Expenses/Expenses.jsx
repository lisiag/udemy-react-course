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
        {props.expenses.map(expense => <ExpenseItem expense={expense} />)}
    </Card>
  );
};

export default Expenses;
