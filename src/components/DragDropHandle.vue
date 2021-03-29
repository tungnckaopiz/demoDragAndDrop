<template>
    <div class="row">
        <div class="col-1">
            <button class="btn btn-secondary button" @click="add">Add</button>
        </div>

        <div class="col-7">
            <h3>Draggable {{ draggingInfo }}</h3>

            <draggable tag="ul" :list="list" class="list-group" handle=".handle" v-bind="dragOptions">
                <li
                        class="list-group-item"
                        v-for="(element, idx) in list"
                        :key="element.name"
                >
                    <b-icon icon="border-width" class="handle"></b-icon>

                    <span class="text">{{ idx + 1 }} </span>

                    <input type="text" class="form-control" v-model="element.text" />

                    <b-icon icon="x-circle" @click="removeAt(idx)"></b-icon>
                </li>
            </draggable>
        </div>

        <rawDisplayer class="col-3" :value="list" title="List" />
    </div>
</template>

<script>
  let id = 2;
  import draggable from "vuedraggable";
  export default {
    name: "handle",
    display: "Handle",
    instruction: "Drag using the handle icon",
    order: 5,
    components: {
      draggable
    },
    data() {
      return {
        list: [
          { name: "John", text: "", id: 0 },
          { name: "Joao", text: "", id: 1 },
          { name: "Jean", text: "", id: 2 }
        ],
        dragging: true
      };
    },
    computed: {
      draggingInfo() {
        return this.dragging ? "under drag" : "";
      },
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    },
    methods: {
      removeAt(idx) {
        this.list.splice(idx, 1);
      },
      add () {
        id++;
        this.list.push({ name: "Juan " + id, id, text: "" });
      }
    }
  };
</script>
<style scoped>
    .button {
        margin-top: 35px;
    }
    .handle {
        float: left;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    .close {
        float: right;
        padding-top: 8px;
        padding-bottom: 8px;
    }
    input {
        display: inline-block;
        width: 50%;
    }
    .text {
        margin: 20px;
    }
</style>
