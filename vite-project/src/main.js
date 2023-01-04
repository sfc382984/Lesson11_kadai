import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh-ggKEQqUEacykYDMA1wHJNUPWRPJyNM",
  authDomain: "vite-project-c88a3.firebaseapp.com",
  projectId: "vite-project-c88a3",
  storageBucket: "vite-project-c88a3.appspot.com",
  messagingSenderId: "247619451048",
  appId: "1:247619451048:web:3ede629f1be8be957f2a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");