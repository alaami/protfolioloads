const fs = require('fs');
const qs=require('qs');
const axios = require('axios').default;
require('dotenv').config();
module.exports.preBuildDevelopment = async() => {
    console.log("Loading the development content!")
    const query = qs.stringify({
        populate: ['menu.Menu'], 
      }, {
        encodeValuesOnly: true,
      });
    const locale='all';
    const url=`${process.env.CMS_API_URL}/api/menus?&${query}&locale=${locale}`; 
    const response = await axios.get(url);
    const data = response.data.data;
    fs.writeFileSync("./src/app/blog/data/preBuild/data.json", JSON.stringify(data))
}
module.exports.preBuildProduction = async() => {
    console.log("Loading the production content!")
}
