module.exports = (res) => {
    res.json({
        response: require('../json/mercearia.json'),
        status: 200
    });
}