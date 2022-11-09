import { Button, Form, Modal } from 'react-bootstrap'
import { useRef } from 'react'
import { useBudgets } from '../contexts/BudgetContexts'


export default function AddBudgetModel({ show, handleClose }) {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()

    function handleSubmit(e){
        e.preventDefault()
        addBudget(
        {
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)
        })
        handleClose()
    }

  return (
    <Modal show={ show } onHide={ handleClose }>
        <Form onSubmit={ handleSubmit}>
            <Modal.Header closeButton className='bg-gradient-to-b from-gray-300 to-gray-400 text-white'>
                <Modal.Title>New Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-gradient-to-r from-blue-100 to-blue-200'>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" required />
                </Form.Group>
                <Form.Group className='mb-3' controlId='max'>
                    <Form.Label>Max Spending</Form.Label>
                    <Form.Control ref={maxRef} type="number" required min={0} step={.01} />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button type='submit' className='bg-blue-600 hover:opacity-75'>Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
