<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <div class="hello">
    <h1>Hello World!</h1>
    <button @click="logout" class="logout-btn">Logout</button>
  </div>
</template>

<script>
import { urls } from '@/services/apis'
import { Post } from '@/services/fetch'

export default {
  name: 'HelloWorld',
  methods: {
    async logout() {
      await Post(
        urls.Logout,
        {},
        () => {
          localStorage.removeItem('authToken')
          this.$router.push('/login')
        },
        (error) => console.error('Logout error:', error)
      )
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.hello {
  text-align: center;
  padding: 20px;
}
.logout-btn {
  margin-top: 20px;
  padding: 8px 16px;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
