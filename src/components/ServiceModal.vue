<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { inject, watch } from 'vue';

const props = defineProps({
  title: String,
  titleDescription: String,
  description: Array,
  isOpen: Boolean
});

const emit = defineEmits(['close']);
const isModalOpen = inject('isModalOpen');
const closeModal = inject('closeModal');

// Синхронизируем состояние модального окна с провайдером
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    isModalOpen.value = true;
  } else {
    isModalOpen.value = false;
  }
}, { immediate: true });

// Обработчик закрытия модального окна
const handleClose = () => {
  closeModal();
  emit('close');
};
</script>

<template>
  <Transition name="modal">
    <div v-show="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition name="fade">
          <div v-show="isOpen" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="handleClose"></div>
        </Transition>

        <Transition name="modal-content">
          <div v-show="isOpen" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-xl w-full">
            <div class="bg-white p-6">
              <div class="flex items-start">
                <div class="mt-3 w-full text-left sm:text-justify leading-relaxed break-words hyphens-auto" lang="ru">
                  <div class="flex justify-between items-center mb-4 relative ">
                    <h3 class="leading-6 indent-5 text-gray-900" id="modal-title">
                      <span class="font-bold">{{ title }}</span> {{ titleDescription }}
                    </h3>
                    <button @click="handleClose" class="absolute -right-2 -top-5 text-gray-400 hover:text-gray-500">
                      <XMarkIcon class="h-6 w-6" />
                    </button>
                  </div>
                  <div class="mt-4">
                    <ul class="space-y-2">
                      <li v-for="(item, index) in description" :key="index" class="relative pl-5 text-gray-900">
                        <span class="absolute left-0 top-[0.55em] h-2 w-2 bg-yellow-500 rounded-full"/>
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Анимация затемнения фона */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Анимация модального окна */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Анимация контента модального окна */
.modal-content-enter-active,
.modal-content-leave-active {
  transition: all 0.3s ease;
}

.modal-content-enter-from,
.modal-content-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
</style>