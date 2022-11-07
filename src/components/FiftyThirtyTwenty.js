import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FiftyThirtyTwenty() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button  onClick={toggleShow} className="bg-blue-600 hover:opacity-70">
        <span className='text-yellow-500'>50</span>-<span className='text-green-500'>30</span>-<span className='text-red-500'>20</span> Rule
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true} className='w-75 '>
        <Offcanvas.Header closeButton className='bg-gray-400 text-white'>
          <Offcanvas.Title><span className='text-yellow-500'>50</span>-<span className='text-green-500'>30</span>-<span className='text-red-500'>20</span> Rule</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-gradient-to-b from-blue-100 to-blue-200 opacity-80'>
          <p className='indent-8'>
            The rule states that you should spend up to <span className='text-yellow-500'>50%</span> of your after-tax income on needs and obligations that you must-have or must-do.<br></br>
            The remaining half should be split up between <span className='text-red-500'>20%</span> savings and debt repayment and <br></br> 
            <span className='text-green-500'>30%</span> to everything else that you might want.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </> 

  )
}

export default FiftyThirtyTwenty


