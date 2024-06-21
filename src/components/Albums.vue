<template>
    <div class="AlbumDetails-container">
      <h2 class="title">Choose Album:</h2>
      <select v-model="selectedAlbum" @change="fetchPhotos" class="select-album">
        <option disabled value="">Please select an album</option>
        <option v-for="album in albums" :key="album.id" :value="album.id">{{ album.title }}</option>
      </select>
      <h2 class="title">Photos in Album {{ selectedAlbum }}</h2>
      <table v-if="photos.length" class="photos-table">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="photo in photos" :key="photo.id">
            <td>
              <img :src="photo.thumbnailUrl" @click="showPhoto(photo.url)" class="thumbnail">
            </td>
            <td>{{ photo.title }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="no-photos">
        <p>No photos available.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAlbumsStore } from '../stores/AlbumStore';
  
  const router = useRouter();
  const selectedAlbum = ref(null);
  const albums = ref([]);
  const photos = ref([]);
  
  const albumsStore = useAlbumsStore();
  
  const fetchAlbums = async () => {
    try {
      await albumsStore.fetchAlbums();
      albums.value = albumsStore.albums;
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };
  
  const fetchPhotos = async () => {
    if (selectedAlbum.value) {
      try {
        await albumsStore.fetchPhotos(selectedAlbum.value);
        photos.value = albumsStore.photos;
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }
  };
  
  const showPhoto = (url) => {
    window.open(url, '_blank');
  };
  
  onMounted(() => {
    fetchAlbums();
  });
  
  watch(selectedAlbum, (newAlbum) => {
    if (newAlbum) {
      fetchPhotos();
      router.push('/albums/${newAlbum}');
    }
  });
  </script>
  
  
  <style scoped>
  .AlbumDetails-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
  }
  
  .title {
    color: #007bff;
    text-align: center;
    font-weight: bold;
  }
  
  .select-album {
    margin: 0 auto;
    display: block;
  }
  
  .photos-table {
    margin: 0 auto;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
  }
  
  .thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 1px solid #007bff;
    border-radius: 5px;
    cursor: pointer;
    transition: border-color 0.3s;
  }
  
  .no-photos {
    text-align: center;
    margin-top: 20px;
  }
  
  .no-photos p {
    font-size: 18px;
  }
  </style>