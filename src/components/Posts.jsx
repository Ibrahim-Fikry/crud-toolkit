import React from 'react'

export default function Posts() {
  return (
   <>
    <div className='container'>
    <div className='form'>
      <input type="text" placeholder='pease enter post title' />
      <input type="text" placeholder='pease enter  description' />
      <button>ADD POST</button>
     </div>
        <div className='formactions'>
        <h1>post title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum pariatur doloremque perspiciatis itaque qui.</p>
        <button>Edite POST</button>
        <button>Delete POST</button>
       </div>
       
    </div>
   </>
      

  )
}
