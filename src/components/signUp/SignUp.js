import { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './SignUp.css'
import { UserContext } from "../../App";


const SignUp = () => {
    const navigate = useNavigate()

const {user, setUser} = useContext(UserContext)

const [toggleError, setToggleError] = useState(false)

    const [signedUpUser, setSignedUpUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirmpassword: "",
        telephone: "",
    })


    const userChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...signedUpUser };
        tempUser[name] = value;
        setSignedUpUser(tempUser);
        setToggleError(false)

    }

    const signUpSubmitHandler = () => {
        


        axios.post("http://localhost:8080/user/signUp", signedUpUser)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('email', signedUpUser.email)
            setUser(response.data)
            console.log(user);

            navigate('/')

        }).catch((error)=> {
            setToggleError(true)
            console.log("error: " + error)
        })
    }
    const toggleErrorFunc = () => {
        if (toggleError) {
            return <div className="error">Invalid Email already in use!</div>
        }
        return null
    }



    return(
        <div>


        <form className="row g-3">
            <h2> Sign up</h2>
            <h4> * indicates a required entry</h4>
            <div className="form-input">
                <label for="inputFirstName" className="form-label">First Name</label>
                <input name="firstName" value={user.firstName} onChange={userChangeHandler} type="text" className="form-control" id="inputFirstName" autoComplete="given-name" />
            </div>
            
            <div className="form-input">
                <label for="inputLastName" className="form-label">Last Name</label>
                <input name="lastName"  value={user.lastName} onChange={userChangeHandler} type="text" className="form-control" id="inputLastName" />
            </div>

          
            <div className="form-input">
                <label for="inputEmail4" className="form-label">Email*</label>
                <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="form-input">
                <label for="inputPassword4" className="form-label">Password*</label>
                <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="form-input">
                <label for="inputPasswordConfirm" className="form-label">Confirm Password*</label>
                <input name="passwordconfirm"  onChange={userChangeHandler} type="password" className="form-control" id="inputPasswordConfirm" />
            </div>



            <div className="d-grid gap-2 ">
                <button onClick={signUpSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Sign up</button>
            </div>
            {toggleErrorFunc()}
            <div>
                <p>Already have an account?</p> 
                <a className='header-buttons' href="/signIn">Click Here</a>
            </div>
        </form>
        </div>

    )




}
export default SignUp;