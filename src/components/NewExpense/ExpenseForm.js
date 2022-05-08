import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  const [userInput, setUserInput] =  useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = event => {
    setUserInput(prevState => {
      return {
      ...prevState,
      enteredTitle: event.target.value,
      }
    });
  }

  const amountChangeHandler = event => {
    setUserInput(prevState => {
      return {
      ...prevState,
        enteredAmount: event.target.value,
      }
    });
  }

  const dateChangeHandler = event => {
    setUserInput(prevState => {
      return {
      ...prevState,
        enteredDate: event.target.value,
      }
    });
  }

  return (<form>
          <div className="new-expense__controls">
          <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} min="0" step="0.01" />
          </div>
          <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} min="2021-04-01" max="2022-03-31" />
          </div>
          </div>
          <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          </div>
          </form>
         );
}

export default ExpenseForm;
