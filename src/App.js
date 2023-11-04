import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";


function App() {

    const expenses = [
        {tittle: 'tittle1', amount: 'amount1', date: new Date(2021, 2, 28)},
        {tittle: 'tittle222', amount: 'amount222', date: new Date(2021, 2, 28)},
        {tittle: 'tittl3333', amount: 'amount333', date: new Date(2021, 2, 28)},
        {tittle: 'tittle4444', amount: 'amount4444', date: new Date(2021, 2, 28)},
    ];

    return (
        <div>
            <NewExpense/>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
