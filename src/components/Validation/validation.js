const validation = (userData) => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/)
    const passwordRegex = new RegExp(/.*\d+.*/)
    let errors = {}

    if(!emailRegex.test(userData.email)){
        errors.email = "Debes ingresar un email válido"
    } 
    if(!userData.email) {
        errors.email= "Debe ingresar un email"
    }
    if(userData.email.length > 35) {
        errors.email = "No debes pasarte de 35 caracteres"
    }

    if(!passwordRegex.test(userData.password)){
        errors.password = "La contraseña debe contener al menos un numero"
    }
    if(userData.password.length < 6 && userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors
}

export default validation