<script setup>
import { 
  DocumentTextIcon, 
  MagnifyingGlassIcon, 
  WrenchScrewdriverIcon,
} from '@heroicons/vue/24/outline';

const mainServices = [
  {
    title: 'Проектно-сметная документация строительства',
    title_description: ' — основа любого строительного проекта. Мы разрабатываем комплексную документацию, включающую:',
    icon: DocumentTextIcon,
    description: [
      "Архитектурно-строительные решения;",
      "Генеральные планы, благоустройство, инженерная подготовка;",
      "Проектирование конструкций (КЖ, КМ, КД, КМД);",
      "Электроснабжение и освещение (внутренние и наружные сети);",
      "Водоснабжение, канализация, очистные сооружения;",
      "Отопление, вентиляция, кондиционирование;",
      "Газоснабжение (внутренние и наружные сети);",
      "Внешние сети теплоснабжения;",
      "Технологические решения;",
      "Слаботочные системы: видеонаблюдение, связь, контроль доступа;",
      "Противопожарные системы: сигнализация, АПТ, огнезащита, молниезащита;",
      "Организация дорожного движения;",
      "Эскизные проекты интерьеров и экстерьеров;",
      "Контактные сети наземного электротранспорта;",
      "Проекты по энергоэффективности и термомодернизации;",
      "Сметная документация: «Гранд-смета», калькуляции, дефектные акты;",
      "Проекты организации строительства;",
      "Участие при согласовании и сопровождении проектной документации при проведении экспертиз, требуемых по действующему законодательству Российской Федерации."
    ]
  },
  {
    title: 'Обследование зданий и сооружений',
    title_description: ' необходимо для оценки технического состояния и возможности дальнейшей эксплуатации или реконструкции:',
    icon: MagnifyingGlassIcon,
    description: [
      'Техническое обследование;',
      'Энергоаудит.',
    ]
  },
  {
    title: 'Сопровождение строительно-монтажных работ',
    title_description: ' — это гарантия соответствия исполнения проекту и строительным нормам:',
    icon: WrenchScrewdriverIcon,
    description: [
      'Авторский надзор;',
      'Технический надзор;',
      'Подготовка исполнительной документации;',
      'Поддержка при вводе объекта в эксплуатацию;',
      'Согласование и взаимодействие с контролирующими органами.',
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