import React from 'react'
import './css/header.css'
import userimg from '../assets/images/img.png'


const Home = () => {
  return (
    <div>
      <div className='userimg'>
        <div className='uimg'>
          <img src={userimg} alt='userimg' className='img-fluid' />
        </div>
      </div>
      <div className='title'>
      <div className='slogun'>
      <h2>Play the <br/><span className='df'>family happiness</span><br/><span className='df1'>score</span></h2>
      </div>
      </div>
    </div>
  )
}

export default Home
