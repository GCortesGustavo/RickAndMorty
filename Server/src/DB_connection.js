require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require("./models/UserModel");
const FavoriteModel = require("./models/FavoriteModel");


// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize);
//
FavoriteModel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models; //Vienen de miconexion de tablas que yo ya cree.


User.belongsToMany(Favorite,{through: "user_favorite"}) //Un usuario puede tener muchos favoritos a traves(through) de la tabla intermediara user_favorite
Favorite.belongsToMany(User, {through: "user_favorite"})


module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
