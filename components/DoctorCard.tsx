import  Link  from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Stethoscope } from 'lucide-react'

export default function DoctorCard() {
  
  return (
    <div className='border border-gray-200 bg-white inline-flex flex-col  py-6 px-3 rounded-md'>
      <Link href="#"><h2 className='uppercase font-bold text-2xl tracking-widest'>Batjargal, Battsengel</h2>
      <p py-3>3250 Lincoln Highway, Kendall Park, NJ 08824</p>
      <div className="flex items-center gap-4 py-4">
        <Image src="/doc-profile.jpg" width={243} height={207} alt="Doctor" className='w-24 h-24 rounded-full object-cover'/>
        <div className="flex flex-col gap-2">
         <p className='w-4 h-4 mr-2 flex-shrink-0'>
            <Stethoscope/>
            <span>Family Medicine</span>
         </p>
         <p className='bg-green-200 py-3 px-6 uppercase'>
            Available today
         </p>
        </div>
      </div>
      </Link>
      <div className="pt-6 border-t border-gray-400">
        <h3 className='flex gap-4 justify-between items-center'><span>Tue, Mar 12</span><span>$137</span> Original price  $127 with Sesame Plus</h3>
      </div>
    </div>
  )
}
