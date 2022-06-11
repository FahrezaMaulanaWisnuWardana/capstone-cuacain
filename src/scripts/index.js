import '../components/nav-bar'
import '../styles/main.css'
import '../styles/responsive.css'
import App from './views/app'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#nav-menu'),
  content: document.querySelector('#main-content'),
});
 
window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  }
});