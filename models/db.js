const mongoose = require('mongoose');
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connexion à la base de données MongoDB réussie');
})
.catch(err => {
    console.error('Échec de la connexion à la base de données MongoDB:', err.message);
});
