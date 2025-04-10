import { ref, provide } from 'vue';

export function setupModalProvider() {
  const isModalOpen = ref(false);
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  
  // Предоставляем состояние и методы для управления модальным окном
  provide('isModalOpen', isModalOpen);
  provide('openModal', openModal);
  provide('closeModal', closeModal);
  
  return {
    isModalOpen,
    openModal,
    closeModal
  };
} 