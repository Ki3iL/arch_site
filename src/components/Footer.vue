<script setup>
import { menu } from '@/data/menu.js';
import { city, street, tel, email_1, email_2, site } from '@/data/contacts.js';
import BaseIcon from '@/components/icons/BaseIcon.vue';
import { scrollToElement } from '@/utils/scroll.js';

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

const handleNavClick = (e, href) => {
  if (href === '#') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (href.startsWith('#')) {
    e.preventDefault();
    const id = href.slice(1);
    scrollToElement(id, 80);
  }
};
</script>

<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid gap-12 md:grid-cols-3">
        <!-- Блок "О компании" -->
        <div class="space-y-4">
          <a href="#" @click="handleNavClick($event, '#')" class="flex items-center space-x-2">
            <BaseIcon name="logo" size="2xl" color="yellow-500" />
            <span class="text-4xl font-sofia text-yellow-500 relative top-[5px]">АРХТЕХПРОЕКТ</span>
          </a>
          <p class="text-gray-400 text-sm leading-relaxed">
            Архитектурное проектирование и строительство с гарантией качества и индивидуальным подходом.
          </p>
        </div>

        <!-- Блок "Навигация" -->
        <nav class="space-y-4">
          <h3 class="text-xl font-semibold">Навигация</h3>
          <ul class="space-y-2">
            <li v-for="item in menu" :key="item.title">
              <a
                :href="item.href"
                @click="handleNavClick($event, item.href)"
                class="text-gray-400 hover:text-yellow-500 transition duration-300 block"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Блок "Контакты" -->
        <div class="space-y-4">
          <h3 class="text-xl font-semibold">Контакты</h3>
          <div class="flex items-start space-x-3">
            <BaseIcon name="location" class="w-5 h-5 text-yellow-500 mt-1" />
            <div>
              <p v-if="city" class="text-gray-400">{{ city }}</p>
              <p v-if="street" class="text-gray-400">{{ street }}</p>
            </div>
          </div>
          <ul class="space-y-3">
            <li
              v-for="item in contactItems"
              :key="item.text"
              class="flex items-center space-x-3"
            >
              <BaseIcon :name="item.icon" class="w-5 h-5 text-yellow-500" />
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-yellow-500 transition duration-300 truncate"
              >
                {{ item.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Разделитель и копирайт -->
      <div class="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; {{ new Date().getFullYear() }} <span class="font-sofia text-yellow-500 font-semibold">АРХТЕХПРОЕКТ</span>.
          Все права защищены.
        </p>
      </div>
    </div>
  </footer>
</template>
