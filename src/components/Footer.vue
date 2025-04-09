<script setup>
import { menu } from '@/data/menu.js';
import { city, street, tel, email_1, email_2, site } from '@/data/contacts.js';
import BaseIcon from '@/components/icons/BaseIcon.vue';

const contactItems = [
  {
    icon: 'phone',
    text: tel,
    href: `tel:${tel}`,
  },
  {
    icon: 'email',
    text: email_1,
    href: `mailto:${email_1}`,
  },
  {
    icon: 'email',
    text: email_2,
    href: `mailto:${email_2}`,
  },
  {
    icon: 'website',
    text: site,
    href: `https://${site}`,
  },
];
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Информация о компании -->
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-yellow-500">АрхТехПроект</h3>
          <p class="text-gray-400 leading-relaxed">
            Проектно-строительная компания с многолетним опытом работы в сфере архитектурного проектирования и строительства.
          </p>
        </div>
        
        <!-- Меню -->
        <div class="space-y-4 md:text-center">
          <h3 class="text-xl font-semibold text-white">Навигация</h3>
          <div class="space-y-2">
            <a v-for="item in menu"
              :key="item.title"
              :href="item.href" 
              class="block text-gray-400 hover:text-yellow-500 transition duration-300">
              {{ item.title }}
            </a>
          </div>
        </div>
        
        <!-- Контакты -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Контакты</h3>
          <div class="space-y-3 text-gray-400">
            <div class="flex items-start">
              <BaseIcon name="location" iconClass="h-5 w-5 mr-3 mt-0.5 text-yellow-500" />
              <div>
                <p>{{city}}</p>
                <p>{{street}}</p>
              </div>
            </div>

            <div
              v-for="item in contactItems"
              :key="item.text"
              class="flex items-center"
            >
              <BaseIcon :name="item.icon" iconClass="h-5 w-5 mr-3 text-yellow-500" />
              <a
                :href="item.href"
                class="hover:text-yellow-500 transition duration-300"
              >
                {{ item.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-800 text-center">
        <p class="text-gray-400">&copy; {{ new Date().getFullYear() }} АрхТехПроект. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>