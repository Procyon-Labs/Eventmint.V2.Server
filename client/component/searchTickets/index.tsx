import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import CopyIcon from '../svgs/copyIcon';
import { CustomInput } from '../customInput';
import SearchLogo from '../svgs/searchLogo';

export default function SearchTickets() {
  return (
    <div className='py-[16px] w-1/3'>
       <CustomInput name='fuzzy' icon2={<SearchLogo/>} placeholder='Search Tickets' bgcolor='bg-[#0D0F11CC] placeholder:text-h-xxxs' customClassName='bg-[#0D0F11CC] text-white'  /> 
        </div>
  )
}
