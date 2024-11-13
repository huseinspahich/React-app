import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/notes", async(req,res) => {
    try {
        const result = await db.query("SELECT * FROM biljeske");
        res.json(result.rows);
    }  catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).send('Greška pri učitavanju bilješki');
   } 
});

app.post('/add-note', async (req, res) => {
    const { naslov, sadrzaj } = req.body;
    if (!naslov || !sadrzaj) {
      return res.status(400).send('Naslov i sadržaj su obavezni');
    }
    try {
      const result = await db.query('INSERT INTO biljeske (naslov, sadrzaj) VALUES ($1, $2)', [naslov, sadrzaj]);
      res.status(201).send('Bilješka dodana');
    } catch (err) {
      console.error(err);
      res.status(500).send('Greška pri dodavanju bilješke');
    }
  });

  app.delete('/delete-note/:id', async (req, res) => {
    const { id } = req.params;  
    try {
      const result = await db.query('DELETE FROM biljeske WHERE id = $1', [id]);
      if (result.rowCount > 0) {
        res.status(200).send('Bilješka obrisana');
    } else {
        res.status(404).send('Bilješka nije pronađena');
    }
    } catch (err) {
      console.error(err);
      res.status(500).send('Greška pri brisanju bilješke');
    }
  });

app.listen(port, ()=> {
    console.log(`Listenening at port ${port}`)
});