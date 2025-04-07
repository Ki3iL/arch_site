<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';

defineProps({
  title: String,
  description: Array,
  isOpen: Boolean
});

defineEmits(['close']);
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="$emit('close')"></div>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-2xl leading-6 font-bold text-gray-900" id="modal-title">
                  {{ title }}
                </h3>
                <button @click="$emit('close')" class="text-gray-400 hover:text-gray-500">
                  <XMarkIcon class="h-6 w-6" />
                </button>
              </div>
              <div class="mt-4">
                <ul class="space-y-2">
                  <li v-for="(item, index) in description" :key="index" class="text-gray-700">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Добавляем простую анимацию появления */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fixed {
  animation: fadeIn 0.3s ease-out;
}
</style>