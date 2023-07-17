import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}></input>
            {
                errors.email && <p>{errors.email}</p>
            }
            <hr />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}></input>
            {
                errors.password && <p>{errors.password}</p>
            }
            <hr />
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form