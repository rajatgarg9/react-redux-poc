var express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser'),
_ = require('lodash'),
cors = require('cors');

//app.use(express.static(path.join(__dirname,'src')));
app.use(cors());
app.use(express.static(path.join(__dirname,'public','data')));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
extended: false
}));
app.use(bodyParser.text());


app.get('/data', function (req, res) {
    if(req.query.file === "product"){
        res.setHeader("Content-Type", "text/json");
        res.sendFile(path.join(__dirname, 'public','data','product_list.json'));
    }else if(req.query.file === "global_var"){
        res.setHeader("Content-Type", "text/json");
        res.sendFile(path.join(__dirname, 'public','data','global_variables.json'));
    }
    
});

  


var server = app.listen(3001);
console.log(`running`);
