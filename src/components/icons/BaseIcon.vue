<template>
  <component
    :is="icons[name]"
    v-bind="attrs"
    :class="iconClass"
  />
</template>

<script setup>
import { defineAsyncComponent, useAttrs } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    default: '',
  },
})

const attrs = useAttrs()

const icons = {
  location: defineAsyncComponent(() => import('@/components/icons/contacts/LocationIcon.vue')),
  phone: defineAsyncComponent(() => import('@/components/icons/contacts/PhoneIcon.vue')),
  email: defineAsyncComponent(() => import('@/components/icons/contacts/EmailIcon.vue')),
  website: defineAsyncComponent(() => import('@/components/icons/contacts/WebsiteIcon.vue')),
}
</script> 