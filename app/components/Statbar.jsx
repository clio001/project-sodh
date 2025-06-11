import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Statbar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>Home</Link>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>About</Link>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>XP: 0</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginLeft: '20px' }}>Level: 1</Typography>
      </Box>
  )
}
