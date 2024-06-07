const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51P7EjESDbe3uNTpqTjDkFeELMtBUNLKMFDtDl7srRiyIeb7jzHToXGSZOvJbhFxMtUeBVIMN9skwKZfjwGlxoPl100Z3GlPIYG")
const Orders=require("../modals/orderModal")


router.post("/placeorder",async(req,res)=>{
  const {token,subtotal,currentUser,cartItems}=req.body;
  //console.log("backend",token,subtotal,currentUser,cartItems);
  try {
    const customer=await stripe.customers.create({
      email:token.email,
      source:token.id,
    })
    //console.log("backcustomer",customer);
    
  const payment=await stripe.paymentIntents.create({
    amount:subtotal*100,
    currency:"inr",
    customer:customer.id,
    receipt_email:token.email,
    payment_method: 'pm_card_visa',
    description:'online foodDelivery'
  },{
    idempotencyKey:uuidv4()
  }) 
     console.log("payment",payment);
    if (payment) {
     const neworder=new Orders({
       name:currentUser.name,
       email:currentUser.email,
       userid:currentUser._id,
       orderItems:cartItems,
       orderAmount:subtotal,
       shippingAddress:{
         street:token.card.address_line1,
         city:token.card.address_city,
         country:token.card.address_country,
         pincode:token.card.address_zip,
       },
       transactionId:payment.id
     })
     neworder.save()
      console.log("neworder",neworder);
     res.send({message:"order placed successfull",payment})
   } else {
     res.send({message:"payment failed",payment})
   }
    
  } catch (error) {
    console.log("error in order",error)
    return res.status(400).json({message:error})
  }
  
})
router.post("/getuserorders",async(req,res)=>{
  const {userid}=req.body;
  try {
    const orders=await Orders.find({userid:userid}).sort({_id:-1})
    
    //console.log("orders",orders);
    res.send(orders)
  } catch (error) {
    console.log("error in order",error)
    return res.status(400).json({message:error})
  }
})
router.get("/getallorders",async(req,res)=>{
  try {
    const orders=await Orders.find({})
    res.send(orders)
  } catch (error) {
    return res.status(400).json({message:error})
  }
})

router.post("/deliverorder",async(req,res)=>{
  const orderid=req.body.orderid;
  try {
    const orders= await Orders.findOne({_id:orderid});
    orders.isDelivered=true;
    await orders.save();
    res.send("order Delivered successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({message:error});
  }
})
module.exports=router;
// router.post("/placeorder", async (req, res) => {
//   const { token, subtotal, currentUser, cartItems } = req.body;
//   try {
//     const customer = await stripe.customers.create({
//       email: token.email,
//       source: token.id,
//     });

//     const payment = await stripe.paymentIntents.create({
//       amount: subtotal * 100,
//       currency: "inr",
//       customer: customer.id,
//       receipt_email: token.email,
//       payment_method: 'pm_card_visa',
//       description: 'online foodDelivery'
//     }, {
//       idempotencyKey: uuidv4()
//     });

//     // Check the payment status
//     if (payment.status === 'succeeded') {
//       res.send({ message: "Payment successful", payment });
//     } else if (payment.status === 'requires_action' || payment.status === 'requires_confirmation') {
//       // Handle additional authentication
//       res.send({ message: "Payment requires additional action", payment });
//     } else {
//       res.send({ message: "Payment failed", payment });
//     }
//   } catch (error) {
//     console.error("Error in order:", error);
//     return res.status(400).json({ message: "Payment processing error", error });
//   }
// });

//module.exports=router;