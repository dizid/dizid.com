import axios from 'axios'
// https://api.airtable.com/v0/app6LeXwbRvapHbBw/Table%201?api_key=YOUR_API_KEY
const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/app6LeXwbRvapHbBw/Projects"
});

Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY} // READ-ONLY key

export default
{   getProjects() {return Axios.get()},
    getProject(slug) {return Axios.get("?filterByFormula={Slug}='" + slug + "'")}
}