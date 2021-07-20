const requireUser=(req,res,next)=> {
    console.log("middle ware");
    next()
};

module.exports = requireUser;