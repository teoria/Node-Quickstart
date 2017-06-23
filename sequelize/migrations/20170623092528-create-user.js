'use strict';

module.exports = {

	up: function (queryInterface, Sequelize) {

		return queryInterface.createTable('users',
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
				},
				created_at: {
					type: Sequelize.DATE,
					allowNull: false
				},
				updated_at: {
					type: Sequelize.DATE,
					allowNull: false
				}
			},
			{
				typeValidation: true
			}
		);

	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('users');
	}

};