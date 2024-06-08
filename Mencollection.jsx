import React from 'react'

const Mencollection = (probs) => {
    const {title, image1, image2, image3, image4, image5 ,image6,} = probs.mensFaction
  return (
    <div className='collection'>
                 
                 <div className="bannerbox">
                    <img src="asets/men.gif" alt="Img" />
                 </div>
                 <h2>{title}</h2>
      <div className="mainimages">
        <img src={image1} alt="Img" />
        <img src={image2} alt="Img" />
        <img src={image3} alt="Img" />
        <img src={image4} alt="Img" />
        <img src={image5} alt="Img" />
        <img src={image6} alt="Img" />
      </div>
    </div>
  )
}

export default Mencollection