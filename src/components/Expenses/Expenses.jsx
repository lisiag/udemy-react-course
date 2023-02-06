import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState(2021);

  let filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == year
  );

  // The conditional content below would be better moved out of the return statement. Keeping it here for now as an example of using &&
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onYearChange={setYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
