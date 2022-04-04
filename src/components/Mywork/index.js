import React from 'react'
import Loader from 'react-loaders'
import './index.scss'

function index() {
  return (
    <>
    <div className='container-work'>
        <div className="project-1">
            <img src="https://via.placeholder.com/350" alt="project-1" />
        </div>
        <div className="project-2">
        <img src="https://via.placeholder.com/350" alt="project-1" />

        </div>
        <div className="project-3">
        <img src="https://via.placeholder.com/350" alt="project-1" />

        </div>
        <div className="project-4">
        <img src="https://via.placeholder.com/350" alt="project-1" />

        </div>
        <div className="project-5">
        <img src="https://via.placeholder.com/350" alt="project-1" />

        </div>
        <div className="project-6">
        <img src="https://via.placeholder.com/350" alt="project-1" />

        </div>
        <div className="project-7">
        <img src="https://via.placeholder.com/350" alt="project-1" />

        </div>

    </div>
    
    <Loader type="pacman"/>
    </>
  )
}

export default index