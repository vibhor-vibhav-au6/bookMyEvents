const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://vibhor:TKYqg0tjWBg0q6xX@cluster0-5j4d2.mongodb.net/book-my-events?retryWrites=true&w=majority" ,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true

}).then(function(){
    console.log('database connected')
}).catch(function(err){
    console.log('Error in database', err.message)
})