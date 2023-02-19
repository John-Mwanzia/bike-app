import  express from "express";
import mongoose from "mongoose";
import cors from "cors"
import Earning from "./models/amountModel.js";
const app = express();
app.use(cors())
const router = express.Router();
app.use(router);

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/EarningDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

router.post("/amount", (req,res)=>{
    const earning = new Earning(req.body);
    console.log(earning);
    earning.save((err, earning)=>{
        if(err){
          
            res.status(500).send(err);

        }
        else{
            res.status(200).json(earning);
        }
    })
})



const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`server started on port ${port}`) );