import React, { useState } from 'react'
import BudgetTips from './BudgetTips';
import ThirtyDayRule from './ThirtyDayRule';
import SeventyTwentyTen from './SeventyTwentyTen';
import FiftyThirtyTwenty from './FiftyThirtyTwenty';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  return (
    
    <div className='grid grid-cols-2 bg-gradient-to-b from-gray-300 to-gray-400 sm:grid-cols-1 sm:p-4 text-white  '>
        <h1 className='text-xl place-self-center mb-2 pt-2  sm:text-4xl ' >Budget Dojo</h1>
        
        <div className='hidden sm:flex sm:place-self-center sm:gap-8 sm:mt-8 sm:text-xl '>
          <BudgetTips />
          <ThirtyDayRule />
          <FiftyThirtyTwenty />
          <SeventyTwentyTen />
        </div>
      <div className='order-first sm:hidden'>
        <Navbar expand={false} className="m-2 w-fit ">
          <Navbar.Toggle aria-controls={'offcanvasNavbar'} className=' bg-gradient-to-b from-blue-500 to-blue-600 '/>
          <Navbar.Offcanvas
            id={'offcanvasNavbar'}
            aria-labelledby={'offcanvasNavbarLabel'}
            placement="start"
            className='w-2/4'>
            <Offcanvas.Header className='bg-gradient-to-b from-gray-300 to-gray-400' closeButton >
              <Offcanvas.Title id={'offcanvasNavbarLabel'}>
                Tips & Rules
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='bg-gradient-to-r from-blue-100 to-blue-200 w-fit'>
              <BudgetTips />
              <ThirtyDayRule />
              <FiftyThirtyTwenty />
              <SeventyTwentyTen />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
         
      </div>
    </div>
  )
}
