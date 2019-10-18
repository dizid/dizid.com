import axios from 'axios'
const Axios = axios.create({baseURL: "https://api.airtable.com/v0/appCFPsXRkJrEz6mw/Plants"});
Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY}
export default{
  getPlants() {return Axios.get("?filterByFormula={Growing}=1")},
  getPlant(nameLA) {return Axios.get("?filterByFormula={NameLA}='" + nameLA + "'")}
}