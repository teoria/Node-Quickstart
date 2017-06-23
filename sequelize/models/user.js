'use strict';

module.exports = function (sequelize, DataTypes) {

    var user = sequelize.define('user',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true
            },
            profile: {
                type: DataTypes.ENUM,
                values: ['user', 'admin'],
                allowNull: false
            }
        }, {
            timestamps: true,
            underscored: true
        }
    );

    return user;

};