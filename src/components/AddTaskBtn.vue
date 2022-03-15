<template>
  <div
    class="
      flex flex-row
      rounded-full
      w-24
      h-24
      bg-blue-600
      shadow-md
      relative
      items-center
      justify-center
    "
    @click="$emit('show-add-task')"
  ></div>
</template>

<script>
export default {
  name: "ShowAddTaskBtn",
  emits: ["show-add-task"],
};
</script>

<style scoped></style>