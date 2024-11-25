import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './ToggleButton'
import Link from 'next/link'
import DoctorCard from './DoctorCard'

export default function DoctorList() {
  return (
    <div className='bg-pink-100 py-8 lg:py-24'>
      <div className="max-w-6xl mx-auto">
      <SectionHeading title='Telehealth visit'/>
      <div className="py-4 flex items-center justify-between">  
         <ToggleButton/>
         <Link className="py-3 px-6 border border-blue-600 bg-white" href="#">See All</Link>
      </div>
      <div className="py-6">
            <DoctorCard/> 
          </div> 
      </div>
    
    </div>
  )
}
