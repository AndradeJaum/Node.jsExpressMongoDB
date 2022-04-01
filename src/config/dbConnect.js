import mongoose from "mongoose";

mongoose.connect("mongodb+srv://AndradeJaum:JnRb9JbackDev21@projetoalura.gnzvg.mongodb.net/Projeto-Alura");

let db = mongoose.connection;

export default db;