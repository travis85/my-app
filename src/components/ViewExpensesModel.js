import { Button, Modal } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetContexts'
import { currencyFormatter } from './utility'


export default function ViewExpensesModel({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()
  const expenses = getBudgetExpenses(budgetId)
  const budget = UNCATEGORIZED_BUDGET_ID === budgetId ? {name: "Uncategorized" , id: UNCATEGORIZED_BUDGET_ID} : budgets.find(b => b.id === budgetId)
 
  return (
    <Modal show={ budgetId != null } onHide={ handleClose }>
      <Modal.Header  className='bg-gradient-to-b from-gray-300 to-gray-400 text-white '>
        <Modal.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
          
            <div className='me-2'> {budget?.name} </div>
            <div className='d-flex align-items-baseline'>
              {budgetId !== UNCATEGORIZED_BUDGET_ID &&
                <Button onClick={() => {
                  deleteBudget(budget)
                  handleClose()}}
                  variant='outline-danger'
                  >
                  
                  Delete
                  
                </Button>
              }
              
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-gradient-to-r from-blue-100 to-blue-200 p-4'>
        {expenses.map(expense =>(
          <div key={expense.id} className='grid grid-cols-3 justify-items-center p-2 mb-2 border-2 rounded-lg text-white bg-gradient-to-b from-gray-300 to-gray-400'>
            <div className='me-auto fs-4 '> {expense.description} </div>
            <div className='fs-5 w-fit '> {currencyFormatter.format(expense.amount)} </div>
            <Button onClick={() =>deleteExpense(expense)} size='sm' variant='outline-danger'  className='float-right w-fit'>X</Button>
          </div>
        ))}
      </Modal.Body>
    </Modal>
  )
}
