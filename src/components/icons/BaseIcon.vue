<template>
  <component
    :is="icons[name]"
    v-bind="attrs"
    :class="[iconClass, sizeClass, colorClass]"
  />
</template>

<script setup>
import { useAttrs, computed } from 'vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import LocationIcon from '@/components/icons/contacts/LocationIcon.vue'
import PhoneIcon from '@/components/icons/contacts/PhoneIcon.vue'
import EmailIcon from '@/components/icons/contacts/EmailIcon.vue'
import WebsiteIcon from '@/components/icons/contacts/WebsiteIcon.vue'

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
    '2xl': 'w-[40px] h-[40px]',
    '3xl': 'w-[60px] h-[60px]',
  }
  return sizes[props.size] || sizes.md
})

const colorClass = computed(() => {
  if (props.color === 'current') return 'text-current'
  return `text-${props.color}`
})

const icons = {
  logo: LogoIcon,
  location: LocationIcon,
  phone: PhoneIcon,
  email: EmailIcon,
  website: WebsiteIcon,
}
</script> 