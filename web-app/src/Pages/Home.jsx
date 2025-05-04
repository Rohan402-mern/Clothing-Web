import React from 'react'
import Intro from '../Components/Intro/Intro'
import Signature from '../Components/Intro/Signature'
import Spring from '../Components/Intro/Spring'
const Home = () => {
  return (
    <div style={{position:'relative',top:'157px'}}>
      <Intro/>
      <Signature/>
      <Spring/>
    </div>
  )
}

export default Home
