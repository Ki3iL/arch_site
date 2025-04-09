<script setup>
import { address, tel, email_1, email_2, site } from '@/data/contacts.js';
import YandexMap from '@/components/YandexMap.vue';
</script>

<template>
  <div id="contact" class="py-16">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">КОНТАКТЫ</h2>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Контакты и карта -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- Контакты -->
          <div>
            <h3 class="text-2xl font-bold mb-4">Наши контакты</h3>
            <div class="space-y-4 text-gray-700">
              <p>
                <strong>Адрес:</strong><br>
                {{ address }}
              </p>
              <p>
                <strong>Телефон:</strong><br>
                <a :href="`tel:${tel}`" class="text-yellow-500">{{ tel }}</a>
              </p>
              <p>
                <strong>Email:</strong><br>
                <a :href="`mailto:${email_1}`" class="text-yellow-500">{{ email_1 }}</a><br>
                <a :href="`mailto:${email_2}`" class="text-yellow-500">{{ email_2 }}</a>
              </p>
              <p>
                <strong>Сайт:</strong><br>
                <a :href="`https://${site}`" class="text-yellow-500">{{ site }}</a>
              </p>
            </div>
          </div>
          
          <!-- Карта -->
          <div class="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <YandexMap />
          </div>
        </div>
        
        <!-- Важная информация (на всю ширину) -->
        <div class="border-t border-gray-200 pt-8">
          <h3 class="text-2xl font-bold mb-4">Важная информация</h3>
          <p class="text-gray-700">
            Обращаем внимание уважаемых клиентов на то, что высокая ответственность за качество выполняемых работ требуют от сотрудников и руководства ООО «Архтехпроект», периодического присутствия на строящихся объектах. В связи с этим желательно время встречи в офисе согласовывать предварительно.
          </p>
        </div>
      </div>
    </div>
  </div>
</template> 