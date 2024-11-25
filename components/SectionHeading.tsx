import React from 'react'

export default function SectionHeading({title}:{title:string}) {
  return (
    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px] scroll-m-20 pb-2 tracking-tight first:mt-0">
             {title}
              </h2>
  )
}
