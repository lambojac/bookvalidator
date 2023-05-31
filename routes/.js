const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()

router.post("/signin", passport.authenticate("signup"),async(req,res)=>{
res.json({
    message:"signup successful",
    "user":req.user
})
})

router.post("/login", async(err, user,)=>{
if(!user){
    console.log(err)
}
if(err){
    console.log(err)
} async(req,res, user)=>{
    passport.authenticate("login",{session:false})
}
})
