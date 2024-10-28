import React from 'react'

export default function Card({ Animation, heading }) {
  return (
    <div className="px-5">
        <div className='bg-gray-50 rounded-md border-gray-300 border py-4 px-4'>
          {Animation}
          <h4 className='text-center text-2xl font-normal pb-2 font-madimi-one'>{heading}</h4>
          <p className='text-gray-700 text-[14px] px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui dolor tempora laudantium corporis ipsam similique, minima fuga cupiditate dolores quae provident dolorum! Impedit enim, veniam velit eaque odio autem.</p>
          <button className='mx-5 text-blue-900 hover:text-white transition-colors duration-700 text-sm py-2 px-3 mt-3 rounded-md font-semibold border border-blue-500 hover:bg-blue-500 '>Read More</button>
        </div>
    </div>
  )
}
