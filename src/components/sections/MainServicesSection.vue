<script setup>
import { 
  DocumentTextIcon, 
  MagnifyingGlassIcon, 
  WrenchScrewdriverIcon,
} from '@heroicons/vue/24/outline';

const mainServices = [
  {
    title: 'Проектно-сметная документация',
    icon: DocumentTextIcon,
    description: [
      'Архитектурно-строительные решения',
      'Генеральные планы, проекты инженерной подготовки и благоустройства территории',
      'Проекты строительных конструкций (разделы КЖ, КМ, КД, КМД)',
      'Электроснабжение и электроосвещение (внутренние и наружные сети)',
      'Водоснабжение, канализация, очистные сооружения',
      'Отопление, вентиляция, кондиционирование',
      'Газоснабжение (внутренние и наружные сети)',
      'Технологические решения',
      'Проекты слаботочных сетей',
      'Проекты противопожарных мероприятий',
      'Проекты организации дорожного движения',
      'Эскизные проекты интерьера и экстерьера',
      'Составление сметной документации'
    ]
  },
  {
    title: 'Обследование и аудит',
    icon: MagnifyingGlassIcon,
    description: [
      'Техническое обследование зданий и сооружений',
      'Энергоаудит',
      'Оценка технического состояния строительных конструкций',
      'Рекомендации по термомодернизации',
      'Проекты повышения энергоэффективности'
    ]
  },
  {
    title: 'Сопровождение работ',
    icon: WrenchScrewdriverIcon,
    description: [
      'Авторский надзор',
      'Технический надзор',
      'Подготовка документов для ввода объектов в эксплуатацию',
      'Исполнительная документация',
      'Сопровождение при согласованиях',
      'Контроль качества строительно-монтажных работ'
    ]
  }
];

console.log('WrenchScrewdriverIcon:', WrenchScrewdriverIcon)


const emit = defineEmits(['openModal']);

const openModal = (service) => {
  emit('openModal', service);
};
</script>

<template>
  <div id="services" class="py-16">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">ЧТО МЫ ДЕЛАЕМ</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="service in mainServices" 
          :key="service.title"
          class="bg-white p-8 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow"
          @click="openModal(service)"
        >
          <component 
            :is="service.icon"
            class="h-16 w-16 mx-auto mb-6 text-yellow-500"
          />
          <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
          <p class="text-gray-600">Нажмите, чтобы узнать больше</p>
        </div>
      </div>
    </div>
  </div>
</template> 