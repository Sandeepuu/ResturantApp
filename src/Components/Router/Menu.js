import React from 'react'
import './Menu.css'
import muttonbriyani from '../../assests/Muttonbriyani.jpg'
import fishcurry from '../../../src/assests/FishCurry.jpg'
import chickenbriyani from '../../../src/assests/Chickenbriyani.jpg'
import fishmandhi from '../../../src/assests/FishMandhi.jpg'
import vegbriyani from '../../../src/assests/Vegbriyani.jpg'
import sambar from '../../../src/assests/Sambar.jpg'
import dal from '../../../src/assests/Dal.jpg'
import burger from '../../../src/assests/Burger.jpg'
import promagrante from '../../../src/assests/Promagrante.jpg.jpg'
import blackberry from '../../../src/assests/Blackberry.jpg'
import mango from '../../../src/assests/Mango.jpg'
import orange from '../../../src/assests/Orange.jpg'


function Menu() {
  return (<>
  <h1>MENU LIST</h1>
  <h1>MENU LIST</h1>
  <h1>MENU LIST</h1>
    <div className=' cards'>

      <div className='cards-img'>
        <img src={muttonbriyani} alt=''></img>
       <h2>Muttonbriyani</h2>
       <p>$40.99</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={fishcurry} alt=''></img>
       <h2>FishCurry</h2>
       <p>$30.00</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={chickenbriyani} alt=''></img>
       <h2>Chickenbriyani</h2>
       <p>$35.65</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={fishmandhi} alt=''></img>
       <h2>FishMandhi</h2>
       <p>$25.23</p>
       <p><button>Add to cart</button></p>

      </div>
      
    </div>


     <div className='cards'>
     <div className='cards-img'>
        <img src={vegbriyani} alt=''></img>
       <h2>Vegbriyani</h2>
       <p>$10.28</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={sambar} alt=''></img>
       <h2>Sambar</h2>
       <p>$5.00</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={dal} alt=''></img>
       <h2>Dal</h2>
       <p>$5.00</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={burger} alt=''></img>
       <h2>Burger</h2>
       <p className='price'>$3.99</p>
       <p><button>Add to cart</button></p>

      </div>
      </div>





      <div className='cards'>
     <div className='cards-img'>
        <img src={promagrante} alt=''></img>
       <h2>Promagrante</h2>
       <p>$10.28</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={blackberry} alt=''></img>
       <h2>Blackberry</h2>
       <p>$5.00</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={mango} alt=''></img>
       <h2>Mango</h2>
       <p>$5.00</p>
       <p><button>Add to cart</button></p>

      </div>

      <div className='cards-img'>
        <img src={orange} alt=''></img>
       <h2>Orange</h2>
       <p className='price'>$3.99</p>
       <p><button>Add to cart</button></p>

      </div>


     </div>
     </>
  )
}

export default Menu








    


