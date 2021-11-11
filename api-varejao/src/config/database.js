require('dotenv').config();

module.exports = {
	dialect: 'postgres',
	host: process.env.DB_POSTGRES_HOST,
	username: process.env.DB_POSTGRES_USERNAME,
	password: process.env.DB_POSTGRES_PASSWORD,
	database: process.env.DB_POSTGRES_DATABASE,
		define: {
			timestamps: true,    
			underscored: true,  
			underscoredAll: true,
	},
};