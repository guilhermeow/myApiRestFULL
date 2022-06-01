let inStatus;
let json = {};
let { writeFile } = require('fs');

module.exports = (res, product) => {

    let local = require('../json/mercearia.json');

    product = product.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

    for (var i = 0; i < Object.keys(local).length; i++) {
        if (local[Object.keys(local)[i]]['name'].indexOf(product) == 0) {
            inStatus = true;

            delete local[Object.keys(local)[i]];

            json = local;

            writeFile('./src/json/mercearia.json', JSON.stringify(json), (err) => {
                if (err) return res.json({
                    error: err
                });
            });
            res.json({
                response: 'product deleted successfully',
                status: 200
            });
        } else {
            inStatus = false;
        };
    };
    if (inStatus == false) {
        res.json({
            response: 'product not found or not exists',
            status: 404
        });
    };

}