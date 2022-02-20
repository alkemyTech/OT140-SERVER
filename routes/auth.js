const { generateToken } = require("../controlles/auth");
const express = require("express");
const { checkToken } = require("../middlewares/checkToken");
const router = express.Router();

router.get("/auth/login",(req,res)=>{
  const user  = req.body;
  res.json({ success: generateToken(user) })
})

router.post("/auth/login", (req, res, ) => {
  //comprobacion si el usuario existe,en la base de datos
   const user  = req.body;
  console.log(user);
  res.json({ success: generateToken(user) });
});
//example protected route
router.get('/dataExample',checkToken,(req,res)=>{
  res.json('congrats')
})


module.exports = router;
