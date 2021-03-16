import React, { useRef, useEffect } from 'react'
import ExploreData from './data/exploreData'
import GrimCry from '../static/images/GrimCry.jpg'
import {Row,Card,Col} from 'react-bootstrap'
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
          <Row className="explore-content">
              {
                ExploreData.map((item) => (
                  <Col sm={12}>
                    <Card className="explore-item" bg="dark">
                      <a href={item.link}>
                        <Card.Img src={GrimCry} as="img"/>
                      </a>
                      <Card.Body as="div">
                          <Card.Text as="p">{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              }
          </Row>
        </section>
      </>
    )
}