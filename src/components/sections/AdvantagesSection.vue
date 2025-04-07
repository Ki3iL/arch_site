<script setup>
import { 
  UserGroupIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/vue/24/outline';

const advantages = [
  {
    icon: UserGroupIcon,
    title: 'Индивидуальный подход',
    description: 'Каждый проект уникален и требует особого внимания к деталям'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Гарантия качества',
    description: 'Строгий контроль на всех этапах проектирования'
  },
  {
    icon: LightBulbIcon,
    title: 'Современные технологии',
    description: 'Применение инновационных решений в проектировании'
  }
];
</script>

<template>
  <div id="advantages" class="py-16">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">НАШИ ПРЕИМУЩЕСТВА</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="advantage in advantages" 
          :key="advantage.title"
          class="bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <component 
            :is="advantage.icon"
            class="h-16 w-16 mx-auto mb-6 text-yellow-500"
          />
          <h3 class="text-xl font-bold mb-4">{{ advantage.title }}</h3>
          <p class="text-gray-600">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template> 