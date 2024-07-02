import React from 'react'
import caution from '../../../src/assests/caution.jpg'
import './Home.css'
import muttonbriyani from '../../../src/assests/Muttonbriyani.jpg'
import fishcurry from '../../../src/assests/FishCurry.jpg'
import chickenbriyani from '../../../src/assests/Chickenbriyani.jpg'
import vegbriyani from '../../../src/assests/Vegbriyani.jpg'
import fishmandhi from '../../../src/assests/FishMandhi.jpg'
import sambar from '../../../src/assests/Sambar.jpg'
import dal from '../../../src/assests/Dal.jpg'
import curd from '../../../src/assests/Curd.jpg'
import Footer from './Footer'

function Home() {
  return (
   
    <>
    <h1>NAVBAR</h1>
    <h1>NAVBAR</h1>

    <div className='home-img'>
    <img src={caution} alt=''/>
    </div>


    <div className=' cards'>

      <div className='cards-img'>
        <img src={muttonbriyani} alt=''></img>
       <h2>Muttonbriyani</h2>
      </div>

      <div className='cards-img'>
        <img src={fishcurry} alt=''></img>
       <h2>FishCurry</h2>
      </div>


      <div className='cards-img'>
        <img src={chickenbriyani} alt=''></img>
       <h2>Chickenbriyani</h2>
      </div>



      <div className='cards-img'>
        <img src={vegbriyani} alt=''></img>
       <h2>Vegbriyani</h2>
      </div>
      </div>



      <div className='cards'>
      <div className='cards-img'>
        <img src={fishmandhi} alt=''></img>
       <h2>FishMandhi</h2>
       </div>



      <div className='cards-img'>
        <img src={sambar} alt=''></img>
       <h2>Sambar</h2>
       
      </div>

      <div className='cards-img'>
        <img src={dal} alt=''></img>
       <h2>Dal</h2>
       
      </div>

      <div className='cards-img'>
        <img src={curd} alt=''></img>
       <h2>Curd</h2>
       

      </div>
      </div>

<Footer/>




    </>
  )
}

export default Home
