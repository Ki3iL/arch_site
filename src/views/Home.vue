<script setup>
import { ref } from 'vue';
import ServiceModal from '../components/ServiceModal.vue';
import { 
  DocumentTextIcon, 
  MagnifyingGlassIcon, 
  WrenchScrewdriverIcon,
  CalculatorIcon,
  BuildingOfficeIcon,
  SwatchIcon,
  MapIcon,
  LinkIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/vue/24/outline';

import { projects } from '@/data/projects.js';

const selectedService = ref({
  title: '',
  shortDescription: '',
  description: [],
});

const isModalOpen = ref(false);

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

const detailedServices = [
  {
    title: 'Сметная документация для строительства',
    icon: CalculatorIcon,
    shortDescription: 'Подготовка детализированной сметной документации для строительных проектов.',
    description: [
      'Сметная документация — ключевой этап проектирования',
      'Позволяет точно определить стоимость строительства на ранней стадии',
      'Согласование итоговой стоимости между заказчиком и подрядчиком',
      'Подробные расчёты, дефектные акты, калькуляции',
      'Поддержка программ «Гранд-смета»'
    ]
  },
  {
    title: 'Архитектурная часть строительной документации',
    icon: BuildingOfficeIcon,
    shortDescription: 'Разработка архитектурного облика и планировок с учётом всех требований.',
    description: [
      'Внешний облик проектируемых зданий',
      'Архитектурная концепция с учётом брендирования',
      'Планировка помещений с учётом функционала и нормативных требований',
      'Учитываются: противопожарные, санитарные, экологические, технические, художественные аспекты',
      'Решения адаптированы под конкретные задачи заказчика'
    ]
  },
  {
    title: 'Дизайн интерьера и ландшафтный дизайн',
    icon: SwatchIcon,
    shortDescription: 'Комплексный подход к созданию комфортной и эстетичной среды.',
    description: [
      'Визуализации интерьера на базе компьютерной графики',
      'Совмещение функциональности и эстетики',
      'Ландшафтный дизайн как продолжение архитектурной идеи',
      'Использование многолетних и кустарниковых насаждений',
      'Продуманная композиция, цветники, гармония с природой'
    ]
  },
  {
    title: 'Генеральный план',
    icon: MapIcon,
    shortDescription: 'Разработка функционального и гармоничного генерального плана территории.',
    description: [
      'Проект планировки территории',
      'Концептуальный генеральный план',
      'План благоустройства',
      'Вертикальная планировка',
      'Расчёт земляных масс',
      'Сочетание функциональности, инженерных решений и эстетики'
    ]
  },
  {
    title: 'Проектирование строительных конструкций',
    icon: LinkIcon,
    shortDescription: 'Проектирование несущих конструкций любой сложности.',
    description: [
      'Подготовка комплектов чертежей марок КМ, КЖ, КМД, КД',
      'Металлические, железобетонные, каменные, деревянные конструкции',
      'Участие в прохождении экспертиз',
      'Работа с контролирующими органами',
      'Поддержка клиента до финальной стадии согласования'
    ]
  },
  {
    title: 'Техническое обследование зданий и сооружений',
    icon: ClipboardDocumentCheckIcon,
    shortDescription: 'Оценка состояния конструкций перед реконструкцией или ремонтом.',
    description: [
      'Обследование конструкций на предмет дефектов и износа',
      'Подготовка технических заключений',
      'Анализ несущих и ограждающих элементов',
      'Возможность последующей реконструкции',
      'Инструментальная диагностика, фотофиксация, рекомендации'
    ]
  },
  {
    title: 'Энергоаудит и термомодернизация',
    icon: ChartBarIcon,
    shortDescription: 'Анализ энергоэффективности с рекомендациями по снижению затрат.',
    description: [
      'Полный энергоаудит объектов',
      'Составление отчета с рекомендациями',
      'Термомодернизация зданий',
      'Снижение потребления тепловой энергии',
      'Повышение энергоэффективности систем отопления и ограждающих конструкций',
      'Индивидуальный подход к каждому объекту'
    ]
  }
];

const advantages = [
  {
    icon: UserGroupIcon,
    title: 'Индивидуальный подход',
    description: 'Каждый проект уникален и требует особого внимания к деталям'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Гарантия качества',
    description: 'Строгий контроль на всех этапах проектирования'
  },
  {
    icon: LightBulbIcon,
    title: 'Современные технологии',
    description: 'Применение инновационных решений в проектировании'
  }
];


const openModal = (service) => {
  selectedService.value = service;
  isModalOpen.value = true;
};

function getImageUrl(fileName) {
  return new URL(`../assets/images/projects/${fileName}`, import.meta.url).href;
}

</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white py-32">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
             alt="Architecture" 
             class="w-full h-full object-cover opacity-30">
      </div>
      <div class="relative max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-bold mb-6">АрхТехПроект</h1>
        <p class="text-xl mb-8">Ваш надежный партнер в проектировании и строительстве</p>
        <a href="#contact" class="bg-yellow-500 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition inline-block">
          Получить консультацию
        </a>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-yellow-500 mb-2">500+</div>
          <div class="text-gray-600">ПРОЕКТОВ</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-500 mb-2">300+</div>
          <div class="text-gray-600">КЛИЕНТОВ</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-yellow-500 mb-2">20+</div>
          <div class="text-gray-600">ЛЕТ ОПЫТА</div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div id="about" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">О НАС</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" 
                 alt="Architecture work" 
                 class="rounded-lg shadow-xl">
          </div>
          <div class="space-y-6">
            <p class="text-gray-700">
              Проектно-строительная компания «Архитектурно технологическое проектирование» специализируется на комплексном ведении инвестиционно-строительных проектов объектов гражданского и промышленного назначения с большим опытом работы.
            </p>
            <p class="text-gray-700">
              Мы являемся авторами проектов реконструкции и строительства объектов различных сфер деятельности: медицинские учреждения, гостиницы и пансионаты, промышленные и сельскохозяйственные объекты, АЗС, автосалоны и автосервисы, развлекательные центры, банки, предприятия бытового обслуживания, объекты спортивного назначения, дошкольные учреждения, супермаркеты различных торговых сетей, кафе и рестораны, административно-офисные центры, жилые дома.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Services Section -->
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

    <!-- Detailed Services Section -->
    <div id="detailed-services" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">УСЛУГИ</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in detailedServices" 
            :key="service.title"
            class="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            @click="openModal(service)"
          >
            <component 
              :is="service.icon"
              class="h-12 w-12 text-yellow-500 mb-4"
            />
            <h3 class="text-lg font-bold mb-2 md:min-h-[56px]">{{ service.title }}</h3>
            <p class="text-gray-600 text-sm">{{ service.shortDescription }}</p>
            <p class="text-yellow-500 text-sm mt-4">Нажмите для подробной информации →</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Advantages Section -->
    <div id="advantages" class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">НАШИ ПРЕИМУЩЕСТВА</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="advantage in advantages" 
            :key="advantage.title"
            class="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <component 
              :is="advantage.icon"
              class="h-16 w-16 mx-auto mb-6 text-yellow-500"
            />
            <h3 class="text-xl font-bold mb-4">{{ advantage.title }}</h3>
            <p class="text-gray-600">{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">НАШИ ПРОЕКТЫ</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.title"
            class="relative overflow-hidden rounded-lg group"
          >
            <img 
              :src="getImageUrl(project.image_name)" 
              :alt="project.alt"
              class="w-full h-64 object-cover"
            >
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 class="text-2xl font-bold text-white">{{ project.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Contact Section -->
    <div id="contact" class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">КОНТАКТЫ</h2>
        
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-bold mb-4">Наши контакты</h3>
              <div class="space-y-4 text-gray-700">
                <p>
                  <strong>Адрес:</strong><br>
                  398024, г. Липецк, ул. Доватора 14 офис 311
                </p>
                <p>
                  <strong>Телефон:</strong><br>
                  <a href="tel:+79205121032" class="text-yellow-500">+7 (920) 512-10-32</a>
                </p>
                <p>
                  <strong>Email:</strong><br>
                  <a href="mailto:ivs15@rambler.ru" class="text-yellow-500">ivs15@rambler.ru</a><br>
                  <a href="mailto:arhteh@inbox.ru" class="text-yellow-500">arhteh@inbox.ru</a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-bold mb-4">Важная информация</h3>
              <p class="text-gray-700">
                Обращаем внимание уважаемых клиентов на то, что высокая ответственность за качество выполняемых работ требуют от сотрудников и руководства ООО «Архтехпроект», периодического присутствия на строящихся объектах. В связи с этим желательно время встречи в офисе согласовывать предварительно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ServiceModal
      :title="selectedService.title"
      :description="selectedService.description"
      :is-open="isModalOpen"
      @close="isModalOpen = false"
    />
  </div>
</template>

<style scoped>
/* .h--56 {
  min-height: 56px;
} */
</style>