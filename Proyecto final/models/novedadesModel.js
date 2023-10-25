var pool = require('./bd');

async function getNovedeades() { 
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;
    }

    async function deleteNovedeadesById(id) { 
        var query = 'delete from novedades where id = ?';
        var rows = await pool.query(query , [id]);
        return rows;
    }

    async function insertNovedad(obj) {
        try {
            var query = 'insert into novedades set ?';
            var rows = await pool.query(query , [obj])
            return rows;

        } catch (error) {
            console.log (error);
            throw error;
        }
    }

    async function getNovedeadesById(id) { 
        var query = 'select * from novedades where id = ?';
        var rows = await pool.query(query , [id]);
        return rows [0];
    }


    async function modificarNovedeadesById(obj, id) {
        try {
            var query = 'update novedades set ? where id = ?';
            var rows = await pool.query(query , [obj , id])
            return rows;

        } catch (error) {
            throw error;
        }
    }


module.exports = {getNovedeades , deleteNovedeadesById , insertNovedad,
    getNovedeadesById , modificarNovedeadesById};