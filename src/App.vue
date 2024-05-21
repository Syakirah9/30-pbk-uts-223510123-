<template>
  <div class="container">
    <h1>Apa Kegiatan Anda Hari Ini?</h1>
    <div class="header-menu">
      <button @click="selectedMenu = 'Todos'" :class="{ 'active': selectedMenu === 'Todos' }">To Do List</button>
      <button @click="selectedMenu = 'Post'" :class="{ 'active': selectedMenu === 'Post' }">Post</button>
    </div>
    <Todos v-if="selectedMenu === 'Todos'">
      <template #header>
        <h2>Aktivitas Anda</h2>
      </template>
    </Todos>
    <Post v-else-if="selectedMenu === 'Post'">
      <template #header>
        <h2>Pencari Pengguna</h2>
      </template>
    </Post>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import Post from './components/Post.vue';

export default {
  components: {
    Todos,
    Post
  },
  data() {
    return {
      selectedMenu: 'Todos' // Default menu selected
    };
  }
};
</script>

<style scoped>
/* Styling for active menu */
.active {
  background-color: pink;
}

/* Other styles remain unchanged */
.container {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

.header-menu {
  text-align: center;
  margin-bottom: 20px;
}
</style>