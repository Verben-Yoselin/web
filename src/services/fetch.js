import { translateErrorMessage } from './errorToastMessages'
import { urls } from './apis'
import router from '../router'

//GET method
export async function Get(url, functionSuccess, functionError, headers = {}) {
  await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      ...headers
    }
  })
    .then(async response => {
      const contentType = response.headers.get('content-type')
      if (response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json()
          console.log("GET:\n", data)
          await functionSuccess(data)
        }
        else if (contentType && contentType.includes('text')) {
          const data = await response.text()
          console.log("GET:\n", data)
          await functionSuccess("OK text:", data)
        }
        else {
          throw new Error('Tipo de respuesta no soportado')
        }
      } else {
        if (response.status === 401) {
          localStorage.removeItem('authToken')
          localStorage.setItem('redirectPath', location.pathname)
          return router.replace({ name: 'Login' })
        }
        if (contentType && contentType.includes('application/json')) {
          const errJson = await response.json();
          console.error("GET:\n", errJson);
          await functionError(errJson)
        }
        else if (contentType && contentType.includes('text')) {
          const errText = await response.text();
          console.error("GET:\n", errText);
          await functionError(errText)
        } else {
          throw new Error('Mensaje de error no soportado')
        }
      }
    })
    .catch(async err => {
      await functionError(err)
    })
}

//POST method
export async function Post(url, data, functionSuccess, functionError, headers = {}) {
  console.log("POST: data to send\n",data);
  const isLoginRequest = url === urls.Login
  const isLogoutRequest = url === urls.Logout
  const fetchHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    ...headers
  }
  if (!isLoginRequest) {
    fetchHeaders.Authorization = `Bearer ${localStorage.getItem('authToken')}`
  }

  await fetch(url, {
    method: 'POST',
    headers: fetchHeaders,
    body: JSON.stringify(data)
  })
    .then(async response => {
      const contentType = response.headers.get('content-type')
      if (response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json()
          await functionSuccess(result)
        } else {
          throw new Error('Tipo de respuesta no soportado')
        }
      } else {
        if (response.status === 401) {
          if (isLoginRequest) {
            if (contentType && contentType.includes('application/json')) {
              const errData = await response.json()
              if (!errData.message) {
                errData.message = 'Usuario o contraseña incorrectos'
              }
              errData.message = translateErrorMessage(errData.message)
              await functionError(errData)
            } else {
              const errText = await response.text()
              await functionError({
                message: translateErrorMessage(
                  errText || 'Credenciales inválidas'
                )
              })
            }
          } else if (isLogoutRequest) {
            localStorage.removeItem('authToken')
            return router.replace({ name: 'Login' })
          } else {
            localStorage.removeItem('authToken')
            localStorage.setItem('redirectPath', location.pathname)
            return router.replace({ name: 'Login' })
          }
        } else if (contentType && contentType.includes('application/json')) {
          const errJson = await response.json()
          errJson.message = translateErrorMessage(errJson.message)
          await functionError(errJson)
        } else {
          const errText = await response.text()
          await functionError({ message: translateErrorMessage(errText) })
        }
      }
    })
    .catch(async err => {
      await functionError({ message: translateErrorMessage(err.message) })
    })
}

//PUT method
export async function Put(url, data, functionSuccess, functionError, headers = {}) {
  console.log("PUT: data to send\n",data);
  const fetchHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    ...headers
  };

  await fetch(url, {
    method: 'PUT',
    headers: fetchHeaders,
    body: JSON.stringify(data)
  })
    .then(async response => {
      const contentType = response.headers.get('content-type');
      if (response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          console.log("PUT:\n", result);
          await functionSuccess(result);
        }
        else if (contentType && contentType.includes('text')) {
          const result = await response.text()
          console.log("PUT:\n", result)
          await functionSuccess("OK text:", result)
        }
        else {
          throw new Error('Tipo de respuesta no soportado')
        }
      } 
      else {
        if (response.status === 401) {
          localStorage.removeItem('authToken');
          localStorage.setItem('redirectPath', location.pathname);
          return router.replace({ name: 'Login' });
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errJson = await response.json();
          console.error("PUT:\n", errJson);
          await functionError(errJson);
        }
        else if (contentType && contentType.includes('text')) {
          const errText = await response.text();
          console.error("PUT:\n", errText);
          await functionError(errText)
        } else {
          throw new Error('Mensaje de error no soportado')
        }
      }
    })
    .catch(async err => {
      await functionError({ message: err.message });
    });
}

//PATCH method
export async function Patch(url, data, functionSuccess, functionError, headers = {}) {
  console.log("PATCH: data to send\n",data);
  const fetchHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    ...headers
  };

  await fetch(url, {
    method: 'PATCH',
    headers: fetchHeaders,
    body: JSON.stringify(data)
  })
    .then(async response => {
      const contentType = response.headers.get('content-type');
      if (response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          console.log("PATCH:\n", result);
          await functionSuccess(result);
        }
        else if (contentType && contentType.includes('text')) {
          const result = await response.text()
          console.log("PATCH:\n", result)
          await functionSuccess("OK text:", result)
        }
        else {
          throw new Error('Tipo de respuesta no soportado')
        }
      } 
      else {
        if (response.status === 401) {
          localStorage.removeItem('authToken');
          localStorage.setItem('redirectPath', location.pathname);
          return router.replace({ name: 'Login' });
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errJson = await response.json();
          console.error("PATCH:\n", errJson);
          await functionError(errJson);
        }
        else if (contentType && contentType.includes('text')) {
          const errText = await response.text();
          console.error("PATCH:\n", errText);
          await functionError(errText)
        } else {
          throw new Error('Mensaje de error no soportado')
        }
      }
    })
    .catch(async err => {
      await functionError({ message: err.message });
    });
}

//DELETE method
export async function Delete(url, functionSuccess, functionError, headers = {}) {
  const fetchHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    ...headers,
  };

  await fetch(url, {
    method: 'DELETE',
    headers: fetchHeaders
  })
    .then(async response => {
        const contentType = response.headers.get('content-type');
        if (response.ok) {
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          console.log("DELETE:\n", result);
          await functionSuccess(result);
        }
        else if (contentType && contentType.includes('text')) {
          const result = await response.text()
          console.log("DELETE:\n", result)
          await functionSuccess(result)
        }
        else {
          throw new Error('Tipo de respuesta no soportado')
        }
      } else {
        if (response.status === 401) {
          localStorage.removeItem('authToken');
          localStorage.setItem('redirectPath', location.pathname);
          return router.replace({ name: 'Login' });
        } 
        if (contentType && contentType.includes('application/json')) {
          const errJson = await response.json();
          console.error("DELETE:\n", errJson);
          await functionError(errJson);
        }
        else if (contentType && contentType.includes('text')) {
          const errText = await response.text();
          console.error("DELETE:\n", errText);
          await functionError(errText)
        } else {
          throw new Error('Mensaje de error no soportado')
        }
      }
    })
    .catch(async err => {
      await functionError({ message: err.message });
    });
}

// Función para enviar el código de activación a la base de datos
export async function sendActivationCodeToDatabase(code, lotId, functionSuccess, functionError) {
  const data = {
    activation_code: code,
    lot_id: lotId,
  };

  await fetch(urls.CreateActivationCode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify(data)
  })
    .then(async response => {
      if (response.ok) {
        const result = await response.json();
        await functionSuccess(result);
      } else {
        const errText = await response.text();
        await functionError(errText);
      }
    })
    .catch(async err => {
      await functionError(err);
    });
}