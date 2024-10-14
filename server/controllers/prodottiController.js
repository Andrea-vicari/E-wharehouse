const Prodotti = require('../models/prodottiModel');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, '/public/images')
    },
    filename(req, file, cb) {
      cb(null, file.fieldname + " - " + Date.now() + path.extname(file.originalname))
    }
  })

const upload = multer({ storage });


// Get all Prodotti: OK
const viewAllProdotti = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Prodotti")

    const allProdotti = await Prodotti.find({}).sort({createdAt: -1});
    res.status(200).json(allProdotti)

}


// Create a NEW Prodotti:
const createNewProdotti = async (req, res)=> {


    const {nome, categoria, tipologia, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, annoImmatricolazione, immagine} = req.body


    // Add doc to the Mongo DB

    try{
        const prodotti = await Prodotti.create({nome, categoria, tipologia, descrizione, codice, condizione, peso, scaffale, campata, ripiano, cassetta, marca, modello, versione, annoImmatricolazione, immagine})
        res.status(200).json(Prodotti)
    }

    catch(error){
        console.log({error: error.message})
        res.status(400).json({error: error.message})
    }

}

const aggiungiImmagine = async (req, res)=> {

    const { id } = req.params;
    console.log(id)
    
}


// Delete
const deleteProdotto = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Nessun prodotto trovato"})
    }

    const prodotti = await Prodotti.findOneAndDelete({_id: id})

    if(!prodotti){
        console.log({error: error.message})
        return res.status(400).json({error: "Nessun prodotto trovato"})
      }
      res.status(200).json(Prodotti);
}



module.exports = {
    createNewProdotti,
    viewAllProdotti,
    deleteProdotto,
    aggiungiImmagine
}