const mongoose=require('mongoose')
const { models } = require('mongoose')

const linkTemplet=new mongoose.Schema({
    fullName :{
        type:String,
        require:true
    },
    enrollmentNo :{
        type:String,
        require:true
    },
    link :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('myTable',linkTemplet)