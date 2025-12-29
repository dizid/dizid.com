<template>
  <div class="hero-wrapper">
    <section class="hero is-fullheight hero-gradient">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2 has-text-white">
            Crafting exceptional web experiences<br>
            with modern technologies
          </h1>
          <h2 class="subtitle is-4 hero-subtitle">
            Web Developer since HTML 1.0 | Building the web for over two decades
          </h2>
          <div class="buttons is-centered hero-buttons">
            <router-link to="/projects" class="button is-large is-light">
              View My Work
            </router-link>
            <router-link to="/contact" class="button is-large is-primary is-dark-purple">
              Get In Touch
            </router-link>
          </div>
          <div class="scroll-indicator">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>
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
  .hero-wrapper {
    min-height: 100vh;
  }

  .hero-gradient {
    background: linear-gradient(135deg, #2c2c54 0%, #474787 50%, #706fd3 100%);
  }

  .hero-subtitle {
    color: #9b59b6;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .hero-buttons {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .hero-buttons .button {
    margin: 0.5rem;
    min-width: 200px;
    border-radius: 4px;
  }

  .button.is-light {
    background-color: rgba(255, 255, 255, 0.9);
    color: #2c2c54;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  .button.is-dark-purple {
    background-color: #3d3d6b;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  .button.is-dark-purple:hover {
    background-color: #4a4a7a;
  }

  .scroll-indicator {
    margin-top: 3rem;
    color: white;
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
</style>
