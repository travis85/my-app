import React from 'react'
import  { Popover, OverlayTrigger } from 'react-bootstrap'

function SeventyTwentyTen() {
    const popover = (
        <Popover id="popover-basic" >
          <Popover.Header as="h3">70-20-10 Rule</Popover.Header>
          <Popover.Body > 
            <p>70% is for monthly expenses (anything you spend money on).<br></br>
                20% goes into savings, unless you have pressing debt, in which case it goes toward debt first.<br></br>
                10% goes to donation/tithing, or investments, retirement, saving for college, etc.</p>
          </Popover.Body>
        </Popover>
      );

  return (
    <OverlayTrigger className=' object-fit' trigger="click" placement="bottom" overlay={popover}>
    <p className='flex max-w-xs cursor-pointer hover:text-sky-200'>70-20-10 Rule</p>
    </OverlayTrigger>
  )

  
}

export default SeventyTwentyTen
