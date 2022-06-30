import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../Group 3.svg'
import mobileLogo from '../../Eyelogo.svg'

const Header = (props) => {

    

  
    const displayUserName = () => {



    }


    return(
        <header className='header flex-row'>
            <div className='third-width'>

            </div>
            <div className='third-width center logo'>
            <a href="/"><img src={logo} className='logo' alt="logo" /></a>
            </div>
            {/* <div className='third-width center logo-mobile'>
            <a href="/"><img src={mobileLogo} className='logo-mobile' alt="logo" /></a>
            </div> */}
            <div className='header third-width header-buttons' >
                {window.location.pathname === "/signUp" || window.location.pathname === "/signIn" || localStorage.getItem('email') != undefined  ? <div><a className='header-buttons' onClick={window.localStorage.clear()} href="/signIn">Log out</a></div> : 
                <div className='header-buttons'>
                <a className='header-buttons' href="/signUp">Sign Up</a>
                <a className='header-buttons' href="/signIn">Sign In</a>
                </div>
        }
            </div>
        </header>
    )
      
    
}

export default Header