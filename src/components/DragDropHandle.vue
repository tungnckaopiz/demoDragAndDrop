<template>
    <el-row>
        <el-col :span="4">
            <el-button type="success" @click="add">Add</el-button>
        </el-col>

        <el-col :span="14">
            <h3>Draggable {{ draggingInfo }}</h3>

            <draggable :list="list" class="list-group" handle=".handle" v-bind="dragOptions">
                <div
                        class="handle"
                        v-for="(element, idx) in list"
                        :key="element.name"
                >
                    <span class="text">{{ idx + 1 }} </span>

                    <input type="text" class="form-control" v-model="element.text" />

                    <i class="el-icon-delete" @click="removeAt(idx)"></i>
                </div>
            </draggable>
        </el-col>
    </el-row>
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
      draggable,
    },
    data() {
      return {
        list: [
          { name: "John", text: "", id: 0 },
          { name: "Joao", text: "", id: 1 },
          { name: "Jean", text: "", id: 2 }
        ],
        dragging: false,
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
      },
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
    .handle {
        float: left;
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
    .list-group {
        display: inline-grid;
        background: #ecf5ff;
    }
    .list-group div {
        cursor: pointer;
    }
</style>
