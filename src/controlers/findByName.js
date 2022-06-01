module.exports = (res, local, product) => {
    let myResults = [];

    product = product.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

    for (var i = 0; i < Object.keys(local).length; i++) {

        if (local[Object.keys(local)[i]]['name'].indexOf(product) == 0) {

            myResults.push(local[Object.keys(local)[i]]);
        }
    }
    if (myResults.length == 0) {
        res.send({
            response: 'product not found or not exists',
            status: 404
        });
    } else if (myResults.length !== 0) {
        res.send({
            response: myResults,
            status: 200
        });
    };
}