import { createRouter, createWebHistory } from 'vue-router';
import Post from '../views/Post.vue';
import Todos from '../views/Todos.vue';
import Albums from '../views/Albums.vue'; // Pastikan ini sesuai dengan nama file komponen Anda

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetail',
    component: Albums,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;