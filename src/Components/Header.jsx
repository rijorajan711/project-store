import React from 'react'
import { Button, Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header({insideDashboard}) {
  return (
    <>
     <Navbar style={{backgroundColor:'#90cc90'}} className='poosition-fixed top-0 w-100%'>
      <Container>
       <Navbar.Brand>
       <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Store</Link>
       </Navbar.Brand>
        
       {


       insideDashboard && <div className='btn btn-linkms-auto text-info fw-bolder fs-5'>logOut<i className='ml- fa-solid fa-arrow-right-from-bracket fa-beat-fade'></i></div>
       } 
      </Container>
     </Navbar>
    </>
  )
}

export default Header