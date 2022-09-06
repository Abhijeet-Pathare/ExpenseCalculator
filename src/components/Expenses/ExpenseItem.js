import React,{ useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //function clickHandler() {}
  const [title,setTitle] = useState(props.title);
  console.log('ExpenseItem component evaluated by React!');

  const clickhandler = () =>{
    //console.log('Clicked');
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div  className="expense-item__price">${props.amount}</div>
      <button onClick={clickhandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
