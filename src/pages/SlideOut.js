import React, { useState, useEffect, useRef } from 'react'
import './SlideOut.scss'
import { TimelineMax } from 'gsap';

const SlideOut = () => {
  const [toggle, setToggle] = useState(false)
  const slider = useRef()
  
  const toggleSlider = () => {
    setToggle(!toggle);
  };
  
  useEffect(() => {
    slider.current = new TimelineMax({default: {ease: 'power2.inOut'}})
    .to('.activator', {
      'backgroundColor': '#805ad5',
      'borderRadius': '5em 0 0 5em'
    })
    .to('nav', {
      'clipPath': 'ellipse(100% 100% at 50% 50%)'
    })
    .to('nav img', {
      opacity: 1,
      transform: 'translateX(0)',
      stagger: .1
    })
    .reverse();
  }, [])

  useEffect(() => {
    slider.current.reversed(!toggle);
  }, [toggle]);
  
  return (
    <div className='container'>
      <header>
        <img className='activator' onClick={toggleSlider} src='https://s.svgbox.net/hero-outline.svg?ic=chevron-double-right&fill=white' width='32' height='32' alt='symbol'/>
        <nav>
          <ul>
            <li><a href='#'><img src='https://s.svgbox.net/hero-outline.svg?ic=library&fill=805ad5' width='32' height='32' alt='symbol'/></a></li>
            <li><a href='#'><img src='https://s.svgbox.net/hero-outline.svg?ic=link&fill=805ad5' width='32' height='32' alt='symbol'/></a></li>
            <li><a href='#'><img src='https://s.svgbox.net/hero-outline.svg?ic=map&fill=805ad5' width='32' height='32' alt='symbol'/></a></li>
            <li><a href='#'><img src='https://s.svgbox.net/hero-outline.svg?ic=moon&fill=805ad5' width='32' height='32' alt='symbol'/></a></li>
            <li><a href='#'><img src='https://s.svgbox.net/hero-outline.svg?ic=qrcode&fill=805ad5' width='32' height='32' alt='symbol'/></a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default SlideOut
