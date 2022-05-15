import { useState } from 'react';
import './index.css';
// import  { Stack, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import AddBudgetModel from './components/AddBudgetModel';
import AddExpenseModel from './components/AddExpenseModel';
import ViewExpensesModel from './components/ViewExpensesModel';
import UncatgorizedBudgetCard from './components/UncatgorizedBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import BudgetCard from './components/BudgetCard';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetContexts';


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()

  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId){
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)

  }
  return (
    <>
    <Container className= 'bg-gray-200 h-screen my-4 grid grid-cols-2'>
      <div gap="2" className="m-4 ">
        <div className='flex flex-row mb-4'>
          <h1 className=' mb-8 text-2xl mr-4'>Budgets</h1><TotalBudgetCard />
        </div>
        <button className='rounded-md bg-gradient-to-r from-green-400 to-green-600 border border-solid border-sky-500 py-2 px-4 mr-2'  onClick={() => setShowAddBudgetModal(true)}>Add Budget</button>
        <button className='rounded-md  bg-gradient-to-r from-red-400 to-red-600 to border border-solid border-sky-500 py-2 px-4' onClick={openAddExpenseModal}>Add Expense</button>
      </div>
      <div className='mt-4' style={{display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
            gap:'1rem',
            alignItems:'flex-start'}}>

            {budgets.map(budget => {
              const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount,0)
            return (
              <BudgetCard 
              key={budget.id}
              name={budget.name} 
              amount={amount} 
              max={budget.max}
              onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              onViewExpenseClick={() => setViewExpensesModalBudgetId(budget.id)}
              />
              )     
            })}
            <UncatgorizedBudgetCard onAddExpenseClick={openAddExpenseModal} onViewExpenseClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}/>
            
      </div>
    </Container>
    <AddBudgetModel show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    <AddExpenseModel show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setShowAddExpenseModal(false)}/>
    <ViewExpensesModel budgetId={viewExpensesModalBudgetId} handleClose={()=> setViewExpensesModalBudgetId()}  />
    </>

  )
  
}

export default App;
