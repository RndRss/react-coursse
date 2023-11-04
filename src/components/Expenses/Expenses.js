import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {

    return (
        <Card className="expenses">
            <ExpenseItem
                tittle={props.items[0].tittle}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ExpenseItem>
            <ExpenseItem
                tittle={props.items[1].tittle}
                amount={props.items[1].amount}
                date={props.items[1].date}>
            </ExpenseItem>
        </Card>
    )
}

export default Expenses;