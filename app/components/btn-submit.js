'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'
import CircularProgress from '@mui/material/CircularProgress';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import { green } from '@mui/material/colors';

const ButtonSubmit = ({value, ...props}) => {
    const { pending } = useFormStatus();

  return (
    <>
    <button disabled={pending}{...props} className='relative bg-green-600 hover:bg-green-500 p-4 text-white font-semibold rounded-full'>
        { pending ? <>
        <CloudSyncIcon/>
        <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -5,
              left: -6,
              zIndex: 1,
            }}
          />
        </> : value}
    </button>
    </>
    
  )
}

export default ButtonSubmit