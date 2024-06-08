import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import UserProfile from '@/components/UserProfile.vue';
import Organizations from '@/components/Organizations.vue';
import OrganizationRegister from '@/components/OrganizationRegister.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/user', component: UserProfile },
  { path: '/organizations', component: Organizations },
  { path: '/organizations/register', component: OrganizationRegister }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 
