const axios = require('axios').default;

module.exports = async function fetchLukeSkywalker() {
    let url = "https://swapi.dev/api/people/1/";
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
