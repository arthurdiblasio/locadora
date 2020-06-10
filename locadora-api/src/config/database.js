module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,

    }
};