// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  (DATA)
// =============================================================
var characters = [
    {
        customerName: "yolonda",
        customerEmail: "yolonda@email.com",
        customerID: "yh879",
        customerPhone: 804-828-7754,

    },
    {
        customerName: "darla",
        customerEmail: "darla3@email.com",
        customerID: "dk1221",
        customerPhone: 252-336-4746,
    },
    {
        customerName: "andy",
        customerEmail: "amoney@email.com",
        customerID: "acash69",
        customerPhone: 555-867-5309,
    },

    {
        customerName: "ollie",
        customerEmail: "ollieoxen@email.com",
        customerID: "omg1645",
        customerPhone: 212-334-4049,
    }
    {

        customerName: "max",
        customerEmail: "maxedout@email.com",
        customerID: "mb4829",
        customerPhone: 757-756-0900,
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "view2.html"));
});
// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
