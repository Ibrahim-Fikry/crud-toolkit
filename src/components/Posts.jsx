import { getByTitle } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux/es/exports'
import {addposts,deletpost} from './../redux/postsSlice'

export default function Posts() {
  const [title,settitle]=useState('')
  let [decription,setdecription]=useState('')
  let dispatch = useDispatch()
  let posts= useSelector((state)=>state.posts.items)

  return ( 
   <>
    <div className='container'>
    <h1>CRUD APP USING REDUX TOOLKIT</h1>
    <div className='form'>
      <input type="text" placeholder='pease enter post title' 
            onChange={(e)=>settitle(e.target.value)}  value={title}/>
      <input type="text" placeholder='pease enter  description'onChange={(e)=>setdecription(e.target.value) }value={decription}  />
      {/* <button onClick={()=>{dispatch(addposts({id:1,title,decription}))}}>ADD POST</button> */}
      {/* both are equale */}
      <button onClick={()=>{
        dispatch(addposts({id:posts.length+1,title:title,discribtion:decription}))
        settitle('')
        setdecription('')
        }}>ADD POST</button>
      </div>
       {
       posts.length>0? posts.map((post, index)=>
       <>
       <div key={index} className='formactions'>
       <h1>{post.title}</h1>
       <p>{post.discribtion}</p>
       <button >Edite POST</button>
       <button onClick={()=>{
        dispatch(deletpost({id:post.id}))   
        // dispatch(deletpost(post.id))
       }}>Delete POST</button>
      </div>
       </>
       ):<h1>no posts yet</h1>
      }
    
       
    </div>
   </>
      

  )
}
