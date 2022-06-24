import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faMicrosoft,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover');
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm a full-stack developer specializing in using HTML,CSS,JavaScript,Asp.Net MVC,Ruby,Ruby on Rails to build software solutions for small businesses.
           Also, I built a Qr menu system for restaurants and an automated system for hospitals
          </p>
          <p align="LEFT">
          I completed coursework at Microverse, a remote software development that allows devs from all over the world to pair-program and build projects together. 
          So if we take into account previous experiences, I know two sides consider what they want to and programer what they want to. Currently Searching for new Opportunities
          </p>
          <p>
          Full-Stack Software Developer with a love for React and Ruby Currently Studying in Microverse. Currently Searching for new Opportunities
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faMicrosoft} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About