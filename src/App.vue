<template>
    <div id="app">
        <el-container class="display-block">
            <Header></Header>
            <el-container>
                <Aside></Aside>
                <el-container class="display-block">
                    <DragDropHandle></DragDropHandle>
                    <Footer></Footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

  // import DragDropTwoList from '@/components/DragDropTwoList'
  import DragDropHandle from '@/components/DragDropHandle'
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Aside from '@/components/Aside'

  export default {
    name: 'App',
    components: {
      // DragDropTwoList,
      DragDropHandle,
      Header,
      Footer,
      Aside
    }
  }
</script>

<style type="text/css">
    @import './assets/styles/main.css';
</style>
