import React from 'react'
import './About.css'
import Footer from './Footer'
import pic from '../../../src/assests/pic.jpg'



function About() {
  return (
    
    
    <div className='about-img'>
      <img src={pic} alt=''/>
      
        <h2>About</h2>
      
        <h1>Non Veg Combo:-</h1>
        <p>
          <h3>
     
          
        Chickenbriyani,
        Muttonbriyani,
        Fish Mandhi,
        Chicken65...
        </h3>
        
      
</p>      
      


      <h1>Veg Combo:-</h1>
        
        <p>
          <h3>
      Veg briyani,    
       Dal,
       Sambar,
       Curd.....
       </h3>
        
      </p>

      <h1>Fruits:-</h1>
        
        <p>
          <h3>
        Mango,
        Orange,
        Strawberry,
        Promagrante,
        blackberry....
        </h3>
      </p>

      
      
      
      
      
      
      
      
      
      <h1>Information About Resturant:-</h1>
      <p>








        <h3>Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions.[1][2]

Historical events such as invasions, trade relations, and colonialism have played a role in introducing certain foods to this country. The Columbian discovery of the New World brought a number of new vegetables and fruits to India. A number of these such as potatoes, tomatoes, chillies, peanuts, and guava have become staples in many regions of India.

</h3>






</p>
     
      <Footer/>
    </div>
  
    
    
  )
}

export default About
