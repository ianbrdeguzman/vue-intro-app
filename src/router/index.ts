import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
import Users from '/src/components/Users.vue';
import Posts from '/src/components/Posts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
