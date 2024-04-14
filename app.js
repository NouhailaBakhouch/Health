// Importation du module Express.js
const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user')

const User = require('./models/user');
const app = express();

// app.use((req, res, next) =>{
//     req.on('data', (chunk) => {
//         const data = JSON.parse(chunk)
//         req.body = data;
//         next();

//     });
  
// });
app.use(express.json());

app.use(userRouter);

// const test = async (email, password) => {
//     const user = await User.findOne({email: email});
//    const result = await user.comparePassword(password)
//    console.log(result);
// };
// test('niraj7@email.com', 'nir13');

app.get('/test', (req, res) => {
    res.send('Hello World')
})

app.get('/', (req, res) => {
    res.send('<h1 style="color: red;"> Hello world </h1>');

})

// Démarrage du serveur HTTP sur le port 8000
app.listen(8000, () => {
    // Affichage d'un message dans la console une fois que le serveur est démarré
    console.log('port is listening');
});

//mongodb+srv://fsUser:User123@fstodo.iwtp5oz.mongodb.net/?retryWrites=true&w=majority&appName=fstodo