'use strict';

module.exports = function (sequelize, DataTypes) {

    var user = sequelize.define('user',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull: true
            },
            profile: {
                type: Sequelize.ENUM,
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