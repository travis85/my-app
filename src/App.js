import { useState } from 'react';
import  { Stack, Button } from 'react-bootstrap'
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
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
        <Button variant='outline-primary' onClick={openAddExpenseModal}>Add Expense</Button>
      </Stack>
      <div style={{display: 'grid',
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
            <TotalBudgetCard />
      </div>
    </Container>
    <AddBudgetModel show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    <AddExpenseModel show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setShowAddExpenseModal(false)}/>
    <ViewExpensesModel budgetId={viewExpensesModalBudgetId} handleClose={()=> setViewExpensesModalBudgetId()}  />
    </>

  )
  
}

export default App;
