module.exports = app => {
    const Users = require("../controllers/Users.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/User/create", (req,res)=>{Users.create});
  
    // Retrieve all Tutorials
    router.get("/Users", (req,res)=>{
    Users.findAll(req,res);
    });
  
    // Retrieve all published Tutorials
    //router.get("/published", Users.findAllPublished);
  
    // Retrieve a single Tutorial with id
    //router.get("/:id", Users.findOne);
  
    // Update a Tutorial with id
   // router.put("/:id", Users.update);
  
    // Delete a Tutorial with id
   // router.delete("/:id", Users.delete);
  
    // Delete all Tutorials
   // router.delete("/", Users.deleteAll);
  
    app.use('/api/User', router);
      //default router 
  /// default handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
  };

