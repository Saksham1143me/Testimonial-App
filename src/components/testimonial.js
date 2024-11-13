import { useState } from "react"
import Card from "./card"
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
function Testimonial({reviews}) {
    const [index,setIndex]=useState(0)
    function leftShiftHandler(){
          if(index-1<0){
            setIndex(reviews.length-1)
          }
          else{
            setIndex(index-1)
          }
    }
    function rightShiftHandler(){
        if(index+1===reviews.length){
            setIndex(0)
          }
          else{
            setIndex(index+1)
          }
    }
    function surpriseHandler(){
    let randomindex=Math.floor(Math.random()*reviews.length)
    setIndex(randomindex)
    }
    return(
        <div className="w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center items-center 
        mt-10 p-10 transition-all duration-700 hover:shadow-xl">
            <Card review={reviews[index]}></Card>
            <div className='flex justify-center items-center text-3xl mt-5 gap-3 text-violet-400 font-bold'>
            <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronLeft/></button>
            <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronRight/></button>
        </div>
        <div>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
            cursor-pointer rounded-md px-10 py-2 font-bold text-lg text-white mt-6'>Surprise Me</button>
        </div>
        </div>
    )
}
export default Testimonial