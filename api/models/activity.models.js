module.export = (sequelize) => {
    sequelize.define("activity", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.STRING
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.STRING
        }

    })
}