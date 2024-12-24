import express from "express";
import bodyParser from "body-parser";
import { totalGaji } from "./logic.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs', {title: 'Masukan jumlah jam kerja dan tarif per jam!'});
});

app.post("/submit", (req, res) => {
    const jamKerja = req.body['jamKerja'];
    const tarif = req.body['tarif'];
    const gaji = totalGaji(jamKerja, tarif);
  res.render('index.ejs', {title: `total gaji anda : ${gaji}`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
