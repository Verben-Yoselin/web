
<script setup>
const handleSubmit = (event) => {
  event.preventDefault()
  // Aquí irá la lógica de login
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Iniciar Sesión Sencillo</h2>
      <form @submit="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required placeholder="ejemplo@correo.com">
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" required placeholder="Tu contraseña">
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 90%;
  max-width: 400px;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #41b883;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa876;
}
</style>