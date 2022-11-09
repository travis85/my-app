import React from 'react'
import {  useBudgets } from '../contexts/BudgetContexts'
import BudgetCard from './BudgetCard'
import '../index.css'
export default function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)

  if (max === 0) return (
    <div className='grid'>
       <h1 className='place-self-center text-xl'>Please Create a Budget</h1>
    <BudgetCard amount={0} name='Total' gray max={0} hideButtons />
    </div>
   
  )

  return (
    <BudgetCard amount={amount} name='Total' gray max={max} hideButtons/>
  )
}
