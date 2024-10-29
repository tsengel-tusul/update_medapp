//import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h2>Ia am Dashboard only layout</h2>
      {children}
    </div>
  )
}
