import React, { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';


//[1] https://www.section.io/engineering-education/registration-form-react.js-firebase/
function RegistrationForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    //[2] https://regexr.com/3e48o
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    //[3] https://www.cluemediator.com/allow-only-alphabets-in-the-input-field-in-react
    const validName = /^[A-Za-z]+$/;

    // [4] https://www.w3resource.com/javascript/form/password-validation.php
    const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("in handlesubmit function");

        if (firstName === '') {
            alert("First name required")
            return
        }
        if (!validName.test(firstName)) {
            alert("First name must contain only letters")
            return
        }

        if (lastName === '') {
            alert("Last name required")
            return
        }
        if (!validName.test(lastName)) {
            alert("Last name must contain only letters")
            return
        }
        if (email === '') {
            alert("Email id required")
            return
        }
        if (!validEmail.test(email)) {
            alert("Invalid email")
            return
        }
        if (password === '') {
            alert("Password required")
            return
        }
        //[5] https://stackoverflow.com/questions/68115335/how-to-validate-email-and-password-using-react-hooks
        if (password.length < 8) {
            alert("Password must be atleast 8 characters long");
            return
        }
        if (!validPassword.test(password)) {
            alert("Password must be aphanumeric and must contain special characters")
            return
        }
        if (confirmPassword === '') {
            alert("Confirm Password required")
            return
        }
        if (confirmPassword === password) {
            alert("Password match")
        }
        else {
            alert("Password does not match")
            return

        }
        const profileData = { firstName, lastName, email };
        navigate('/profilePage', { state: profileData });
    }

    return (
        <div>
            <div>
                <h1><b>Registration</b></h1>
            </div>
            <div className="form">

                <div className="form-body">

                    <form onSubmit={handleSubmit}>
                        <div className="firstname">
                            <label className="form__label" htmlFor="firstName"><b>FirstName</b></label>
                            <input
                                className="form__input"
                                type="text"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)} id="firstName" placeholder="First Name" />
                        </div>

                        <div className="lastname">
                            <label className="form__label" htmlFor="lastName"><b>Last Name</b> </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                className="form__input"
                                onChange={(e) => setLastName(e.target.value)} placeholder="LastName" />
                        </div>

                        <div className="email">
                            <label className="form__label" htmlFor="email"><b>Email</b> </label>
                            <input
                                type="email"
                                id="email"
                                className="form__input"
                                value={email}
                                onChange={e => setEmail(e.target.value)} placeholder="Email" />
                        </div>

                        <div className="password">
                            <label className="form__label" htmlFor="password"><b>Password</b> </label>
                            <input
                                className="form__input"
                                type="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        </div>

                        <div className="confirm-password">
                            <label className="form__label" htmlFor="confirmPassword"><b>Confirm Password</b> </label>
                            <input
                                className="form__input"
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                        </div>

                        <div className="footer">
                            <button
                                type="submit"
                                className="btn">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default RegistrationForm