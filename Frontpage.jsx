import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Ladies, Gents } from '../data'
import Mencollection from '../components/Mencollection'

const Frontpage = () => {

    
  const [womensFaction, setwomensFaction] = useState(Ladies)
  const [mensFaction, setmensFaction] = useState(Gents)
    
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections womensFaction={womensFaction}/>
        <Mencollection mensFaction={mensFaction} />
        <Footer/>
        
    </div>

      
  )
}

export default Frontpage