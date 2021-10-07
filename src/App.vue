<template>
  <el-container> 
    <el-main>
  <todo-list msg="Something props"></todo-list>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoList from './components/TodoList.vue';
@Options({
  components: {
    TodoList
  },
})
export default class App extends Vue {}
</script>

<style>

body {
  margin: 0;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
.el-container {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
}
</style>
