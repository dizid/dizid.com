<template>
     <div>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>
    <section v-else>
    <div v-if="loading">Loading...</div>
    <div v-else>
       <div class="column">
       <div class="box"> 
 <h1 class="title has-text-primary has-text-centered"> {{plant[0].fields.nameNO}}</h1>
  </div></div>
 
  <div class="columns">
 <div class="column">
       <div class="box">
           <h3 class="subtitle is-3">Names</h3>
<div class="box">
<p class="title is-4">NO: {{plant[0].fields.nameNO}}</p>
<p class="title is-4">NL: {{plant[0].fields.nameNL}}</p>
<p class="title is-4">EN: {{plant[0].fields.nameEN}}</p>
<p class="title is-4">LA: {{plant[0].fields.nameLA}}</p>
  </div></div></div>
  <div class="column">
      <div class="box">
          <h3 class="subtitle is-3">Image</h3>
    <figure class="image is-4by3">  
      <img :src="'https://storage.googleapis.com/perennialplants/images1/'+plant[0].fields.localImageURL" alt="Plant image">
    </figure>
  </div></div>
  <div class="column">
      <div class="box">
<h3 class="subtitle is-3">More information</h3>
<p>{{plant[0].fields.nameEN}} is a {{plant[0].fields.pLifecycle}} plant.</p>
<p>You can find growing information and more on the <a :href="plant[0].fields.urlPFAF"> PFAF - Plants For A Future </a>
 website and on <a :href="plant[0].fields.urlWikiEN"> Wikipedia</a>.</p>

  </div></div>
  <div class="column">
       <div class="box">
           <h3 class="subtitle is-3">Sowing instructions</h3>
    <p> {{plant[0].fields.sowInstruction}}</p>
  </div></div>
</div>
     </div>
  </section>
</div>      
</template>

<script>
import PlantService from '@/services/PlantService'
export default {
    name: 'Plant',
    data: () => ({
        plant: [],
        loading: true,
        errored: false
    }),
methods: {
    getPlant(){
        PlantService.getPlant(this.$route.params.nameLA).then((response) => {
        this.plant = response.data.records; 
     //   console.log(this.plant[0].fields.nameLA)
        })
        .catch(error => {
        console.log(error)
        this.errored = true
      }).finally(() => this.loading = false)
       },
},
mounted() {
this.getPlant()
},
watch: {
    '$route' (to, from) {
      this.getPlant()
    }
  },
}
</script>
<style scoped>
.box {
  /* background-color:greenyellow */
  background-color:rgba(217, 252, 135, 0.678) 
}
</style>