<script setup>
</script>

<template>
  <div>
    <NuxtLayout>

      <NuxtPage />
    </NuxtLayout>

  </div>
</template>

<style>
/* Custom styles for sticky behavior */
.stickyy {
  position: -webkit-sticky;
  position: sticky;
  background-color: red;
  top: 0;
  /* Adjust this value based on your design */
  z-index: 1000;
  /* Adjust this value based on your design */
}
</style>
