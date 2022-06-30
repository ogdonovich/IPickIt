import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../Group 3.svg'
import mobileLogo from '../../Eyelogo.svg'
import { useContext } from 'react'
import { UserContext } from '../../App'
import { Button } from '@mui/material'

const Header = (props) => {

    const {user, setUser} = useContext(UserContext)

  const style = {
    p: 'flex',
    //  top: '50%',
    //  left: '50%',
    // transform: 'translate(-50%, -50%)',
    color: '#fff',
    width: 'auto',
    height: 'flex',
    bgcolor: '#009688',
    border: '3px solid #512DA8 ',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize:'15px',
    fontFamily: 'inherited'
    
    



    
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
                {window.localStorage.getItem('email') ? 
                <div><Button className='header-buttons' onClick={() => window.localStorage.removeItem('email')} sx={style} href="/signIn">Log out</Button></div> 
                : 
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