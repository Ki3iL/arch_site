<template>
  <div ref="mapContainer" class="w-full h-full min-h-[400px] rounded-lg"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  address: {
    type: String,
    default: 'Липецк ул. Доватора 14'
  }
});

const mapContainer = ref(null);
let map = null;

onMounted(() => {
  // Загружаем API Яндекс Карт
  const script = document.createElement('script');
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU`;
  script.async = true;
  
  script.onload = () => {
    // Инициализируем карту после загрузки API
    ymaps.ready(() => {
      // Создаем карту
      map = new ymaps.Map(mapContainer.value, {
        center: [52.6031, 39.5708], // Координаты Липецка
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
      });

      // Поиск адреса и установка метки
      ymaps.geocode(props.address, {
        results: 1
      }).then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        if (firstGeoObject) {
          const coords = firstGeoObject.geometry.getCoordinates();
          
          // Устанавливаем центр карты на найденный адрес
          map.setCenter(coords);
          
          // Добавляем метку
          const placemark = new ymaps.Placemark(coords, {
            balloonContent: props.address
          }, {
            preset: 'islands#redDotIcon'
          });
          
          map.geoObjects.add(placemark);
        }
      });
    });
  };
  
  document.head.appendChild(script);
});
</script> 