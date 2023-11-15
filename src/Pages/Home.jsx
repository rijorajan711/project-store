import React, { useEffect } from 'react'
import { useState } from 'react'
import {Row,Col} from "react-bootstrap"
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {

  const [logedIn,setLogedIn]=useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
         setLogedIn(true)
    }else{
      setLogedIn(false)
    }
  },[])


  return (
    <>

    {/* landing section */}
     <div style={{width:'100%',height:'100vh', backgroundColor:'#90ee90'}} className='container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
            
              <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'><i className='fa-brands fa-stack-overflow fa-bounce'></i>Project Store</h1>
              <p>vihlsfb gvfinglxfdiygruhbhfdbhdbflhbgslkd sigfoiysdfigsd sfgouabfigsdoufyg osuygfdougyseiyfgo uysdrlig zdoufgliysegrg
                ldjfuosd bgfihbzdfli hgbsdfbgflkdfh gskdjbfglisdfglhisdbgu sgsiyfg;iusdfg
                ukzgfobgh sdlfjgbzid fngl isidh gksdjhb hlivb d g igiy giagrigbs dkhlhfliiiphdb p govuge
              </p>
           
             {
              logedIn?
              <Link to={'/dashboard'} className='btn btn-warning'>Manage Your Project<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>:
              <Link to={'/login'} className='btn btn-warning'>Start to Explore<i className='fa-solid fa-right-long fa-beat ms-2'></i></Link>
             }
         
        </Col>
        <Col sm={12} md={6}>

            <img style={{marginTop:'100px'}} className='w-75' src="https://c8.alamy.com/comp/K3NHFR/presentation-of-project-management-areas-of-knowledge-such-as-cost-K3NHFR.jpg"></img>
          </Col>
         
      </Row>
      
    </div>

    {/* all product */}

    <div className='all-projects mt-5'>
      <h1 className='text-center'> Explore Our Projects</h1>
        <marquee scrollAmount={20}>
      <Row>
         
         
          <Col sm={12} md={6} lg={4}>
          <ProjectCard />
        </Col>
        
      
      </Row>
        </marquee>
        <div className='text-center mt-5'><Link to={"/projects"} > View More Projects</Link></div>
        
    </div>

    </>
   
  )
}

export default Home
