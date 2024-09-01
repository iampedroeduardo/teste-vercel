import { sql } from '@vercel/postgres';

async function teste(request,response){
    var { rows } = await sql `SELECT * FROM teste;`;
    response.json(rows);
}
export default teste;