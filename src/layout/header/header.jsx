import React from 'react'
import {Link} from 'react-router-dom'
import ImageSlider from './slider/ImageSlider'
import { images } from '../../consts'
import './header.css'

const Header = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className='sliderWrap'>
            <ImageSlider images={images} />
            </div>
            
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="nav-link active" to={'/'}>Start React</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={'/movies'}>Page 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={'/page2'}>Page 2</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>

    )
}

export default Header