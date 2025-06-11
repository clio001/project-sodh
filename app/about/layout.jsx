import React from 'react'
import Statbar from '../components/Statbar'

export default function Layout({children}) {
  return (
      <div>
          <Statbar />
          {children}</div>
  )
}
