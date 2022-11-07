import { useState } from 'react';
import './index.css';
import AddBudgetModel from './components/AddBudgetModel';
import AddExpenseModel from './components/AddExpenseModel';
import ViewExpensesModel from './components/ViewExpensesModel';
import UncatgorizedBudgetCard from './components/UncatgorizedBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import BudgetCard from './components/BudgetCard';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetContexts';
import Header from './components/Header'

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
      <Header />
      
    <div className='bg-gray-200 h-screen p-8 sm:pl-48 sm:pr-48'>
      <div  className=" mb-4">
        <div className='grid grid-cols-1 mb-2  shadow-2xl'>
          <TotalBudgetCard />
        </div>
        <div className='flex'>
          <button className='rounded-md bg-gradient-to-r from-green-400 to-green-600 border border-solid  py-2 px-4 mr-2 text-white'  onClick={() => setShowAddBudgetModal(true)}>Budget</button>
          <button className='rounded-md  bg-gradient-to-r from-red-400 to-red-600 to border border-solid  py-2 px-4 text-white' onClick={openAddExpenseModal}>Expense</button>
        </div>
      </div>
      <div className='grid border-4 border-indigo-200 border-x-blue-400 p-8 shadow-xl '>
        <h1 className=' mb-8 text-2xl place-self-center'>Budgets</h1>
        <div className='grid grid-cols-1  gap-2 sm:grid-cols-2 ' >

          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount,0)
            return (
              <div className="shadow-2xl ">
                <BudgetCard 
                  className='bg-blue-200'
                  key={budget.id}
                  name={budget.name} 
                  amount={amount} 
                  max={budget.max}
                  onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                  onViewExpenseClick={() => setViewExpensesModalBudgetId(budget.id)}
                />
              </div>
              
              
            ) 
              
          })}
          <UncatgorizedBudgetCard onAddExpenseClick={openAddExpenseModal} onViewExpenseClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}/>

        </div>

      </div>
    <AddBudgetModel show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    <AddExpenseModel show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setShowAddExpenseModal(false)}/>
    <ViewExpensesModel budgetId={viewExpensesModalBudgetId} handleClose={()=> setViewExpensesModalBudgetId()}  />

    </div>

    </>

  )
  
}

export default App;
