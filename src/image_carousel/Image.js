import {useState} from 'react'


import "./styles.css"

const images=[
    "https://images.pexels.com/photos/54539/pexels-photo-54539.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/983988/pexels-photo-983988.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/655837/pexels-photo-655837.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/161097/allgau-eisenberg-ostallgau-bavaria-161097.jpeg?auto=compress&cs=tinysrgb&w=600"
]
function Image() {

    const [current,setCurrent]=useState(0)
    
    let increment=()=>{
        setCurrent((current===images.length-1)?0:current+1)
    }

    let decrement=()=>{
        setCurrent((current===0)?images.length-1:current-1)
    }

  return (

    <div className='Main'>
       <h1 className='heading'>Image Carousel</h1>
       <h3 className='count'>{current+1}/{images.length}</h3>
        <div className='image_carousel'>

            <div className='left-arrow' onClick={decrement}>

            ⬅
            </div>
            
            
            
            {
                images.map((curr,index)=>
                    current===index && (
                        <div key={curr} className="traverse">
                            <img src={curr} alt="images"/>
                        </div>
                    )
                    
                )
            }
            <div className='right-arrow' onClick={increment}>
                ⮕
            </div>
        </div>
    </div>
  )
}

export default Image