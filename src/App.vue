<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home.vue';
import ScrollToTop from './components/ScrollToTop.vue';
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