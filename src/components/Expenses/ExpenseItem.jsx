import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle("Title has changed.");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expense={props.expense} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
