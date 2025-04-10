<template>
  <Transition name="slide-fade">
    <button
      v-show="isVisible && !isModalOpen"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 z-50"
      aria-label="Прокрутить вверх"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 300 // Порог показа кнопки
const isModalOpen = inject('isModalOpen', ref(false)) // Получаем состояние модального окна из провайдера

const checkScrollPosition = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
  checkScrollPosition()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style scoped>
/* Анимация появления (bounce вверх) */
@keyframes bounce-in-up {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  60% {
    transform: translateY(-10%);
    opacity: 1;
  }
  80% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(0);
  }
}

/* Анимация исчезновения (bounce вниз) */
@keyframes bounce-out-down {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  20% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

/* Подключаем keyframes к Transition */
.slide-fade-enter-active {
  animation: bounce-in-up 0.6s;
}

.slide-fade-leave-active {
  animation: bounce-out-down 0.5s forwards;
}
</style>
