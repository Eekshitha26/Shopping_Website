import React from 'react'

const Header = () => {
  return (
    <div className='Heaader_section'>
       <div className='Left'>
          <div className='title'>
            <h2>shopping Mall</h2>
          </div>
       </div>
       <div className='center'>
         <ul>
           <li>Women</li>
           <li>Men</li>
           <li>Children</li>
           <li>Beauty</li>
         </ul>
        </div>
        <div className="search">
          <input type="text" placeholder='Search....'/>
        </div>
       
       <div className='right'>
          <div className="signin">SignIN / singUP</div>
          <div className="card">Card</div>
        </div> 
    </div>
  )
}

export default Header