const express = require('express');
const multer = require('multer');
const path = require('path');


const {createNewProdotti, viewAllProdotti, deleteProdotto, aggiungiImmagine} = require('../controllers/prodottiController');


const router = express.Router();


const storage = multer.diskStorage({

    destination: function(req, file, cb){

        return cb(null, "./public/images")

    },
    filename: function(req, file, cb){
        return cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const uploadImage = multer({
    storage:storage
})


// Get
router.get('/', viewAllProdotti);

// Delete
router.delete('/:id', deleteProdotto);


// Post
router.post('/', createNewProdotti);

router.post('/', aggiungiImmagine);


//router.get('/closed/closedWorks', getClosedWorkout);

router.post('/:id', uploadImage.single('file'), async (req, res)=>{

    /*
    if(req.file === undefined){
      return res.status(400).json({error: "Ehiii!! Upload an image please"})
    }
    */

    const { id } = req.params;
    console.log("OIBO'!!!")
    // console.log(req.file.filename)
    console.log(id)



    const user = await Prodotti.findByIdAndUpdate(id,{image:req.file.filename})
    // const user = await Users.create(id,{image:req.file.filename})

    if(!user){
        return res.status(400).json({error: "No WorkOut found"})
    }
    res.status(200).json(user);


})


module.exports = router;