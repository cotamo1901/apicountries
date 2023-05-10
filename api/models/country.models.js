module.export = (sequelize) => {
    sequelize.define("county",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        image:{
            type:DataTypes.STRING,
        },

        continent:{

        },
        capital:{

        },
        subregion:{

        },
        area:{

        },
        population:{

        }


    }

    )}
    

   