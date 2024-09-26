const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const jutsuScrollsRoutes = require("./routes/jutsuScrolls");
const ninjasRoutes = require("./routes/ninjas");
const empruntsRoutes = require("./routes/emprunts");
const borrow = require("./routes/borrow");
const log = require("./middlewares/log");

// Import Swagger configuration
const { swaggerUi, swaggerDocs } = require('./config/swaggerConfig');

const PORT = process.env.PORT || 3000;
// TODO: Fix env
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ninja_library";

const app = express();
app.use(express.json());

// Swagger Documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Connexion à MongoDB réussie');
})
.catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/jutsu-scrolls", log, jutsuScrollsRoutes);
app.use("/ninjas", log, ninjasRoutes);
app.use("/emprunts", log, empruntsRoutes);
app.use("/borrow", log, borrow);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
