import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const form_or_button = showForm ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={() => setShowForm(false)}
    />
  ) : (
    <button onClick={() => setShowForm(true)}>Add New Expense</button>
  );

  return <div className="new-expense">{form_or_button}</div>;
};

export default NewExpense;
