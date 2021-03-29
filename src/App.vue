<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DragDropTwoList></DragDropTwoList>
    <hr>
    <DragDropHandle></DragDropHandle>
  </div>
</template>

<script>
import DragDropTwoList from './components/DragDropTwoList'
import DragDropHandle from './components/DragDropHandle'

export default {
  name: 'App',
  components: {
    DragDropTwoList,
    DragDropHandle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
