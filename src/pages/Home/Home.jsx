import React from 'react'
import Box from '../../components/Box/Box'
import data from '../../components/card/Card.jsx'



function Home() {
  return (
    <>

      <Box array={data} />


 {/* <div className="Appm">
      <h1>Project Management</h1>
      <div className="container">
        <Box title="UI/UX Designers" />
        <Box title="Frontend" />
        <Box title="Backend" />
      </div>
  </div>    */}
    
    
     </>
  )
}

export default Home;