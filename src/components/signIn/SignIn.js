import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './SignIn.css'

const SignIn = () => {
    const navigate = useNavigate()

    const [toggleError, setToggleError] = useState(false)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const userChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser)
    }

    const signInSubmitHandler = () => {

        console.log(user);

        axios.post("http://localhost:8080/user/signIn", user)
            .then((response) => {
                console.log(response);
                const loggedInUser = response.data
                console.log(loggedInUser);
                if (loggedInUser != "") {

                    localStorage.setItem('email', loggedInUser.email)
                    navigate('/')
                }else{
                    setToggleError(true)
                navigate('/signIn')
                }

            }).catch((error) => {
                setToggleError(true)
                console.log("error: " + error)
            })
    }
    const toggleErrorFunc = () => {
        if (toggleError) {
            return <div>Invalid Invalid</div>
        }
        return null
    }

    return (
        <form className="row g-3">
            <h2> Sign in below!!</h2>


            <div className="form-input">
                <label for="inputEmail4" className="form-label">Email</label>
                <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="form-input">
                <label for="inputPassword4" className="form-label">Password</label>
                <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="d-grid gap-2 ">
                <button onClick={signInSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Sign In</button>
            </div>
            {toggleErrorFunc()}
            <div>
                <p>Need an account?</p>
                <a className='header-buttons' href="/signUp">Click Here</a>
            </div>
        </form>

    )




}
export default SignIn;