<template>
  <div>
    Nuxt module playground!
    <pre>{{ config.public.yandexMetrika }}</pre>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>
