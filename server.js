const express  = require('express');

const app = express();
app.use(express.static(__dirname + '/client'));
// setting up environment variable
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('server is running at port ' + port);
});