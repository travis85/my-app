import React from 'react'
import { UNCATAGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetContexts'
import BudgetCard from './BudgetCard'

export default function UncatgorizedBudgetCard(props) {
    const { getBudgetExpenses } = useBudgets()
    const amount = getBudgetExpenses(UNCATAGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)
    if (amount === 0) return null;

  return (
    <BudgetCard amount={amount} name='Uncatgorized' gray {...props} />
  )
}