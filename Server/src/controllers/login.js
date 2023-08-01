const users = require("../utils/users")

const login = (req, res) => {
    const {email, password} =req.query //Se extraen los valores de email y password de los parametros del consulta. Estos son los proporcianodos por el usuario para iniciar sesion

    const userFound = users.find((user) => user.email === email && user.password === password) //Se utiliza el metodo find para buscar un usuario que coincida con el correo y la contraseña. Si se encuentra un usario valido, se asigna a la variable user found, de lo contrario retorna undefined

    userFound //ternario. Si existe useFound entonces:
    ? res.status(200).json({ access: true}) // retorna una respuesta correcta con el access true 
    : res.status(200).json({ access: false}) // de lo contrario devuelve una respuesta false
}

//este código realiza la autenticación de un usuario comparando el correo electrónico y la contraseña proporcionados con una lista de usuarios registrados. Si se encuentra una coincidencia, se otorga acceso; de lo contrario, se deniega el acceso.

module.exports = {login};