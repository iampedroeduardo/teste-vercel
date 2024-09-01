import { sql } from '@vercel/postgres';

async function teste(){
    await sql `INSERT INTO teste(teste) VALUES (10)`;
}

function teste2(){
    teste();
    return <h1>Ok</h1>
}
export default teste2;