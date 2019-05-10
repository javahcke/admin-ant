<template>
  <div class="back">
    <a-button class="editable-add-btn" @click="handleAdd">Add</a-button>
    <a-table bordered :dataSource="dataSource" :columns="columns">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
      </template>
      <template slot="operation" slot-scope="text, record">
        <!-- <a-popconfirm > -->
        <a href="javascript:;" @click="lookOver(record)">查看</a>
        丨
        <a href="javascript:;" @click="alter(record)">修改</a>丨
        <a href="javascript:;" @click="onDelete(record.key)">删除</a>
        <!-- </a-popconfirm > -->
      </template>
    </a-table>
    <a-modal width="622px" title="查看发票订单" v-model="visible" :footer="null" @ok="handleOk">
      <p>
        <span class="letaa">发票抬头:</span>
        {{this.chakan.title}}
      </p>
      <p>
        <span class="letaa">类型:</span>
        {{this.chakan.type}}
      </p>
      <p>
        <span class="letaa">纳税人识别号:</span>
        {{this.chakan.address}}
      </p>
    </a-modal>
    <a-modal width="622px" title="查看发票订单" v-model="visibles" @ok="handleOks">

      <div class="type">
        <span class="child">开具类型：</span> 
        <a-radio-group @change="onChange" v-model="value">
          <a-radio :style="radioStyle" :value="1">企业</a-radio>
          <a-radio :style="radioStyle" :value="2">个人</a-radio>
        </a-radio-group>
      </div>

      <div v-show="value == 1">
        <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="企业名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'billTitle',
          {rules: [{ required: true, message: '请输入 企业名称!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="纳税人识别号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" help="请与贵公司财务人员核实后，仔细填写准确的三证合一后的社会统一信用代码或税务登记证号，否则将影响后续发票的正常使用。">
          <a-input
            v-decorator="[
          'taxpayerNumber',
          {rules: [{ required: true, message: '请输入 纳税人识别号!' }]}
        ]"
          />
          
        </a-form-item>
        <span class="hint" style="line-height: 14px"></span>
        <a-form-item label="银行账号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'accountNumber',
          {rules: [{ required: true, message: '请输入 银行账号!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="开户银行" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'bankName',
          {rules: [{ required: true, message: '请输入 开户银行!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="注册地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'registeredPlace',
          {rules: [{ required: true, message: '请输入 注册地址!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="电话号码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'registeredTelephone',
          {rules: [{ required: true, message: '请输入 电话号码!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="Email" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'email',
          {rules: [{ required: true, message: '请输入 Email!' }]}
        ]"
          />
        </a-form-item>

        <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
            placeholder="Select a option and change input text above"
          >
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item> -->
      </a-form>
      </div>
      <div v-show="value == 2">
        <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="姓名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="Email" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
            placeholder="Select a option and change input text above"
          >
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item> -->
      </a-form>
      </div>
    </a-modal>
  </div>
</template>
<script>
// import EditableCell from './EditableCell'
/*
 * EditableCell Code https://github.com/vueComponent/ant-design-vue/blob/master/components/table/demo/EditableCell.vue
 */
export default {
  //   components: {
  //     EditableCell,
  //   },
  data() {
    return {
      dataSource: [
        {
          key: '0',
          title: '融嘉合创',
          type: '公司',
          address: '56565645234234',
          time: '2019-05-08 16:13',
          name: 'batta'
        },
        {
          key: '1',
          title: '甘肃征信股份有限公司',
          type: '公司',
          address: '7856342423547',
          time: '2019-05-08 16:14',
          name: 'batta'
        }
      ],
      count: 2,
      columns: [
        {
          title: '发票抬头',
          dataIndex: 'title',
          width: '30%'
          // scopedSlots: { customRender: 'name' },
        },
        {
          title: '类型',
          dataIndex: 'type'
        },
        {
          title: '纳税人识别号',
          dataIndex: 'address'
        },
        {
          title: '创建时间',
          dataIndex: 'time'
        },
        {
          title: '创建人',
          dataIndex: 'name'
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      chakan: '',
      visible: false,
      visibles: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        float: 'left',
        paddingTop: '10px'
        
      },
    }
  },
  mounted: function() {},
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource]
      const target = dataSource.find(item => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.dataSource = dataSource
      }
    },
    onDelete(key) {
      let _this = this
      this.$confirm({
        title: '是否确认删除?',
        content: '删除后将不可恢复',
        okText: '是',
        okType: 'danger',
        cancelText: '否',
        onOk() {
          const dataSource = [..._this.dataSource]
          _this.dataSource = dataSource.filter(item => item.key !== key)
        },
        onCancel() {
          console.log('Cancel')
        }
      })
    },
    handleAdd() {
      const { count, dataSource } = this
      console.log(dataSource)
      const newData = {
        key: count,
        title: `Edward King ${count}`,
        age: 45,
        address: `London, Park Lane no. ${count}`
      }
      this.dataSource = [...dataSource, newData]
      this.count = count + 1
    },
    lookOver(record) {
      this.chakan = record
      this.visible = true
      console.log(
        '发票抬头：' +
          record.title +
          '类型：' +
          record.type +
          '纳税人识别号:' +
          record.address +
          '创建时间' +
          record.time +
          '创建人：' +
          record.name
      )
    },

    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    alter() {
      this.visibles = true
    },
    handleOks(e) {
      this.visibles = false
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(err)
        console.log(values)
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    onChange (e) {
      console.log('radio checked', e.target.value)
    },
  }
}
</script>
<style>
.back {
  background: #fff;
  padding: 10px;
}
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
.letaa {
  width: 100px;
  display: inline-block;
  text-align: right;
  padding-right: 10px;
  font-size: 14px;
  font-weight: bold;
}
.hint{
  font-size: 12px;
  line-height: 14px;
}
.type{
  padding-bottom: 10px;
}
.type .child{
  display: inline-block;
  width: 118px;
  text-align: right;
  margin-right: 5px;
  color: rgba(0, 0, 0, 0.85);
}
</style>  