const controlers = require('./src/controlers/all.js');
const local = require('./src/json/mercearia.json');
const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        response: "method now alowed"
    });
});

app.get("/delete/product/:product", (req, res) => {
    const name = req.params.product;

    controlers.delete(res, product);
});

app.get('/find/product/:name', (req, res) => {
    const name = req.params.name;

    controlers.findByName(res, local, name);

});

app.get('/list/products/', (req, res) => {
    controlers.listAll(res);
});

app.listen(3000);