const express = require('express');
const pg = require('pg');

const app = express();
const port = process.env.PORT ||  5000;

//Database connection
const pool = new Pool({
    user : process.env.DB_USER || "postgres",
    host : process.env.DB_HOST || "database",
    database : process.env.DB_NAME || "postgres",
    password : process.env.DB_PASSW || "password",
    port : process.env.DB_PORT || 5432
})

app.get('/', (req, res) => {
    res.send('Hello World from Express Backend !')
})

app.get("/db", async (req, res) => {
    try{
    const result = await pool.query("SELECT NOW()");
    res.json({time : result.rows[0]})
    }catch(err){
        res.status
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})