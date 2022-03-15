<template>
  <div
    class="rounded-full w-24 h-24 bg-blue-600 shadow-md"
    @click="$emit('add-task')"
  >
    <div class="w-8 h-2 bg-white rounded-full absolute"></div>
    <div class="w-2 h-8 bg-white rounded-full absolute"></div>
  </div>
</template>

<script>
export default {
  name: "Fab",
  emits: ["add-task"],
};
</script>

<style scoped></style>