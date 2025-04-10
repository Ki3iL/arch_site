<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home.vue';
import ScrollToTop from './components/ScrollToTop.vue';
import { setupModalProvider } from './providers/modal.js';

// Инициализируем провайдер модального окна
setupModalProvider();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
    <!-- <main class="flex-grow pt-20"> -->
      <Home />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>