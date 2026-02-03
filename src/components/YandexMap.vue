<template>
  <div ref="mapContainer" class="w-full h-full min-h-[400px] rounded-lg"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const mapContainer = ref(null);
const coords = [52.600311, 39.553262]; // Арктехпроект
let map; // чтобы можно было уничтожить

const YM_SCRIPT_ID = "ymaps-script";

function loadYmaps() {
  return new Promise((resolve, reject) => {
    if (window.ymaps) return resolve(window.ymaps);

    const existing = document.getElementById(YM_SCRIPT_ID);
    if (existing) {
      const t = setInterval(() => {
        if (window.ymaps) {
          clearInterval(t);
          resolve(window.ymaps);
        }
      }, 50);
      setTimeout(() => {
        clearInterval(t);
        reject(new Error("Yandex Maps загрузка не завершилась"));
      }, 15000);
      return;
    }

    const script = document.createElement("script");
    script.id = YM_SCRIPT_ID;

    const apikey = import.meta.env.VITE_YMAPS_KEY;
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apikey}&lang=ru_RU`;

    script.async = true;
    script.onload = () => resolve(window.ymaps);
    script.onerror = () => reject(new Error("Не удалось загрузить Yandex Maps API (script error)"));
    document.head.appendChild(script);
  });
}

onMounted(async () => {
  try {
    const ymaps = await loadYmaps();

    ymaps.ready(() => {
      map = new ymaps.Map(mapContainer.value, {
        center: coords,
        zoom: 17,
        controls: ["zoomControl", "fullscreenControl"],
      });

      const placemark = new ymaps.Placemark(
        coords,
        {
          balloonContent: `
            <strong>АРХТЕХПРОЕКТ</strong><br>
            <a href="https://yandex.ru/maps/org/arkhtekhproyekt/28603401219/" target="_blank" rel="noopener">
              Посмотреть на Яндекс.Картах
            </a>
          `,
          hintContent: "АРХТЕХПРОЕКТ",
        },
        { preset: "islands#redIcon" }
      );

      map.geoObjects.add(placemark);
    });
  } catch (e) {
    console.error(e);
  }
});

onBeforeUnmount(() => {
  if (map) {
    map.destroy();
    map = null;
  }
});
</script>
