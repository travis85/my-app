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
import BudgetTips from './components/BudgetTips';
import ThirtyDayRule from './components/ThirtyDayRule';
import SeventyTwentyTen from './components/SeventyTwentyTen';
import FiftyThirtyTwenty from './components/FiftyThirtyTwenty';

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

    {/* MOBILE VIEW */}

    <div className=' h-screen bg-gray-200 grid grid-cols-1 md:hidden '>
      <div className='mt-4'>
        <div className='bg-gray-400 p-4 text-white opacity-80'>
          <h3 className='mb-4 text-xl'>Rule of Thumbs:</h3>
          <BudgetTips />
          <ThirtyDayRule />
          <SeventyTwentyTen />
          <FiftyThirtyTwenty />

        </div>
      </div>
        <div gap="2" className="m-4 ">
          <div className='grid grid-cols-1 mb-2'>
          <h1 className=' mb-8 text-2xl mr-4'>Budgets:</h1>
            <TotalBudgetCard />
          </div>
          <button className='rounded-md bg-gradient-to-r from-green-400 to-green-600 border border-solid  py-2 px-4 mr-2 text-white'  onClick={() => setShowAddBudgetModal(true)}>Add Budget</button>
          <button className='rounded-md  bg-gradient-to-r from-red-400 to-red-600 to border border-solid  py-2 px-4 text-white' onClick={openAddExpenseModal}>Add Expense</button>
        </div>
        
        <div className='' style={{display: 'grid',
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


    </div>
    {/* DESKTOP VIEW */}
    <Container className='hidden md:grid grid-cols-2 h-screen bg-gray-200 my-4 '>
      <div className=''>
        <div gap="2" className="m-4 ">
          <div className='flex flex-row mb-4'>
            <h1 className=' mb-8 text-2xl mr-4'>Budgets</h1><TotalBudgetCard />
          </div>
          <button className='rounded-md bg-gradient-to-r from-green-400 to-green-600 border border-solid  py-2 px-4 mr-2 text-white'  onClick={() => setShowAddBudgetModal(true)}>Add Budget</button>
          <button className='rounded-md  bg-gradient-to-r from-red-400 to-red-600 to border border-solid  py-2 px-4 text-white' onClick={openAddExpenseModal}>Add Expense</button>
        </div>
        <div className='pr-24'>
          <div className='bg-gray-400 p-4 max-w-sm rounded-md text-white opacity-80'>
            <h3 className='mb-4 text-xl'>Budget Rule of Thumbs:</h3>
            <BudgetTips />
            <ThirtyDayRule />
            <SeventyTwentyTen />
            <FiftyThirtyTwenty />

          </div>
        </div>
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
