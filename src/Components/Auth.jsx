import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Auth({register}) {
    const isRegisterForm=register?true:false
  return (


         <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      
     <div className='w-75 container'>

      <Link to={'/'} style={{textDecoration:'none', color:'blue'}}><i className='fa-solid fa-arrow-left me-1'></i>Back to Home</Link>
      <div className='card shadow p-5 bg-success'>

        <div className='row align-items-center'>
           <div className='col-lg-6'>
                <img src='https://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png' className='rounded-start w-100'></img>
           </div>
           <div className='col-lg-6'>
                 <div className='d-flex align-items-center flex-column'>
                  <h1 style={{textDecoration:'none'}} className='fw-bolder text-light mt-2'><i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Store</h1>
                  <h5 className='fw-bolder mt-2 pb-3 text-light'>

                    {

                        isRegisterForm?"Sign up to your Account":"Sign In to your Account"
                    }
                  </h5>
                  <Form className='text-light w-100'>
                   {
                    isRegisterForm&&
                    <Form.Group className='mb-3' controlId='formBasicName'> 
                        <FormControl type='text' placeholder='Username'></FormControl>
                    </Form.Group>
                   }
                   <Form.Group className='mb-3' controlId='formBasicName'>
                        <FormControl type='email' placeholder='Enter EmailId'></FormControl>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <FormControl type='password' placeholder='Enter Password'></FormControl>
                    </Form.Group>
                    {

                        isRegisterForm?
                        <div>
                            <button className='btn btn-light'>Register</button>
                            <p>Already have Account ? Click login<Link className='btn btn-warning' to={'/login'}>Login</Link></p>
                        </div>:
                        <div>
                            <button className='btn btn-light mb-2'>Login</button>
                            <p>New User? Click here To Register<Link className='btn btn-warning'  to={'/register'}>Register</Link></p>
                        </div>
                    }

                  </Form>
                 </div>
           </div>
        </div>
      </div>
     </div>
    </div>
   
   
  )
}

export default Auth
