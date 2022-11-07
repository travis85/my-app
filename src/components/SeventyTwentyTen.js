
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SeventyTwentyTen() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button  onClick={toggleShow}  className="bg-blue-600 hover:opacity-70">
      <span className='text-red-500'>70</span>-<span className='text-yellow-500'>20</span>-<span className='text-green-500'>10</span> Rule
      </Button>
     
        <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true} className=''>
        <Offcanvas.Header closeButton className='bg-gray-400 text-white' >
          <Offcanvas.Title><span className='text-red-500'>70</span>-<span className='text-yellow-500'>20</span>-<span className='text-green-500'>10</span> Rule</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-gradient-to-b from-blue-100 to-blue-200 opacity-80'>
          <p>
            <span className='text-red-500'>70%</span> is for monthly expenses (anything you spend money on).<br></br>  
            <span className='text-yellow-500'>20%</span> goes into savings, unless you have pressing debt, in which case it goes toward debt first.<br></br>
            <span className='text-green-500'>10%</span> goes to donation/tithing, or investments, retirement, saving for college, etc.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
     
      
    </> 

  )
}

export default SeventyTwentyTen


