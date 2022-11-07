import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function BudgetTips() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button onClick={toggleShow} className="bg-blue-600  hover:opacity-70 ">
       Budget Tips
      </Button>
     
<Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true} className='w-75 '>
        <Offcanvas.Header closeButton className='bg-gray-400 text-white'>
          <Offcanvas.Title>Budgeting Tips</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-gradient-to-b from-blue-100 to-blue-200 opacity-80'>
          <p><span className='text-green-500'>Step 1:</span> Set Realistic Goals.</p>
          <p><span className='text-green-500'>Step 2:</span> Identify your Income and Expenses.</p>
          <p><span className='text-green-500'>Step 3:</span> Separate Needs and Wants.</p>
          <p><span className='text-green-500'>Step 4:</span> Design Your Budget.</p> 
          <p><span className='text-green-500'>Step 5:</span> Put Your Plan Into Action.</p>
          <p><span className='text-green-500'>Step 6:</span> Seasonal Expenses.</p>
          <p><span className='text-green-500'>Step 7:</span> Look Ahead.</p>  
        </Offcanvas.Body>
      </Offcanvas>
      
      
    </>
  );
}

export default BudgetTips
