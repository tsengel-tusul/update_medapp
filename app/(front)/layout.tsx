//import Navbar from '@/components/Frontend/Navbar'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}
