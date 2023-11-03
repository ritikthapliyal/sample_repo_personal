const express=require('express')
const AWS = require('aws-sdk')
// const cors = require('cors')
const dayjs = require('dayjs')

require('dotenv').config()

const app=express()
app.use(express.json())


AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIAQ3E6XAIHWCHTU7MJ',
    secretAccessKey: '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',
})




app.get('/', async(req,res)=>{
  
  

})



// const phone_number = '+917057145205'
// const report_timestamp = '1683372009895'


// var update_params = {
//   TableName: 'prod_copy',
// }

// let key = {}
// key.phone_number = {S : phone_number}
// key.report_timestamp = {S : report_timestamp}
// update_params.Key = key

// update_params.UpdateExpression = 'SET user_report_status = :user_report_status'
// update_params.ExpressionAttributeValues = {
//   ':user_report_status': {S:'requested'},
// }
// update_params.ReturnValues='ALL_NEW'



// console.log(update_params)


// dynamodb.updateItem(update_params,(err,data)=>{
//   if(err){ console.log(err)}
//   else{console.log(data)}
// })





app.listen(process.env.PORT,()=>{
    console.log("server started")
})