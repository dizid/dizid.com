<template>

<!-- How to integrate vue forms with netlify: 
https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/ -->

  <div class="columns" id="app">
  <div class="column is-two-thirds">
    <section class="section">
      <h1 class="title">Contact me</h1>
      <p class="subtitle">
        I will reply as soon as possible.
      </p>
      <hr>
      <!-- form starts here -->
      <section class="form">
        <form name="contactdizidcom" method="POST" data-netlify="true">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input v-model="$v.formResponses.name.$model" name="name" type="text" class="input" placeholder="Your name">
          <p v-if="errors" class="has-text-danger">
 <p v-if="!$v.formResponses.name.required">this field is required</p>
<p v-if="!$v.formResponses.name.minLength">Field must have at least {{ $v.formResponses.name.$params.minLength.min }} characters.</p>
      
            </div>
            </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea v-model="$v.formResponses.message.$model" name="message" type="textarea" class="textarea" placeholder="Your message"  ></textarea>
            </div>
           </div>

            <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="$v.formResponses.email.$model" name="email" type="text"  class="input" placeholder="Your email"  ></textarea>
            </div>
           </div>

          <div class="field is-grouped">
            <div class="control">
              <!-- <button class="button is-primary">Submit</button> -->
  <section>
  <!-- <button @click.prevent="submitForm" type="submit" class="submit">Submit</button> -->
  <button type="submit" class="button">Submit</button>
  <p v-if="errors" class="error">The form above has errors,
    <br>please get your act together and resubmit
  </p>
  <p v-else-if="formTouched && uiState === 'submit clicked'" class="error">The form above is empty,
    <br>cmon y'all you can't submit an empty form!
  </p>
  <p v-else-if="uiState === 'form submitted'" class="success">Hooray! Your form was submitted!</p>
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
import { required, minLength } from 'vuelidate/lib/validators'

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
       required
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
    this.uiState = "form submitted";
  }
}
 }
}
</script>