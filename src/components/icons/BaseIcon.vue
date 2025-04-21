<template>
  <component
    :is="icons[name]"
    v-bind="attrs"
    :class="[iconClass, sizeClass, colorClass]"
  />
</template>

<script setup>
import { defineAsyncComponent, useAttrs, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  color: {
    type: String,
    default: 'current',
  },
})

const attrs = useAttrs()

const sizeClass = computed(() => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10',
  }
  return sizes[props.size] || sizes.md
})

const colorClass = computed(() => {
  if (props.color === 'current') return 'text-current'
  return `text-${props.color}`
})

const icons = {
  logo: defineAsyncComponent(() => import('@/components/icons/LogoIcon.vue')),
  location: defineAsyncComponent(() => import('@/components/icons/contacts/LocationIcon.vue')),
  phone: defineAsyncComponent(() => import('@/components/icons/contacts/PhoneIcon.vue')),
  email: defineAsyncComponent(() => import('@/components/icons/contacts/EmailIcon.vue')),
  website: defineAsyncComponent(() => import('@/components/icons/contacts/WebsiteIcon.vue')),
}
</script> 