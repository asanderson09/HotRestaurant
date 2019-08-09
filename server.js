const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

let tablesarr = [
    {
        table: 'table'
    }
];

app.get("/api/tables", function(req, res) {
    res.json(tablesarr);
})

app.listen(PORT, function() {
    console.log("server listen on port "+ PORT);
})

