const errorHanlder=async(err, req,res,next)=>{
 const {code,message}=err
    return res.status(code).json({success:false, result:message})

}

export default errorHanlder