import React, { useRef, useEffect } from 'react'
import ExploreData from './data/exploreData'
import GrimCry from '../static/images/GrimCry.jpg'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import '../styles/Explore.css'

export default function Explore() {

  const explore = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
      gsap.fromTo(".explore-head",{
          autoAlpha: 0
        }, {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
              trigger: explore.current,
              start: '-900vh',
              toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(".explore-content",{
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
            trigger: explore.current,
            start: '-800vh',
            toggleActions: 'play none none reverse'
        }
      }
    )
    })

    return (
      <>
        <section id="explore" className="explore-container" ref={explore}>
          <div className="explore-head">
                <h2>Our Work</h2>
          </div>
          <div class="container">
          <div class="row explore-content">
              {
                ExploreData.map((item) => (
                  <>
                  <div class = "col-md-4 ">
                    <div className="explore-item" bg="dark">
                      <a href={item.link} class="nostyle" target = "_blank" rel="noreferrer">
                        <img src={GrimCry} className="img-fluid" alt="GrimCry"/>
                      </a>
                    </div>                    
                  </div>
                  <div class = "col-md-8 explore-item explore-item-text">
                    <a href={item.link} class="nostyle" target = "_blank" rel="noreferrer"> <p>{item.description}</p> </a>
                  </div>
                  </>
                ))
              }
          </div>
          </div>
          
        </section>
      </>
    )
}