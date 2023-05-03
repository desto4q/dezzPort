import React from 'react'
import { IconUser } from "@tabler/icons-react"
import { links } from '../data/data'
function Hero() {

  
  return (
    <div className="hero">
      <div className="container">
        <IconUser className='userIcon'/>
        <div className="links">
        {links.map(({to,Icon},key) => {
            console.log(Icon)
            return <a href={to} key={key} target='_blank'>
              <Icon/>
            </a>
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