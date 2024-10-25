const alphaNum= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$^&*%&123476789"
const  generatePassword=(len)=>{
 let password=""
    for(let i=0; i<len; i++){
        password+= alphaNum[Math.floor(Math.random() * alphaNum.length)]

    }
    return password
}

 export default generatePassword