<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-toolbar>
        <q-btn-group flat class="rout-nav">
          <router-link to="/">
            <q-btn flat :outline="!isActive('/')" label="Todos" />
          </router-link>
          <router-link to="/post">
            <q-btn flat :outline="!isActive('/post')" label="Post" />
          </router-link>
          <router-link to="/albums">
            <q-btn flat :outline="!isActive('/albums')" label="Albums" />
          </router-link>
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const isActive = (path) => route.path === path;
    return {
      isActive
    };
  }
};
</script>

<style scoped>
.header {
  background-color: #008CBA !important;
  color: #fff0f5 !important;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center; 
}

.rout-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.rout-nav button {
  color: #000000;
  font-size: 16px;
}

.rout-nav :hover {
  color: whitesmoke;
}

.rout-nav a q-btn {
  color: #ffc0cb;
  font-size: 16px;
}

.rout-nav q-btn[flat][outline] {
  border-color: #ffc0cb;
  color: #ffc0cb;
}
</style>