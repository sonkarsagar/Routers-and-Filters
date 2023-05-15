const express=require('express')
const router=express.Router()

router.get('/add-product', (req, res, next) => {
    res.status(200).send('<form action="/admin/product" method="post"><label for="product">Product</label><input type="text" name="name" id="product"><label for="size">Size</label><input type="number" name="size" id="size"><button type="submit">Submit</button></form>');
  });
  
router.post('/product', (req, res, next) => {
    console.log(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/shop');
});
  
module.exports=router