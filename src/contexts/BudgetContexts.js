import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"



const BudgetContexts = React.createContext()

export const UNCATAGORIZED_BUDGET_ID = 'uncatagorized'

export function useBudgets(){
    return useContext(BudgetContexts)
}

export const BudgetProvider = ({ children }) =>{

    const [budgets, setBudgets] = useLocalStorage("budgets",[])
    const [expenses,setExpenses] = useLocalStorage("expenses",[])

    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    function addExpress({description, amount, budgetId}){
        setExpenses(prevExpenses =>{
            
            return [...prevExpenses, {id:uuidV4(), description, amount, budgetId}]
        })

    }

    function addBudget({ name, max }){
        setBudgets(prevBudgets =>{
            if(prevBudgets.find(budget => budget.name === name)){
                return prevBudgets
            }
            return [...prevBudgets, {id:uuidV4(), name, max}]
        })
    }
    function deleteBudget({id}){
        setExpenses(prevExpenses =>{
            return prevExpenses.map(expense =>{
                if(expense.budgetId !== id) return expense
                return {...expense, budgetId: UNCATAGORIZED_BUDGET_ID}
            })
        })
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }
    function deleteExpense({id}){
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }


    return(
    <BudgetContexts.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpress,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>
        {children}

    </BudgetContexts.Provider>
    )
}