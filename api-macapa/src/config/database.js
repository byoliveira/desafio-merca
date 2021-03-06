require('dotenv').config();

module.exports = {
	dialect: 'mysql',
	host: process.env.DB_MYSQL_HOST,
	username: process.env.DB_MYSQL_USERNAME,
	password: process.env.DB_MYSQL_PASSWORD,
	database: process.env.DB_MYSQL_DATABASE,
		define: {
			timestamps: true,    
			underscored: true,  
			underscoredAll: true,
	},
};

