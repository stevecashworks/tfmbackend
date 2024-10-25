import accountsModel from "../../../models/accounts.js";

const generateUniqueId=async(collection, length)=>{
const figures=["1","2", "3", "4", "5","6", "7","8","9"]
let randomDigits=[]
while  (randomDigits.length<length){
     randomDigits.push(figures[Math.floor(Math.random()*figures.length)])
}
console.log(randomDigits.length)
let uniqueId=randomDigits.join("")
const allAccounts=await collection.find()
const accounts=allAccounts.map(acc=>acc.uniqueId)
while(accounts.includes(uniqueId)){
     randomDigits=[]
     while  (randomDigits.length<length){
          randomDigits.push(figures[Math.floor(Math.random()*figures.length)])
     }
     uniqueId=randomDigits.join("")
     console.log(`account exists, trying new account ${uniqueId}`)
    

}
return uniqueId
}
export default generateUniqueId