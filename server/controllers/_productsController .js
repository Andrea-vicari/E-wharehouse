const Products = require('../models/ProductModel');
const mongoose = require('mongoose');

// Get all Products: OK
const viewAllProducts = async (req, res)=> {

    console.log("Req from /")
    console.log("View all Products")

    const allProducts = await Products.find({}).sort({createdAt: -1});
    res.status(200).json(allProducts)

}

// Get a specific Product
const getSingleProduct = async (req, res)=> {
    console.log("======")
    console.log("Req from /id")
    console.log("View single Products")

    const { id } = req.params;

    const Product = await Products.find({"user":id});
   // const Product = await Products.findById(id);

    if(!Product){
      return res.status(400).json({error: "No Product found"})
    }
    res.status(200).json(Product);
}

// Get a CLOSED Product
const getClosedProduct = async (req, res)=> {
    console.log("***********")
    console.log("Req from /closed")

    const Product = await Products.find({"status":"CHIUSO"});
    // const Product = await Products.findById(id);

     if(!Product){
       return res.status(400).json({error: "No Product found"})
     }
     res.status(200).json(Product);
}

// Confirm a Product
const confirmProduct = async (req, res)=> {

    const {registered} = req.body

    const { id } = req.params;


    const Product = await Products.findOneAndUpdate({"_id":id},{
        $push: {
            registered: req.body,
          },
    })

    if(!Product){
        return res.status(400).json({error: "No Product found"})
    }
    res.status(200).json(Product);

}

// Update a Product
const updateProduct = async (req, res)=> {

    const {status, dataChiusura} = req.body

    const { id } = req.params;


    const Product = await Products.findOneAndUpdate({"_id":id},{
        ...req.body
    })

    if(!Product){
        return res.status(400).json({error: "No Product found"})
    }
    res.status(200).json(Product);

}


// Create a NEW Product:
const createNewProduct = async (req, res)=> {


    const {today, user, title, series, reps, rest, loads, status} = req.body


    // Add doc to the Mongo DB

    try{
        const Product = await Products.create({today, user, title, series, reps, rest, loads, status})
        res.status(200).json(Product)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Delete a Product
const deleteProduct = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Product found"})
    }

    const Product = await Products.findOneAndDelete({_id: id})

    if(!Product){
        return res.status(400).json({error: "No Product found"})
      }
      res.status(200).json(Product);
}

module.exports = {
    createNewProduct,
    viewAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    confirmProduct,
    getClosedProduct
}