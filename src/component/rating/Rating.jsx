import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const Rating = ({rating,color,size}) => {
  return (
    <div className='flex'>
        {[...Array(5)].map((_,i) => (
            <span key={i} className=' cursor-pointer'>
                {
                    rating > i ? (
                        <AiFillStar className={`text-${color?color:"black"} text-${size?size:"md"}`}/>
                    ):(
                        <AiOutlineStar  className={`text-${color?color:"black"}`}/>
                    )
                }
            </span>
        ))}
    </div>
  )
}

export default Rating