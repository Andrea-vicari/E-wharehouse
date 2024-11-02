
const Images = require('../models/imageModel');



// Get all Images: OK
const viewAllImages = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Images")

    const allImages = await Images.find({}).sort({createdAt: -1});
    res.status(200).json(allImages)

}

// Delete
const deleteImmagine = async (req, res)=> {

    const { id } = req.params;

     console.log("== KINGBOY ==")
    console.log("RICHIESTA CANCELLAZIONE Immagine")



    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Nessun Immagine trovato"})
    }
    try{

    const immagine = await Images.findOneAndDelete({_id: id})

    if(!ImageBitmapRenderingContext){
        //console.log({error: error.message})
        return res.status(400).json({error: "Nessun Immagine trovato"})
      }
	console.log(immagine)
	res.status(200).json(immagine);
	}

	 catch(error){
      console.log({error: error.message})
      res.status(400).json({error: error.message})
    }


	}


module.exports = {
    viewAllImages,
    deleteImmagine
}
