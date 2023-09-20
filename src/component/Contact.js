import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='m-5 p-5 font-bold '>Contact Us</h1>
      <form className='m-2 p-2'>
        <input type="text" placeholder="name" className='border border-black'/>
        <input type="text" placeholder="message" className='border border-black m-3'/>
        <button className='bg-slate-100 rounded-md m-2 p-2'>Submit</button>
      </form>
    </div>
  )
}

export default Contact