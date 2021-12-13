module.exports = (sequelize, DataTypes) => {
    const Cuestionarios = sequelize.define("Cuestionarios", {
      p1: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p2: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p3: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p4: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p5: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p6: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p7: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p8: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p9: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      p10: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });  
    return Cuestionarios;
  };