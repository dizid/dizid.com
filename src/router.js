import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"
import Projects from "./views/Projects.vue"
import Project from "./views/Project.vue"
import PlantList from "./views/PlantList.vue"
import Plant from "./views/Plant.vue"

require('dotenv').config()

Vue.use(Router);

export default new Router({
  mode: "history", 
  base: process.env.BASE_URL,
  routes: [
    {path: "/", name: "home", component: Home},
    {path: "/about", name: "about", component: About},
    {path: "/contact", name: "contact", component: Contact},
    {path: "/projects", name: "projects", component: Projects},
    {path: "/project/:slug", name: "project", component: Project},
    {path: "/plantlist",name: "plantlist",component: PlantList},
    {path: "/plant/:nameLA",name: "plant",component: Plant}
    ]
});
