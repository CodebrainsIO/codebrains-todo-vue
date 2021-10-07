<template>
    <el-row>
      <el-col :span="12" :offset="7" style="width: 100%">
        <h1>Codebrains Todos</h1>
        <todo-form @send-message="createTodo"></todo-form>
        <el-table :data="todos">
          <el-table-column prop="title" label="Title" width="350" />
          <el-table-column fixed="right" label="Operations" width="240">
            <template #default="scope">
              <el-space wrap>
              <el-switch
                v-model="scope.row.completed"
                @click="updateTodo(scope.row)"
              />

              <el-popconfirm
                confirm-button-text="Yes"
                cancel-button-text="No"
                icon="el-icon-info"
                icon-color="red"
                title="Are you sure to delete this?"
                @confirm="handleDelete(scope.row)"
                @cancel="cancelDelete"
              >
                <template #reference>
                  <el-button
                    size="mini"
                    type="danger"
                    >Delete</el-button
                  >
                </template>
              </el-popconfirm>
              </el-space>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import { Options, Vue } from "vue-class-component";
import TodoForm from './TodoForm.vue';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
@Options({
  components: {
    TodoForm
  }
})
export default class Todolist extends Vue {
  todos = [];
  

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async mounted() {
    await this.loadTodos();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async createTodo(todo){
    console.log('From the child:', todo);
    await this.axios.post(`http://localhost:8000/todos`, {
      title: todo.title,
      completed: todo.completed,
    });
    ElMessage({
        message: "Todo Created",
        type: "success",
      });
    await this.loadTodos();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async updateTodo(todo: Todo) {
    console.log("Todo", todo);
    await this.axios.put(`http://localhost:8000/todos/${todo.id}`, {
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    });

    ElMessage({
        message: "Todo Updated",
        type: "success",
      });
    await this.loadTodos();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async loadTodos() {
    const response = await this.axios.get(`http://localhost:8000/todos`);
    this.todos = response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async handleDelete(todo: Todo) {
    console.log("Delete Todo", todo);
    console.log("Delete Todo by Id", todo.id);
    await this.axios.delete(`http://localhost:8000/todos/${todo.id}`);
    ElMessage({
        message: "Todo Created",
        type: "success",
      });
    await this.loadTodos();
  }

  cancelDelete(){
    console.log("Cancel delete");
  }
}
</script>
