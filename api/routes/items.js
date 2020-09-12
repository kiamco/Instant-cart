import Express from 'express';
import Items from '../../models/itemSchema';

const router = Express.Router();

router.post("/items", async (req,res) => {
    const {user_id,...rest} = req.body;
    const newItem = new Items({"user_id":user_id, ...rest})

    try{
        const itemPost = await newItem.save();
        res.status(200).json({message:itemPost});
    } 
    catch(e) {
        res.status(500).json({message:e});
    };
    
});

router.get("/items", async (req,res) => {
    try{    
        const items =  await Items.find();
        res.status(200).json({data:items, message:"success"});
    } catch(e) {
        res.status(500).json({error: e});
    };
});

router.get("/items/:user_id", async (req,res) => {
    const {user_id} = req.params;

    try {
        const itemsByUser = await Items.find({user_id:user_id});
        res.status(200).json({data: itemsByUser, message:"success"});
    } catch (e) {
        res.status(500).json({err: e, message: "Server Error"});
    };
});

// router.put('/items/update/:id', async( res,req) => {
//     const {id} = req.params;
//     const newItem = req.body

// });

router.delete('/items/deleteAll', async (req,res) => {
    try {
        const del = await Items.remove();
        res.status(200).json({data: del, message: "deleted all Items"});
    } catch (e) {
        res.status(500).json({err: e, message:"Server Error"});
    };
});

router.delete('/items/delete/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const del = await Items.remove({_id: id});
        res.status(201).json({data: del, message: "success"});
    } catch (e) {
        res.status(500).json({err: e, message:"server error"});
    };
});

export default router;