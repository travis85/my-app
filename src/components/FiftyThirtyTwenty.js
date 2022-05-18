import React from 'react'
import  { Popover, OverlayTrigger } from 'react-bootstrap'

function FiftyThirtyTwenty() {
    const popover = (
        <Popover id="popover-basic" >
          <Popover.Header as="h3">50-30-20 Rule</Popover.Header>
          <Popover.Body > 
            <p>The rule states that you should spend up to 50% of your after-tax income on needs and obligations that you must-have or must-do.<br></br>
                The remaining half should be split up between 20% savings and debt repayment and <br></br> 
                30% to everything else that you might want.</p>
          </Popover.Body>
        </Popover>
      );

  return (
    <OverlayTrigger className=' object-fit' trigger="click" placement="bottom" overlay={popover}>
    <p className='flex max-w-xs cursor-pointer hover:text-sky-200'>50-30-20 Rule</p>
    </OverlayTrigger>
  )

  
}

export default FiftyThirtyTwenty
