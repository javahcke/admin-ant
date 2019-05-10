<template>
  <div>
    <div class="name">
      <p class="height_p">报告名称</p>
      <a-input placeholder="请输入报告名称" v-model="name"/>
    </div>
    <div class="state">
      <p class="height_p">报告状态</p>
      <!-- <a-form :form="form" @submit="handleSubmit">
        <a-select
          v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
          placeholder="全部"
          @change="handleSelectChange"
        >
          <a-select-option value="male">全部</a-select-option>
          <a-select-option value="female">生成中</a-select-option>
          <a-select-option value="succeed">生成成功</a-select-option>
          <a-select-option value="defeated">生成失败</a-select-option>
        </a-select>
      </a-form> -->
      <a-input-group compact @change="handleChange(value)">
        <a-select defaultValue="Option1" @change="handleChange()">
          <a-select-option value="Option1">全部</a-select-option>
          <a-select-option value="Option2">生成中</a-select-option>
          <a-select-option value="Option3">生成成功</a-select-option>
          <a-select-option value="Option4">生成失败</a-select-option>
        </a-select>
      </a-input-group>
    </div>
    <div class="button">
      <p class="height_p"></p>
      <a-button type="primary" icon="search">查询</a-button>&nbsp;&nbsp;
      <a-button icon="reload" @click="reset">重置</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      name: '',
      type:"全部"
    }
  },
  methods: {
    handleSelectChange(value) {
      console.log(value)
      //   this.form.setFieldsValue({
      //     gender: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      //   })
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        console.log(err)
        console.log(values)
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    reset() {
      this.name = ''
      this.type = '全部'
    },
    status(txt){
        this.type = txt
    },
    handleChange(value){
          console.log(value)
    }
  }
}
</script>

<style scoped>
.name {
  width: 30%;
  float: left;
}
.state {
  width: 30%;
  float: left;
  padding-left: 20px;
}
.ant-select {
  width: 100%;
}
.button {
  float: left;
  width: 20%;
  padding-left: 20px;
}
.height_p {
  padding: 0;
  margin: 0;
  height: 30px;
}
</style>
