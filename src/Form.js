import React from 'react'

function Form() {
  return (
    <div className='Form'>
      <div className="full">
        <input type="text" placeholder='First Name:' className="half" />
        <input type="text" placeholder='Last Name:' className="half" />
      </div>
      <input type="text" placeholder='Email:' className="full" />
      <textarea name="" id="" rows={10} placeholder='Messsage' className="full"></textarea>
      <button className="dark">Send Message</button>
    </div>
  )
}

export default Form;