<template>
    <div class="container">
        <h1>Two List</h1>
        <div class="row">
            <div class="col-3">
                <h3>Draggable 1</h3>
                <draggable class="list-group" :list="list1" group="people" @change="log" v-bind="dragOptions">
                    <div
                            class="list-group-item"
                            v-for="(element, index) in list1"
                            :key="element.name"
                    >
                        {{ element.name }} {{ index }}
                    </div>
                </draggable>
            </div>

            <div class="col-3">
                <h3>Draggable 2</h3>
                <draggable class="list-group" :list="list2" group="people" @change="log" v-bind="dragOptions">
                    <div
                            class="list-group-item"
                            v-for="(element, index) in list2"
                            :key="element.name"
                    >
                        {{ element.name }} {{ index }}
                    </div>
                </draggable>
            </div>

            <rawDisplayer class="col-3" :value="list1" title="List 1"/>

            <rawDisplayer class="col-3" :value="list2" title="List 2"/>
        </div>
    </div>
</template>
<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'two-lists',
    display: 'Transitions',
    order: 1,
    components: {
      draggable
    },
    data () {
      return {
        list1: [
          { name: 'John', id: 1 },
          { name: 'Joao', id: 2 },
          { name: 'Jean', id: 3 },
          { name: 'Gerard', id: 4 }
        ],
        list2: [
          { name: 'Juan', id: 5 },
          { name: 'Edgard', id: 6 },
          { name: 'Johnson', id: 7 }
        ]
      }
    },
    computed: {
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
      add () {
        this.list.push({ name: 'Juan' })
      },
      replace () {
        this.list = [{ name: 'Edgard' }]
      },
      clone (el) {
        return {
          name: el.name + ' cloned'
        }
      },
      log (evt) {
        window.console.log(evt)
      }
    }
  }
</script>
<style>
    .button {
        margin-top: 35px;
    }
    .flip-list-move {
        transition: transform 0.5s;
    }
    .no-move {
        transition: transform 0s;
    }
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
    .list-group {
        min-height: 20px;
    }
    .list-group-item {
        cursor: move;
    }
    .list-group-item i {
        cursor: pointer;
    }
</style>
