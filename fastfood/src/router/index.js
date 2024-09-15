// src/router/index.js (or index.ts)
import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LogInPage.vue';
import ContentPage from '../views/ContentPage.vue';
import MakeOrderPage from '../views/OrderPage.vue';
import Checkout from '../views/CheckoutPage.vue';
import OrderReceived from '../views/OrderReceivedPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/content',
    name: 'Content',
    component: ContentPage,
    redirect: '/homeOrder',
    children: [
      { path: '/homeOrder', component: () => import('../components/HomePage.vue') },
      { path: '/ordernow', component: () => import('../components/OrderNowPage.vue') },
      { path: '/loyalty', component: () => import('../components/LoyaltyPage.vue') },
    ]
  },
  {
    path: '/makeorder/:id',
    name: 'MakeOrder',
    component: MakeOrderPage,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/received',
    name: 'Received',
    component: OrderReceived,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
