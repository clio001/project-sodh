import React from 'react'
import Statbar from '../components/Statbar'

export default function Layout({ children }) {
  // This layout is used for the /about page
  return (
      <div>
          <Statbar/>
          {children}</div>
  )
}
