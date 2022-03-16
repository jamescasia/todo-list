<template>
  <div class="flex flex-col items-center justify-start w-full h-full">
    <div class="flex flex-col w-96 md:mb-4 relative">
      <div
        class="
          font-bold
          text-center text-5xl
          sm:text-left sm:pl-4
          mb-4
          mt-5
          md:mt-20
          text-gray-700
        "
      >
        Toodoo
      </div>
      <div
        v-if="tasks.length > 0"
        class="flex flex-col justify-center items-center gap-3"
      >
        <TaskEntry
          :key="task.id"
          v-for="task in tasks"
          :task="task"
          @update-task="updateTask"
          @delete-task="deleteTask"
        />
      </div>
      <button
        v-else
        class="
          w-full
          h-80
          border-yellow-100
          bg-yellow-50
          border-2
          flex flex-row
          items-center
          justify-center
          text-2xl
          font-bold
          rounded-3xl
        "
        @click="showAddTaskModal"
      >
        No tasks. Add task?
      </button>
      <div class="fixed bottom-4 right-4 md:bottom-8 md:right-8">
        <ShowAddTaskBtn @show-add-task="showAddTaskModal" />
      </div>
    </div>
    <AddTaskModal
      v-if="this.addTaskModalVisible"
      @dismiss="hideAddTaskModal"
      @add-task="addTask"
    />
  </div>
</template>

<script>
import TaskEntry from "./components/TaskEntry.vue";
import ShowAddTaskBtn from "./components/ShowAddTaskBtn.vue";
import AddTaskModal from "./components/AddTaskModal.vue";

export default {
  name: "App",
  components: { TaskEntry, ShowAddTaskBtn, AddTaskModal },

  data() {
    return {
      addTaskModalVisible: false,

      tasks:
        document.cookie == ""
          ? [
              {
                id: "1",
                title: "Walk the dog",
                description: "Walk lil Aki and do 5 laps",
                done: "true",
                expanded: "false",
              },
              {
                id: "2",
                title: "Study for Calculus exam",
                description:
                  "Study limits, infinite series, limits at infinity.",
                done: "true",
                expanded: "true",
              },
              {
                id: "3",
                title: "Workout at Gold's Gym",
                description: "20 reps 3 sets",
                done: "true",
                expanded: "true",
              },
            ]
          : JSON.parse(document.cookie),
    };
  },

  methods: {
    saveCookie() {
      document.cookie = JSON.stringify(this.tasks);
    },
    updateTask(new_task) {
      for (let task in this.tasks) {
        if (new_task.id === task.id) {
          task = { ...task, new_task };
        }
      }
      this.saveCookie();
    },

    addTask(title, description) {
      this.tasks.push({
        id: `id-${Math.random() * 1000000}`,
        title,
        description,
        done: "false",
        expanded: "true",
      });
      this.saveCookie();
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((a) => a.id != task.id);
      this.saveCookie();
    },

    showAddTaskModal() {
      this.addTaskModalVisible = true;
    },

    hideAddTaskModal() {
      this.addTaskModalVisible = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Manrope, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
 