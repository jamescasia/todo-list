<template>
  <div
    class="
      rounded-3xl
      bg-yellow-100
      flex flex-col
      w-80
      sm:w-96
      min-w-sm
      select-none
      shadow-md
    "
    @click="toggleExpand()"
  >
    <div
      class="
        flex flex-row
        rounded-t-2xl
        align-items-center
        justify-between
        font-bold
        px-3
        py-2
      "
    >
      <div class="flex flex-row justify-start align-items-center gap-5">
        <button
          :class="[
            'grid grid-cols-1 rounded-full w-8 h-8',
            task.done ? 'bg-green-500' : 'bg-black',
          ]"
          @click="toggleDone()"
        >
          <div class="place-self-center rounded-full bg-white w-3 h-3"></div>
        </button>

        <div class="text-lg flex flex-row justify-start">{{ task.title }}</div>
      </div>

      <button
        class="grid grid-cols-1 rounded-full bg-red-600 w-6 h-6"
        @click="deleteTask()"
      >
        <div class="place-self-center rounded-full bg-white w-3.5 h-1"></div>
      </button>
    </div>

    <div
      :class="[
        'taskEntry rounded-b-3xl bg-yellow-50 text-justify px-6',
        task.expanded ? 'py-3 h-32' : 'py-0 h-0',
      ]"
    >
      <h1 :class="['relative', task.expanded ? 'opacity-100' : 'opacity-0']">
        {{ task.description }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskEntry",

  props: {
    task: Object,
  },
  data() {},
  methods: {
    toggleExpand() {
      let new_task = this.task;
      new_task.expanded = !this.task.expanded;
      this.updateTask(new_task);
    },
    toggleDone() {
      let new_task = this.task;
      new_task.done = !this.task.done;
      this.updateTask(new_task);
    },
    deleteTask() {
      this.$emit("delete-task", this.task);
    },
    updateTask(new_task) {
      this.$emit("update-task", new_task);
    },
  },
  emits: ["update-task", "delete-task"],
};
</script>

<style scoped>
.taskEntry {
  transition: 0.2s height ease, 0.2s background-color ease,
    0.1s padding ease 0.15s;
  animation-direction: reverse;
}
</style>