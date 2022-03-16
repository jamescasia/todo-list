<template>
  <button
    class="
      add-btn
      flex flex-row
      rounded-full
      w-16
      h-16
      sm:w-20 sm:h-20
      shadow-md
      relative
      items-center
      justify-center
    "
    @click="$emit('show-add-task')"
  >
    <unicon
      name="plus"
      fill="white"
      style="monochrome"
      width="56"
      height="56"
    ></unicon>
  </button>
</template>

<script>
export default {
  name: "ShowAddTaskBtn",
  emits: ["show-add-task"],
};
</script>

<style scoped>
.add-btn {
  background-color: #01b0dd;
  border-radius: 24rem;
}
</style>