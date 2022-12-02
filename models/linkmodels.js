const mongoose=require('mongoose')
const { models } = require('mongoose')

const linkTemplet=new mongoose.Schema({
    link :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
                             //table name
module.exports=mongoose.model('test',linkTemplet)