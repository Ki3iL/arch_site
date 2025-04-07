<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  items: Array
});
</script> 