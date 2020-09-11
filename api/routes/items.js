import Express from 'express';
import Items from '../../models/itemSchema';

const router = Express.Router();

router.post("/items", async (req,res) => {
    const {user_id,...rest} = req.body;
    const newItem = new Items({"user_id":user_id, ...rest})

    console.log(newItem)

    try{
        const itemPost = await newItem.save();
        res.status(200).json({message:itemPost});
    } 
    catch(e) {
        res.status(500).json({message:e});
    };
    
});

router.get("/item")

export default router;