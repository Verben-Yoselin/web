<template>
  <div
    :class="colorScheme === 'dark' ? 'bg-light-background text-light-formText' : 'bg-dark-background text-dark-formText'"
    class="min-h-screen flex justify-center"
  >
    <div
      :class="colorScheme === 'dark' ? 'bg-light-formBackground' : 'bg-dark-formBackground'"
      class="shadow-lg sm:rounded-lg flex justify-center flex-1"
    >
      <!-- Sección visual izquierda -->
      <div
        :class="colorScheme === 'dark' ? 'bg-light-indigo-100' : 'bg-dark-indigo-900'"
        class="flex-1 text-center hidden lg:flex animate-fade-in"
      >
        <div
          @click="$router.push({ name: 'Home' })"
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat duration-700 hover:scale-105 hover:rotate-1"
          style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"
        ></div>
      </div>

      <!-- Sección formulario derecha -->
      <div
        :class="colorScheme === 'dark' ? 'bg-light-background text-light-formText' : 'bg-dark-background text-dark-formText'"
        class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 overflow-auto"
      >
        <div
          :class="colorScheme === 'dark' ? 'text-light-formText' : 'text-dark-formText'"
          class="mt-5 flex flex-col items-center transition duration-300 animate-fade-in"
        >
          <label class="animate-fade-in">Bienvenido a Seguridad Legal</label>
          <h1
            :class="colorScheme === 'dark' ? 'text-light-formText' : 'text-dark-formText'"
            class="text-2xl xl:text-3xl font-extrabold transition duration-300 mb-6 animate-fade-in"
          >
            Iniciar Sesión
          </h1>
          <!-- Formulario de Login -->
          <form @submit.prevent="login">
            <div
              :class="colorScheme === 'dark' ? 'bg-light-formBackground' : 'bg-dark-formBackground'"
              class="p-6 py-5 rounded-lg shadow-lg w-96"
            >
              <div class="w-full flex-1 mt-8">
                <div class="mx-auto max-w-xs">
                  <!-- Email -->
                  <div class="relative">
                    <input
                      v-model="email"
                      type="email"
                      id="email"
                      autocomplete="email"
                      :class="colorScheme === 'dark'
                        ? 'bg-light-inputBackground border-gray-200 placeholder-gray-500 focus:border-gray-400 text-gray-900 focus:bg-light-white'
                        : 'bg-dark-inputBackground border-gray-600 placeholder-gray-400 focus:border-gray-500 text-dark-formText focus:bg-dark-gray-600'"
                      class="w-full px-8 py-4 rounded-lg font-medium border text-sm focus:outline-none block pb-2.5 pt-4 peer animate-slide-up"
                      placeholder=" "
                    />
                    <label
                      for="email"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-2 z-10 origin-[0] px-4 peer-focus:px-2 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 animate-fade-in"
                    >
                      Correo Electrónico
                    </label>
                  </div>
                  <!-- Contraseña -->
                  <div class="relative mt-5">
                    <input
                      v-model="password"
                      type="password"
                      id="password"
                      autocomplete="current-password"
                      :class="colorScheme === 'dark'
                        ? 'bg-light-inputBackground border-gray-200 placeholder-gray-500 focus:border-gray-400 text-gray-900 focus:bg-light-white'
                        : 'bg-dark-inputBackground border-gray-600 placeholder-gray-400 focus:border-gray-500 text-dark-formText focus:bg-dark-gray-600'"
                      class="w-full px-8 py-4 rounded-lg font-medium border text-sm focus:outline-none block pb-2.5 pt-4 peer animate-slide-up"
                      placeholder=" "
                    />
                    <label
                      for="password"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-2.5 scale-75 top-2 z-10 origin-[0] px-4 peer-focus:px-2 peer-focus:text-blue-600 dark:peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 animate-fade-in"
                    >
                      Contraseña
                    </label>
                  </div>
                  <div class="mt-5">
                    <!-- Botón Iniciar Sesión -->
                    <button
                      type="submit"
                      :class="colorScheme === 'dark'
                        ? 'bg-light-buttonBackground text-light-buttonText hover:bg-light-buttonHover'
                        : 'bg-dark-buttonBackground text-dark-buttonText hover:bg-dark-buttonHover'"
                      class="mt-5 tracking-wide font-semibold w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none animate-fade-in"
                      :disabled="isLoading"
                    >
                      <template v-if="isLoading">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span class="ml-3">Iniciando sesión...</span>
                      </template>
                      <template v-else>
                        <svg
                          class="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                          <polyline points="10 17 15 12 10 7" />
                          <line x1="15" y1="12" x2="3" y2="12" />
                        </svg>
                        <span class="ml-3">Iniciar Sesión</span>
                      </template>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <!-- Enlaces a "Olvidé contraseña" y "Registrarse" -->
          <div class="mt-5 text-center">
            <p>
              <router-link to="/forgotmypass" class="text-blue-500 hover:underline">
                Olvidé mi contraseña
              </router-link>
            </p>
            <p>
              ¿No tienes una cuenta?
              <router-link to="/register" class="text-blue-500 hover:underline">
                Regístrate
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePreferredColorScheme } from '@vueuse/core'
const colorScheme = usePreferredColorScheme()
</script>

<script>
import { useToast } from 'vue-toastification'
import { Post } from '@/services/fetch'
import { urls } from '@/services/apis'

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    }
  },
  created() {
    // Redirigir si ya se encuentra autenticado
    if (localStorage.getItem('authToken')) {
    //   this.$router.push({ path: '/' })
      this.$router.push({ name: 'Hello' });
    }
  },
  methods: {
    async login() {
      this.isLoading = true;
      const toast = useToast();
      const { email, password } = this;
      await Post(
        urls.Login,
        { email, password },
        (response) => {
          toast.success('Inicio de sesión exitoso', {
            position: 'top-right',
            timeout: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: 'button',
            icon: true,
            rtl: false,
          });
          console.log('Respuesta login:', response);
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('email', response.user.email);
          localStorage.setItem('userId', response.user.id);
          this.$router.push({ name: 'Hello' });
          this.isLoading = false;
        },
        (error) => {
          const errorMessage = error.message || 'Error al iniciar sesión';
          toast.error(errorMessage, {
            position: 'top-right',
            timeout: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: 'button',
            icon: true,
            rtl: false,
          });
          console.error('Error login:', error);
          this.isLoading = false;
        }
      );
    },
  },
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}
</style>