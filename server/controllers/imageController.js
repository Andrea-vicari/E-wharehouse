
const Images = require('../models/imageModel');



// Get all Images: OK
const viewAllImages = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Images")

    const allImages = await Images.find({}).sort({createdAt: -1});
    res.status(200).json(allImages)

}



module.exports = {
    viewAllImages
}
