import App from './App.js';

const $app = document.querySelector('#app');

$app.className =
  'grid grid-cols-1 w-96 h-[48rem] items-center content-between m-24 p-4 border-2 border-red-500 bg-orange-200 rounded-lg';

new App($app);
