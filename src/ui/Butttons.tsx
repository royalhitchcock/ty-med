import React from 'react'
import Button from '@mui/material/Button';

export function Buttons({children}) {
  return (
    <Button variant="contained" sx={{margin: 2}} type="submit">{children}</Button>
  )
}
