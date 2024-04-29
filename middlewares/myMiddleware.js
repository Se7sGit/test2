function myMid(req,res,next){
    console.log("hello from my middleware");
    next();
}

module.exports = myMid;