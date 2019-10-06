<template>
  <div>
	<div class="tile is-6 is-parent" id="left">
		<article class="tile is-child pink post">
			<p class="title is-2">Hi, I'm Marc de Ruijter. </p>
			<p class="subtitle has-text-grey">In the summer months <a href="https://plants.dizid.com">i grow plants</a> with my girlfriend, Elin.<br> 
   The rest of the year <a href="https://dev.dizid.com">i develop web apps </a>with Vue.js</p>
			<div class="content has-text-grey">
				<p>
			The long, dark and cold Norwegian winters are excellent for study. No-SQL cloud databases, like Firebase, serverless computing, Vue, node and API's are big changes from the 90's when I first created a database web app with Visual Basic.
Some of my recent projects are online at <a href="https://dev.dizid.com">dev.dizid.com</a>.
</p>
<p>
When spring comes, some of our perennial vegetables, like ramsons, rhubarb and St.Jansløk are popping up. 
These are the signs that the growing season is starting and together with my girlfriend, Elin, 
we grow more than 40 different vegetables, 
mostly perennials which you can view at <a href="https://plants.dizid.com">plants.dizid.com</a>. 
We also planted 120 berry bushes for a 'fruitful future' 🙂
</p>
<p>
Need a digital project done or want to buy interesting, cold-hardy perennial vegetable plants?
</p>
<p>
 <router-link to="/contact" class="button is-primary">Contact me..</router-link>
</p>


			</div>
			<a href="https://www.facebook.com/marcderuyter33" class="button is-medium is-facebook" style="width: 50px;"><i class="fab fa-facebook-f"></i></a>
			<a href="https://twitter.com/dizid" class="button is-medium is-twitter" style="width: 50px;"><i class="fab fa-twitter"></i></a>
			<a href="https://github.com/dizid" class="button is-medium is-github" style="width: 50px;"><i class="fab fa-github"></i></a>
			<a href="https://www.linkedin.com/in/dizid/" class="button is-medium is-linkedin" style="width: 50px;"><i class="fab fa-linkedin-in"></i></a>
		</article>
	</div>
	<div class="tile is-6 is-parent" id="right">
		
	</div>
	
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .column {
    display: flex;
  }

  .image {
    background-position: center center;
    background-size: cover;
    height: 400px;
    position: relative;
  }

  #left {
    padding: 7%;
  }

  #right {
    /* background-image: url("https://drive.google.com/file/d/1879YhlRVtcf3vnh5Uj1vyiVANzp4g_T-"); */
    background-image: url("../assets/marc-en-leon.jpg");
  } 

  html {
    overflow-y:hidden;
    }

    .columns {
      margin-top: 0;
    }

    #right {
      width: 100%;
      height:100%;
    }

    @media (min-width: 769px) {
      #right {
        width: 50%;
      }
    }

    #right {
      background-position: center center;
      background-size: cover;
      height: 400px;
      position: relative;
    }

    @media (min-width: 769px) {
      #right {
        height: 100vh;
        position: fixed;
        right: 0;
        top: 0;
      }
    }
</style>
