import React from 'react'
import  { Popover, OverlayTrigger } from 'react-bootstrap'

function BudgetTips() {
    const popover = (
        <Popover id="popover-basic" placement='bottom'>
          <Popover.Header as="h3">7 Tips</Popover.Header>
          <Popover.Body> 
            <p>Step 1: Set Realistic Goals.</p>
            <p>Step 2: Identify your Income and Expenses.</p>
            <p>Step 3: Separate Needs and Wants.</p>
            <p>Step 4: Design Your Budget.</p> 
            <p>Step 5: Put Your Plan Into Action.</p>
            <p>Step 6: Seasonal Expenses.</p>
            <p>Step 7: Look Ahead.</p> 
          </Popover.Body>
        </Popover>
      );
  return (
    <OverlayTrigger className=' object-fit' trigger="click" placement="bottom" overlay={popover}>
    <p className='flex max-w-xs cursor-pointer hover:text-sky-200'>Budgeting Tips</p>
    </OverlayTrigger>
  )
}


export default BudgetTips
