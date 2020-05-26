const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const creatures = {
    0: {
        id: 0,
        name: "Laura Tumba",
        pv: 666
    },
};

app.post("/creatures", (request, response) => {
    console.log(request.body);
    // const creature = request.query;
    response.json(creatures);
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Tormenta 20 Turbinado rodando na porta ${port}`));