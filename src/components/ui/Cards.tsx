import React from 'react'
import { AnimatedPinDemo } from './AnimatedPinDemo'

function Cards() {
    return (
        <div className='bg-zinc-200 lg-w-[1800px] m-auto  flex mb-16 '>
            <div className='flex flex-row flex-wrap items-center justify-center mb-8 md-flex-col m-auto'>
                <AnimatedPinDemo />
                <AnimatedPinDemo />
                <AnimatedPinDemo />
                <AnimatedPinDemo />
                <AnimatedPinDemo />
                <AnimatedPinDemo />
                <AnimatedPinDemo />
            </div>
        </div >
    )
}

export default Cards    