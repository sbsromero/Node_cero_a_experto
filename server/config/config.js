// ====
// Puerto
// ====
process.env.PORT = process.env.PORT || 3000;

//=====
// Entorno
//=====
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====
// Vencimiento del token
//=====
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=====
// SEED de autenticación
//=====
process.env.SEED = process.env.SEED || 'secret-dllo';

//=====
// BD
//=====
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//=====
// Google Client ID
//=====
process.env.CLIENT_ID = process.env.CLIENT_ID || '981706284664-ancfll7rcr67sa9m0l96ortg910t93sh.apps.googleusercontent.com';