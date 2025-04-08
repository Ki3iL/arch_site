<template>
  <div ref="mapContainer" class="w-full h-full min-h-[400px] rounded-lg"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const mapContainer = ref(null)
const coords = [52.600311, 39.553262] // Арктехпроект

onMounted(() => {
  const ymapsInterval = setInterval(() => {
    if (window.ymaps) {
      clearInterval(ymapsInterval)
      initMap()
    }
  }, 300)

  function initMap() {
    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(mapContainer.value, {
        center: coords,
        zoom: 17,
        controls: ['zoomControl', 'fullscreenControl'],
        // balloonAutoClose: false,
        // balloonAutoPan: false,
      })

      const placemark = new window.ymaps.Placemark(
        coords,
        {
          balloonContent: `
            <strong>Архтехпроект</strong><br>
            <a href="https://yandex.ru/maps/org/arkhtekhproyekt/28603401219/" target="_blank">
              Посмотреть на Яндекс.Картах
            </a>
          `,
          hintContent: 'Архтехпроект',
        },
        {
          preset: 'islands#redIcon',
        },
      )

      map.geoObjects.add(placemark)

      // 💡 Автоматически открываем балун
      // placemark.balloon.open();
    })


  }
})
</script>