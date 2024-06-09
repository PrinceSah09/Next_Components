"use client"
import React from 'react'
import { MeteorsDemo } from './MeteorsDemo'
function MeteorCards() {
    return (
        <div className='bg-zinc-200 lg-w-[1800px] m-auto  flex mb-16 '>
            <div className='flex flex-row flex-wrap items-center mt-8 justify-center gap-2 mb-8 md-flex-col m-auto w-full'>
                <MeteorsDemo />
                <MeteorsDemo />
                <MeteorsDemo />
                <MeteorsDemo />
                <MeteorsDemo />
                <MeteorsDemo />
                <MeteorsDemo />
                <MeteorsDemo />
            </div>
        </div >
    )
}

export default MeteorCards    