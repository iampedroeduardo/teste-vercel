import { sql } from '@vercel/postgres';

async function teste(request,response){
    var { rows } = await sql `SELECT * FROM teste;`;
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.json(rows);
}
export default teste;