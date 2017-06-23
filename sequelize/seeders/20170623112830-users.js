'use strict';

module.exports = {

	up: function (queryInterface, Sequelize) {

		return queryInterface.bulkInsert('users', [
			{
				name: 'Raphael Monte',
				created_at: '2017-05-09',
				updated_at: '2017-05-09'
			}
		], {});

	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('users', null, {});
	}

};
