import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-100 ml-2 px-4 py-2 rounded-lg font-semibold flex-shrink-0'>{name}</button>
    </div>
  )
}

export default Button