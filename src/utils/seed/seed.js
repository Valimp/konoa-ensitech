const mongoose = require('mongoose');
const Book = require('../../models/book');  // Importer le modèle Book
const books = require('./book');  // Importer les données de test pour les livres

// Connexion à MongoDB
const mongoURI = 'mongodb://localhost:27017/ninja_library'; // Remplacez par l'URI de votre base de données

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('Connexion à MongoDB réussie');

    // Supprimer toutes les données existantes dans la collection Book (facultatif)
    await Book.deleteMany({});
    console.log('Tous les livres existants ont été supprimés');

    // Insérer les données de test
    await Book.insertMany(books);
    console.log('Données de test insérées dans la collection Book');

    // Fermer la connexion après insertion
    mongoose.connection.close();
    console.log('Connexion à MongoDB fermée');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });
