<template>
  <div class="columns" id="app">
  <div class="column is-two-thirds">
    <section class="section">
      <h1 class="title">Contact me</h1>
      <p class="subtitle">
        I will reply as soon as possible.
      </p>
      <hr>
       <section class="form">
        <form name="contactdizidcom" data-netlify="true">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input v-model.lazy="$v.formResponses.name.$model" name="name" type="text" class="input" placeholder="Your name">
          

            </div>
            </div>
           <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea v-model.lazy="$v.formResponses.message.$model" name="message" type="textarea" class="textarea" placeholder="Your message"  ></textarea>
            </div>
           </div>

            <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model.lazy="$v.formResponses.email.$model" name="email" type="text"  class="input" placeholder="Your email"  >
            
            </div>
           </div>

          <div class="field is-grouped">
            <div class="control">
       
        <section>
  <button @click.prevent="submitForm" type="submit" class="submit">Submit</button>
 
 <div v-if="errors" class="has-text-danger">
 <p>The form has errors, please correct and re-submit.</p>
    <p class="has-text-danger" v-if="!$v.formResponses.name.required">Your name is required</p>
<p class="has-text-danger" v-if="!$v.formResponses.name.minLength">Your name must have at least 
  {{ $v.formResponses.name.$params.minLength.min }} characters.</p> 
  <p class="has-text-danger" v-if="!$v.formResponses.email.required">Please fill in your email address</p>
<p class="has-text-danger" v-if="!$v.formResponses.email.email">Email not valid</p>
 </div>
  <p v-else-if="formTouched && uiState === 'submit clicked'" class="error">The form above is empty,
    <br>You can't submit an empty form!
  </p>
  <p v-else-if="uiState === 'form submitted'" class="has-text-success">Your message was sent!</p>


</section>
      </div>
          </div>
        </form>
      </section>
    </section>
  </div>
</div>
</template>
<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
 data() {
   return {
    uiState: "submit not clicked",
    errors: false,
    empty: true,
    formTouched: '',
    formResponses: {
       name: '',
       email: '',
       message: '',
            }
   }
 },
 validations: {
   formResponses: {
     name: {
       required,
       minLength: minLength(2)
     },
     email: {
       required,
       email
     },
      message: {
       required
     },
   }
 },
 methods: {
 submitForm() {
  this.formTouched = !this.$v.formResponses.$anyDirty;
  this.errors = this.$v.formResponses.$anyError;
  this.uiState = "submit clicked";
  if (this.errors === false && this.formTouched === false) {
    //this is where you send the responses
axios({
    method: 'post',
  url: 'https://musing-easley-02ba23.netlify.com/.netlify/functions/sendformdata', // PROD at Netlify
  // url: 'http://localhost:9000/.netlify/functions/sendformdata', //  Netlify-lambda DEV server
    data: JSON.stringify(this.formResponses)
      })
        .then(function (response) { //handle success
          console.log("MF succeshandler: ", response + "hiya: succes")
      })
        .catch(function (response) { //handle error
          console.log("MF errorhandler: ", response + " hiya: feil")
    });
    this.uiState = "form submitted"
  }
}
}
}
</script>
