module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estatura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  });  

  Users.associate = (models) =>{
    Users.hasMany(models.Likes,{
        onDelete: "cascade", 
    });
    Users.hasMany(models.Posts,{
      onDelete: "cascade", 
  });
 
  Users.hasMany(models.Cuestionarios,{
  onDelete: "cascade", 
  });
  }


  return Users;
};
