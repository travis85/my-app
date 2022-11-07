
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ThirtyDayRule() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button  onClick={toggleShow} className="bg-blue-600 hover:opacity-70">
       <span className='text-yellow-500'>30</span> Day Rule
      </Button>
      
        <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true} className='w-75 '>
        <Offcanvas.Header closeButton className='bg-gray-400 text-white'>
          <Offcanvas.Title><span className='text-yellow-500'>30</span> Day Rule</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-gradient-to-b from-blue-100 to-blue-200 opacity-80 p-4 '>
          <p className='flex indent-8'>
            The 30 day savings rule is simple: the next time you find yourself considering an impulse buy, stop yourself and think about it for 30 days.
            If you still want to make that purchase after those 30 days, go for it.
            This rule works because by forcing yourself to wait on all your non-essentials, you remove the emotions from your spendings.
          </p>
          <p className='indent-8'>Integrate the 30 day savings into your finances by identifying your needs versus wants, setting up a savings account, 
            and creating an entertainment fund.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
      

      
    </> 

  )
}

export default ThirtyDayRule


