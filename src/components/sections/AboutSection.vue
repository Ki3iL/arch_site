<script setup>
const paragraphs = [
  'Проектно-строительная компания «Архитектурно технологическое проектирование» специализируется на комплексном ведении инвестиционно-строительных проектов объектов гражданского и промышленного назначения с большим опытом работы.',

  'Мы являемся авторами проектов реконструкции и строительства объектов различных сфер деятельности: медицинские учреждения, гостиницы и пансионаты, промышленные и сельскохозяйственные объекты, АЗС, автосалоны и автосервисы, развлекательные центры, банки, предприятия бытового обслуживания, объекты спортивного назначения, дошкольные учреждения, супермаркеты различных торговых сетей, кафе и рестораны, административно-офисные центры, жилые дома.',

  'Специалисты систематически повышают квалификацию, участвуя в различных специализированных курсах и семинарах по переподготовке и обучению, что дает возможность применять новейшие проектные и технические решения, энергосберегающие технологии.',
];

const achievements = [
  '«Лучший объект жилищно-гражданского назначения»',
  '«Лучший объект малой архитектурной формы и благоустройства»',
  '«Международный фестиваль Архитектура фасадов»',
  '«За высокое качество строительства и высокий профессионализм архитектурных решений»',
  '«Лучший объект реконструкции»',
];
</script>

<template>
  <div id="about" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">О КОМПАНИИ</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="relative h-full">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" 
            alt="Architecture work" 
            class="rounded-lg shadow-xl w-full h-full object-cover"
          >
        </div>
        
        <div class="space-y-6">
          <div class="prose max-w-none space-y-4">
						<p
							v-for="paragraph in paragraphs"
							:key="paragraph"
							class="text-gray-700 leading-relaxed indent-6 text-justify"
						>
							{{ paragraph }}
						</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">Наши достижения</h3>
            <ul class="space-y-3">
              <li v-for="achievement in achievements" 
                  :key="achievement" 
                  class="relative pl-5 text-gray-700">
									<span class="absolute left-0 top-[0.5em] h-2 w-2 bg-yellow-500 rounded-full"/>
									{{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>