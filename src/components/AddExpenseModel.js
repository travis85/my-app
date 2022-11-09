import { Button, Form, Modal } from 'react-bootstrap'
import { useRef } from 'react'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContexts'


export default function AddExpenseModel({ show, handleClose, defaultBudgetId }) {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()

    const { addExpense, budgets } = useBudgets()

    function handleSubmit(e){
        e.preventDefault()
        addExpense(
        {
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value,
        })
        handleClose()
    }

  return (
    <Modal show={ show } onHide={ handleClose }>
        <Form onSubmit={ handleSubmit}>
            <Modal.Header closeButton className='bg-gradient-to-b from-gray-300 to-gray-400 text-white'>
                <Modal.Title>New Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-gradient-to-r from-blue-100 to-blue-200'>
                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control ref={descriptionRef} type="text" required />
                </Form.Group>
                <Form.Group className='mb-3' controlId='amount'>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control ref={amountRef} type="number" required min={0} step={.01} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='budgetId'>
                    <Form.Label>Budget</Form.Label>
                    <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                        <option id={UNCATEGORIZED_BUDGET_ID}>Uncatagorized</option>
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            ))}
                     </Form.Select>
                     
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button className='bg-blue-600 hover:opacity-75' type='submit'>Add</Button>

                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
