import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate()

const [toggleError, setToggleError] = useState(false)

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        password: "",
        confirmpassword: "",
        telephone: "",
    })


    const userChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...user };
        tempUser[name] = value;
        setUser(tempUser);
        setToggleError(false)

    }

    const signUpSubmitHandler = () => {
        


        axios.post("http://localhost:8080/user/signUp", user)
        .then((response) => {
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

    // const passwordVerification = () => {
    //     if() {return true}

    // }

    return(
        <div>


        <form className="row g-3">
            <h2> Sign up</h2>
            <h4> * indicates a required entry</h4>
            <div className="form-input">
                <label for="inputFirstName" className="form-label">First Name</label>
                <input name="first_name" value={user.first_name} onChange={userChangeHandler} type="text" className="form-control" id="inputFirstName" autoComplete="given-name" />
            </div>
            
            <div className="form-input">
                <label for="inputLastName" className="form-label">Last Name</label>
                <input name="last_name"  value={user.last_name} onChange={userChangeHandler} type="text" className="form-control" id="inputLastName" />
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
        </form>
        </div>

    )




}
export default SignUp;