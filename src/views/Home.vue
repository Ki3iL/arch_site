<script setup>
import { ref, inject } from 'vue';
import ServiceModal from '@/components/ServiceModal.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import StatsSection from '@/components/sections/StatsSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import MainServicesSection from '@/components/sections/MainServicesSection.vue';
import DetailedServicesSection from '@/components/sections/DetailedServicesSection.vue';
import AdvantagesSection from '@/components/sections/AdvantagesSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

const selectedService = ref({
  title: '',
  titleDescription: '',
  shortDescription: '',
  description: [],
});

const isModalOpen = ref(false);
const openModalProvider = inject('openModal');

const openModal = (service) => {
  selectedService.value = service;
  isModalOpen.value = true;
  openModalProvider();
};
</script>

<template>
  <div>
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <MainServicesSection @openModal="openModal" />
    <DetailedServicesSection @openModal="openModal" />
    <AdvantagesSection />
    <ProjectsSection />
    <ContactSection />
    
    <!-- Modal -->
    <ServiceModal
      :title="selectedService.title"
      :titleDescription="selectedService.titleDescription"
      :description="selectedService.description"
      :is-open="isModalOpen"
      @close="isModalOpen = false"
    />
  </div>
</template>

