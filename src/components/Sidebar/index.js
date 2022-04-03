import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logoMy.svg';
//import LogoSubtitle from '../../assets/images/logo_sub.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faMailchimp,
} from '@fortawesome/free-brands-svg-icons'

const Siderbar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoS} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/atilla-taha-kördüğüm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/AtillaTahak/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UCmoD0x4Z9vdG2PCsI5p8FYg"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a href="email:atillatahaa@gmail.com" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faMailchimp} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Siderbar;