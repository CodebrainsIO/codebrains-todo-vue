<template>
  <el-form @submit.prevent :inline="true" :model="formInput" class="demo-form-inline">
    <el-form-item label="Title" prop="title">
      <el-input v-model="formInput.title" placeholder="Enter Todo"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit($event)">Add</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ElMessage } from "element-plus";
@Options({
    props: {

    }
})
export default class TodoForm extends Vue {
  formInput = { title: "", completed: false };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onSubmit(event) {
    event.preventDefault()
    console.log("Todo", this.formInput);
    if (this.formInput.title.length > 3) {
        this.$emit('send-message', this.formInput)
    } else {
      ElMessage({
        message: "Warning, this is a warning message.",
        type: "warning",
      });
    }
    this.formInput.title = "";
  }
}
</script>
