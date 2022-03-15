<template>
  <div class="z-50">
    <div
      class="fixed top-0 right-0 z-1 w-full h-full opacity-60 bg-black"
      @click="$emit('dismiss')"
    ></div>
    <div class="modal w-80 sm:w-96 h-80 z-2">
      <div class="w-full h-56 rounded-3xl bg-yellow-50 flex flex-col">
        <div class="w-full h-12 rounded-t-3xl bg-yellow-100">
          <input
            class="
              w-full
              h-full
              text-lg
              flex flex-row
              justify-start
              rounded-t-3xl
              transition
              ease-in-out
              bg-yellow-100
              focus:bg-yellow-200 focus:border focus:outline-none
              py-2
              px-4
              font-bold
            "
            v-model="title"
            type="text"
            name="title"
            placeholder="Task title"
          />
        </div>
        <div class="w-full h-full rounded-b-3xl bg-yellow-50">
          <textarea
            class="
              w-full
              h-full
              resize-none
              text-md
              flex flex-row
              justify-start
              rounded-b-3xl
              transition
              ease-in-out
              bg-yellow-50
              focus:bg-yellow-200 focus:border focus:outline-none
              py-2
              px-4
            "
            v-model="description"
            type="text"
            name="description"
            placeholder="Task Description"
          />
        </div>
      </div>
      <div
        class="
          flex flex-row
          w-full
          h-14
          absolute
          bottom-6
          right-0
          gap-3
          justify-between
        "
      >
        <button
          class="
            w-1/2
            h-full
            bg-red-400
            rounded-3xl
            flex flex-row
            justify-center
            items-center
          "
          @click="$emit('dismiss')"
        >
          <unicon
            name="times"
            fill="white"
            style="monochrome"
            width="48"
            height="48"
          ></unicon>
        </button>

        <button
          class="w-1/2 h-full bg-green-400 rounded-3xl"
          @click="addTask()"
        >
          <unicon
            name="check"
            fill="white"
            style="monochrome"
            width="56"
            height="56"
          ></unicon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTaskModal",
  emits: ["add-task", "dismiss"],

  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    addTask() {
      if (this.title == "" || this.description == "") return;

      this.$emit("add-task", this.title, this.description);
      this.$emit("dismiss");
    },
  },
};
</script>

<style scoped>
.modal {
  transform: translate(-50%, -50%);
  position: fixed;
  right: 50%;
  left: 50%;
  bottom: 50%;
  top: 50%;
}
</style>