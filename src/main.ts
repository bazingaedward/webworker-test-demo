import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const worker = new Worker('worker.js');
worker.postMessage('helloworld');
worker.onmessage = function (event) {
  console.log('Received message ' + event.data);
};

setTimeout(() => {
  // worker.terminate();
  worker.postMessage('3333');
}, 1000);
worker.postMessage('2222');

createApp(App).mount('#app');
