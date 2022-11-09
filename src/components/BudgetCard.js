import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../components/utility'
import { useBudgets } from '../contexts/BudgetContexts'

import Badge from 'react-bootstrap/Badge';

function BudgetCard({ name, amount, max, gray, onAddExpenseClick, hideButtons, onViewExpenseClick, budgetId }) {
    const { getBudgetExpenses } = useBudgets()
    const expenses = getBudgetExpenses(budgetId)

    console.log(expenses)
    const className = []
    if(amount > max){
        className.push('bg-danger', 'bg-opacity-10')
    } else if(gray){
        className.push('bg-light')
    }
    return (
        <Card className={`${className.join(' ')} bg-gradient-to-r from-blue-100 to-blue-200`}>
        <div className='py-2 px-4'>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal'>
                <div className='me-2'>
                    {name}
                </div>
                <div className='d-flex align-items-baseline'>
                    {currencyFormatter.format(amount)} 
                   {max && <span className='text-muted fs-6 ms-1'>
                         {currencyFormatter.format(max)}
                    </span>}
                </div>
            </Card.Title>
            {max && <ProgressBar className='rounded-pill' variant={getProgressBarVarient(amount,max)}
                min={0}
                max={max}
                now={amount}
                />}
                {!hideButtons &&
                    <Stack direction="horizontal" gap="2" className="mt-4">
                        <Button  className='ms-auto bg-gradient-to-r from-red-400 to-red-600 hover:opacity-75' onClick={onAddExpenseClick}> Expense</Button>
                        <Button onClick={onViewExpenseClick} className='bg-gradient-to-r from-green-400 to-green-600 hover:opacity-75'>View <Badge bg="secondary">{ expenses.length}</Badge> </Button>
                    </Stack>
                }

        </div>
    </Card>
  )

  function getProgressBarVarient(amount, max){
    const ratio = amount / max
    if(ratio < .5) return 'primary'
    if(ratio < .75) return 'warning'
    return 'danger'

  }
}

export default BudgetCard