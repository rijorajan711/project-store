import React from 'react'
import { Collapse } from 'react-bootstrap'
import { useState } from 'react'
function Profile() {
     const [open,setOpen]=useState(false)
  return (
     <div className='mt-5'>
      <div className='d-flex border rounded p-3 justify-content-between'>
        <h2>Profile</h2>
        <button onClick={()=>setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
      </div>
    <Collapse in={open}>
    
     <div className='row justify-content-center mt-3'>
     <label className='text-center' >
       <input style={{display:"none"}}  type='file' ></input>
       <img  width={'200px'} height={'200px'} className='rounded-circle' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'></img>
     </label>
     <div className='mt-3'> 
    <input type='text' className='form-control' placeholder='Github Link'></input>
     </div>
     <div className='mt-3'> 
    <input type='text' className='form-control' placeholder='LinkedIn Link'></input>
     </div>
     <div>

     </div>
    </div>
    </Collapse>
   

    </div>
    
  )
}

export default Profile
