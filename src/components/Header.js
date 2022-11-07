import React, { useState } from 'react'
import BudgetTips from './BudgetTips';
import ThirtyDayRule from './ThirtyDayRule';
import SeventyTwentyTen from './SeventyTwentyTen';
import FiftyThirtyTwenty from './FiftyThirtyTwenty';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Header() {
  return (
    
    <div className='grid bg-gray-400 sm:p-4 text-white  '>
        <h1 className='place-self-center mb-2  sm:text-4xl ' >Budget Dojo</h1>
        
        <div className='hidden sm:flex sm:place-self-center sm:gap-8 sm:mt-8 sm:text-xl '>
            <BudgetTips />
            <ThirtyDayRule />
            <FiftyThirtyTwenty />
            <SeventyTwentyTen />
        </div>
        <div className='sm:hidden'>
            <DropdownButton id="dropdown-basic-button" title="" className='bg-blue-500 w-fit'>
                <Dropdown.Item ><BudgetTips /></Dropdown.Item>
                <Dropdown.Item ><ThirtyDayRule /></Dropdown.Item>
                <Dropdown.Item ><FiftyThirtyTwenty /></Dropdown.Item>
                <Dropdown.Item ><SeventyTwentyTen /></Dropdown.Item>
            </DropdownButton>
        </div>
        
        
    </div>

  )
}
