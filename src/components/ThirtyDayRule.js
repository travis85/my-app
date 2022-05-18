import React from 'react'
import  { Popover, OverlayTrigger } from 'react-bootstrap'

function ThirtyDayRule() {
    const popover = (
        <Popover id="popover-basic" >
          <Popover.Header as="h3">30 Day Rule</Popover.Header>
          <Popover.Body > 
            <p>The 30 day savings rule is simple: the next time you find yourself considering an impulse buy, stop yourself and think about it for 30 days.
                If you still want to make that purchase after those 30 days, go for it.
                This rule works because by forcing yourself to wait on all your non-essentials, you remove the emotions from your spendings.
                Integrate the 30 day savings into your finances by identifying your needs versus wants, setting up a savings account, 
                and creating an entertainment fund.</p>
          </Popover.Body>
        </Popover>
      );

  return (
    <OverlayTrigger className=' object-fit' trigger="click" placement="bottom" overlay={popover}>
    <p className='flex max-w-xs cursor-pointer hover:text-sky-200'>30 Day Rule</p>
    </OverlayTrigger>
  )

  
}

export default ThirtyDayRule
