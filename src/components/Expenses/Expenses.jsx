import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
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
      {filteredExpenses.length === 0 && <p>No expenses for {year}</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
    </Card>
  );
};

export default Expenses;
