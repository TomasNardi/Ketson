var pool = require('./bd');
var md5 = require('md5');

async function getUsersByUsernameAndPassword(users,password) { 
    try { 
        var query = 'select * from usuarios where users = ? and password = ? limit 1';
        var rows = await pool.query (query, [users, md5 (password)]);
        return rows [0];

    } catch (error) { 
        console.log(error);
    }
}

module.exports = {getUsersByUsernameAndPassword};