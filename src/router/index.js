// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importar as views
import DashboardView from '@/views/DashboardView.vue';

const routes = [
  { path: '/', component: DashboardView }, // Rota raiz aponta para DashboardView
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;