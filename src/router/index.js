import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Login from '../components/Login.vue';
import OrganizationRegister from '../components/OrganizationRegister.vue';
import Organizations from '../components/Organizations.vue';
import Register from '../components/Register.vue';
import UserProfile from '../components/UserProfile.vue';

// Mock authentication check function
function isAuthenticated() {
  // Replace this with your actual authentication logic
  return !!localStorage.getItem('authToken');
}

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/organizations', component: Organizations, meta: { requiresAuth: true } },
  { path: '/organization-register', component: OrganizationRegister, meta: { requiresAuth: true } },
  { path: '/user-profile', component: UserProfile, meta: { requiresAuth: true } },
  { path: '/home', component: HomePage, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
