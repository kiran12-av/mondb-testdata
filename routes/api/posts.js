const express = require('express')
const router = express.Router();
const router2= express.Router();
const Posts= require('../../models/Posts')
const app = express();
app.use(express.json());


//routes GET api/posts
//desc GET an post

router2.get('/', async (req,res)=>{

    try{
       const posts= await Posts.find();
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);

    }catch(err){
          res.status(400).json({msg:err})
    }
})



// routes GET api/posts - specific post 
// desc GET an post - specific 

// router2.get('/:id', async (req,res)=>{

//     try{
//        const posts= await Posts.findById(req.params.id);
//        if(!posts) throw Error ('No items')
//        res.status(200).json(posts);
//        res.send("helloworld get")

//     }catch(err){
//           res.status(400).json({msg:err})
//     }
// })

//for finding the tickets by status
router2.get('/DIA-TEST1', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({cuid:'VINUTHA',Environment:'TEST2'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})


router2.get('/test', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({cuid:'koti'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})



// for finding the tickets by status
router.get('/:Environment', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Environment:'TEST1'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})


// FETCHING OF ELINE EVC 
router2.get('/EVC-1', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'Eline-EVC',Environment:'TEST1'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})

router2.get('/EVC-2', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'Eline-EVC',Environment:'TEST2'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})



router2.get('/EVC-3', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'Eline-EVC',Environment:'TEST3'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})


// FETCHING OF DIA Order from DB 

router2.get('/DIA-1', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'DIA',Environment:'TEST1'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})

router2.get('/DIA-2', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'DIA',Environment:'TEST2'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})



router2.get('/DIA-3', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'DIA',Environment:'TEST3'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})


router2.get('/EACCESS-1', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'EACCESS',Environment:'TEST1'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})




router2.get('/EACCESS-2', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'EACCESS',Environment:'TEST2'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})


router2.get('/EACCESS-3', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'EACCESS',Environment:'TEST3'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})




router2.get('/Monarch-Eline-1', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'Monarch-Eline',Environment:'TEST1'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})

router2.get('/Monarch-Eline-2', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'Monarch-Eline',Environment:'TEST2'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})


router2.get('/Monarch-Eline-3', async (req,res)=>{

    try{
    // const posts= await Posts.find(req.params.Environment);
      const posts= await Posts.find({Data_Type:'Monarch-Eline',Environment:'TEST3'},{});
       if(!posts) throw Error ('No items')
       res.status(200).json(posts);
       res.send("helloworld get")

    }catch(err){
          res.status(400).json({msg:err})
    }
})










// routes post api/posts
// desc create an post
router2.post('/', async (req,res)=>{
  const newPost = new Posts(req.body);

  try{
      const post = await newPost.save()
      if(!post) throw Error('something went wrong while saving the post')
      res.status(200).json(post)
      res.send("helloworld post")
 
      
  }catch{
          res.status(400).json({msg:err})
  }

})



// routes Delete api/posts
// desc Delete an post

router2.delete('/:id', async (req,res)=>{

    try{
       const posts= await Posts.findByIdAndDelete(req.params.id)
       if(!posts) throw Error ('No posts found')
       res.status(200).json({success:true});
       res.send("helloworld delete")

    }catch(err){
          res.status(400).json({msg:err})
    }
})



// routes Update api/posts
// desc Update an post

router2.patch('/:id', async (req,res)=>{

    try{
       const posts= await Posts.findByIdAndUpdate(req.params.id, req.body)
       if(!posts) throw Error ('Something went wrong while updating the posts')
       res.status(200).json({success:true});
       res.send("helloworld patch")

    }catch(err){
          res.status(400).json({msg:err})
    }
})




module.exports= router;
module.exports= router2;