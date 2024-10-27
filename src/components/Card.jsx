import React from 'react'
import PassportAnimation from './PassportAnimation'

export default function Card() {
  return (
    <div className="px-2">
        <div className='bg-gray-50 rounded-md border-gray-300 border py-4 px-4'>
          <PassportAnimation></PassportAnimation>
          <h4 className='text-center text-2xl font-semibold pb-2'>Heading</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui dolor tempora laudantium corporis ipsam similique, minima fuga cupiditate dolores quae provident dolorum! Impedit enim, veniam velit eaque odio autem.</p>
        </div>
    </div>
  )
}
