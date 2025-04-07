<template>
  <div class="content-section">
    <h1 class="section-title">Что мы делаем</h1>

    <div class="space-y-8">
      <ServiceSection 
        v-for="(section, index) in serviceSections" 
        :key="index"
        :title="section.title"
        :items="section.items"
      />
    </div>

    <div class="mt-8 p-4 bg-gray-100 rounded-lg">
      <p class="text-center text-gray-700 font-semibold">
        Работы выполняются как в комплексе, так и отдельными позициями
      </p>
    </div>
  </div>
</template>

<script setup>
import ServiceSection from '../components/ServiceSection.vue';

const serviceSections = [
  {
    title: '1. Проектно-сметная документация строительства',
    items: [
      'Архитектурно-строительные решения',
      'Генеральные планы, проекты инженерной подготовки',
      'Проекты строительных конструкций (КЖ, КМ, КД, КМД)',
      'Электроснабжение и электроосвещение',
      'Водоснабжение, канализация, очистные сооружения',
      'Отопление, вентиляция, кондиционирование',
      'Газоснабжение',
      'Технологические решения',
      'Проекты слаботочных сетей',
      'Проекты противопожарных мероприятий'
    ]
  },
  {
    title: '2. Обследование зданий и сооружений',
    items: [
      'Техническое обследование',
      'Энергоаудит'
    ]
  },
  {
    title: '3. Сопровождение строительно-монтажных работ',
    items: [
      'Авторский надзор',
      'Технический надзор',
      'Подготовка документов для ввода объектов в эксплуатацию'
    ]
  }
];
</script>