import { useState } from "react";
import validation from "../Validation/validation";
import style from "./Form.module.css";

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
        <>
        <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
            <h2>LOGIN</h2>
            <label htmlFor="email" className={style.email}>Email:</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} className={style.textEmail}></input>
            {
                errors.email && <p>{errors.email}</p>
            }
            <hr />
            <label htmlFor="password" className={style.password}>Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} className={style.textPassword}></input>
            {
                errors.password && <p>{errors.password}</p>
            }
            <hr />
            <button className={style.button}>Submit</button>
        </form>
        </div>
        </> 
    )
}

export default Form