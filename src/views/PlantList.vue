<template>
<div>
  <h1 class="title has-text-primary has-text-centered">Planter på Neffen grønt</h1>
   <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
 <div v-else>
<div class="container">
<div class="box">
  <v-table :data="plants" class="table is-bordered">
    <thead slot="head">
        <v-th sortKey="fields.nameNO" defaultSort="asc">Norsk</v-th>
        <v-th sortKey="fields.nameNL">Nederlansk</v-th> 
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.id">
          <td><router-link :to="'/plant/'+row.fields.nameLA" class="button is-primary">{{row.fields.nameNO}}</router-link></td>
          <td>{{ row.fields.nameNL }}</td>
         </tr>
    </tbody>
  </v-table>
</div>
</div>

    </div>
  </section>
</div>
</template>

<script>
import PlantService from '@/services/PlantService'
export default {
    name: 'PlantList',
    data: () => ({
        plants: [],
        loading: true,
        errored: false
    }),
methods: {
    getPlants(){
        PlantService.getPlants().then((response) => {
        this.plants = response.data.records;
        })
        .catch(error => {console.log(error)
        this.errored = true
          }).finally(() => this.loading = false)
      },
},
mounted() {
this.getPlants()
},
}
</script>
<style>
</style>
