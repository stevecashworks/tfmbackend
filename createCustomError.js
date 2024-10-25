const createCustomError=(message="An error occured ", code=500)=>{
    return {code,message}
}
export default createCustomError