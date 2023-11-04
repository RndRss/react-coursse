import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTittle, setEnteredTittle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTittle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const tittleChangeHandler = (event) => {
        setEnteredTittle(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredTittle: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTittle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'tittle') {
            setEnteredTittle(value)
        } else if (identifier === 'date') {
            setEnteredDate(value)
        } else if (identifier === 'amount') {
            setEnteredAmount(value)
        } else {
            console.log("identifier unexpected")
        }
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={tittleChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>

            </div>
            <div className="new-expense__actions">
                {/*<button type=submit>Add Expense</button>*/}
            </div>
        </form>
    );
}
export default ExpenseForm;