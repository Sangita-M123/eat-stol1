const express = require("express");
const router = express.Router();
const pizzaModel = require("../modals/pizzaModel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    console.log(pizzas);
    res.send(pizzas);
  } catch (error) {
    console.log(error); 
    return res.status(400).json({ message: error });
  }
});

  router.post("/addpizza", async (req, res) =>{
    const pizza=req.body.pizza
    try{
    const newpizza=new pizzaModel({
      name:pizza.name,
      image:pizza.image,
      varients:['small','medium','large'],
      description:pizza.description,
      category:pizza.category,
      prices:[pizza.prices],
    })
    await newpizza.save()
    res.send("pizza added sucessfully")
  
}catch(error){
  console.log(error,"ssxsxsxsxs");
  return res.status(400).json({ message: error });
 }
})
router.post ("/getpizzabyid",async(req,res)=>{
  console.log("hello" )
  const pizzaid=req.body.pizzaid;
  console.log(pizzaid);
  try {
    const pizzas = await pizzaModel.findOne({_id:pizzaid})
    console.log(pizzas)
    res.send (pizzas)
  } catch (error) {
    return res.status(400).json({ message: error });
  }
 })

router.post("/editpizza",async(req,res)=>{
  const editedpizza=req.body.editedpizza;
  try{
    const pizza= await pizzaModel.findOne({_id:editedpizza._id})
    pizza.name=editedpizza.name;
    pizza.image=editedpizza.image;
    pizza.category=editedpizza.category;
    pizza.description=editedpizza.description;
    pizza.prices=[editedpizza.prices];
   await pizza.save()
    res.send("pizza edited sucessfully")
  }catch(error){
    
    return res.status(400).json({ message: error });
  }
})
router.post("/deletedpizza",async(req,res)=>{
  const pizzaid=req.body.pizzaid;
  try {
    await pizzaModel.findOneAndDelete({_id:pizzaid})
    res.send("pizza deleted sucessfully")
  } catch (error) {
    return res.status(400).json({ message: error });
  }
})
module.exports = router;
