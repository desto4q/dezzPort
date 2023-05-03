import React from 'react'
import { IconUser } from "@tabler/icons-react"
function Hero() {

  
  return (
    <div className="hero">
      <div className="container">
        <IconUser/>
        <div className="links">
          {Array(1,2,3,4,5,6,7,10).map(()=>{
            console.log("ss")
            return(
              <div className="dummy"></div>
            )
          })}
        </div>
        <h1>Destiny Osuoha</h1>
        <h3>Im a Frontend Developer</h3>
        <button className='do_something'>
            Hire me
        </button>
      </div>

      <a href="" className="scroll_down">
        Scroll down
      </a>
    </div>
  )
}

export default Hero