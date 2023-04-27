var express = require("express");
var app = express();
var cors = require('cors');
app.use(cors());
var port = process.eventNames.PORT || 3000

app.get("/", (req, res) => {
    res.json({message: 'Requisição realizada com sucesso!'})
});

app.get("/download", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./receita.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("Sucess");
        }    
      });
});

app.listen(port, () => {
    console.log("Servidor rodando ...");
});
