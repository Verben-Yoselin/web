import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import { Post } from '@/services/fetch';
import { urls } from '@/services/apis';

const token = ref(null);
const company = ref(null);

const login = async (credentials) => {
  const toast = useToast();
  try {
    const response = await Post(urls.Login, credentials);
    token.value = response.token;
    company.value = response.companyId;
    localStorage.setItem('authToken', response.token);
    localStorage.setItem('companyId', response.companyId);
    toast.success('Inicio de sesión exitoso');
  } catch (error) {
    toast.error('Error al iniciar sesión: ' + error.message);
  }
};

const logout = () => {
  token.value = null;
  company.value = null;
  localStorage.removeItem('authToken');
  localStorage.removeItem('companyId');
};

export { login, logout, token };