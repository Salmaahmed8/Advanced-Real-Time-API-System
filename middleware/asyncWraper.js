module.exports = (asyncFn) => {
    return (req,res,next) => {
        fn(req,res,next).catch((err) => {
            next("error");
        });
    }
}