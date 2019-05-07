<template>
  <div>
    <div>
      <a-row>
        <a-col :span="18" :push="6">
          <div>
            <a-button-group>
              <a-button type="primary">
                <a-icon type="plus"/>添加
              </a-button>
              <a-button v-action:a>测试</a-button>
            </a-button-group>



             <a-form :form="form">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Name"
            >
              <a-input
                v-decorator="[
                        'email',
                        {rules: [{
              type: 'email', message: '输入正确邮箱2',
            },{ required: true, message: '输入正确邮箱' }]}
                        ]"
                placeholder="输入正确邮箱1"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="Nickname"
            >
              <a-input
                v-decorator="[
                        'nickname',
                        {rules: [{ required: checkNick, message: 'Please input your nickname' }]}
                        ]"
                placeholder="Please input your nickname"
              />
            </a-form-item>
            <a-form-item
              :label-col="formTailLayout.labelCol"
              :wrapper-col="formTailLayout.wrapperCol"
            >
              <a-checkbox :checked="checkNick" @change="handleChange">Nickname is required</a-checkbox>
            </a-form-item>
            <a-form-item
              :label-col="formTailLayout.labelCol"
              :wrapper-col="formTailLayout.wrapperCol"
            >
              <a-button type="primary" @click="check">Check</a-button>
            </a-form-item>
          </a-form>








          </div>
        </a-col>
        <a-col :span="6" :pull="18">
          <div>
            <span>机构树</span>
          </div>

         
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }    
}
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    }
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success')
        }
      })
    },
    handleChange(e) {
      this.checkNick = e.target.checked
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true })
      })
    }
  }
}
</script>

<style>
</style>
