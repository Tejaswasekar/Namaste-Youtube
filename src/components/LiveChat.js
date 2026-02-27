import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='ml-4 w-full h-[600px] p-4 border border-black rounded-lg bg-slate-100'>
        <ChatMessage name="Tejas" message="Hello everyone!" />
    </div>
  )
}

export default LiveChat