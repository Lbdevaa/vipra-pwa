import './import/modules';
import './import/components';
import './install-btn';

// window.addEventListener('load', async () => {
//   if ('serviceWorker' in navigator) {
//     try {
//       const reg = await navigator.serviceWorker.register('/check-wifi/sw.js');
//       console.log('Service worker register success', reg);
//     } catch (e) {
//       console.log('Service worker register fail');
//     }
//   }
// });

window.addEventListener('load', () => {
  const loginInput = document.querySelector('input[name="login"]');
  const passwordInput = document.querySelector('input[name="password"]');
  const authorizeBtn = document.querySelector('.authorize-form__btn');
  const defaultLogin = 'vipra-admin';
  const defaultPassword = 'adm0000';

  loginInput &&
    loginInput.addEventListener('input', () => {
      loginInput.value.length > 0
        ? (authorizeBtn.disabled = false)
        : (authorizeBtn.disabled = true);
    });

  authorizeBtn &&
    authorizeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        loginInput.value.toLowerCase() === defaultLogin &&
        passwordInput.value.toLowerCase() === defaultPassword
      ) {
        window.location = 'connect.html';
      } else {
        alert('Ошибка авторизации');
      }
    });
  // const container = document.querySelector('#posts');
  // if (navigator.connection) {
  //   const { effectiveType } = navigator.connection;
  //   container.textContent = `Тип соединения: ${effectiveType}`;
  // }

  if (navigator.connection) {
    const { effectiveType } = navigator.connection;
    if (effectiveType === 'wifi') {
      console.log('Пользователь подключен к Wi-Fi');
    } else if (effectiveType === 'cellular') {
      console.log('Пользователь подключен к мобильному интернету');
    }
  }
});
