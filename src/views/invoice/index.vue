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
            <a href="javascript:;">修改</a>丨
            <a href="javascript:;" @click="onDelete(record.key)">删除</a>
        <!-- </a-popconfirm > -->
      </template>
    </a-table>
    <a-modal
      width="622px"
      title="查看发票订单"
      v-model="visible"
      :footer="null"
      @ok="handleOk"
    >
      <p><span class="letaa">发票抬头:</span>{{this.chakan.title}}</p>
      <p><span class="letaa">类型:</span>{{this.chakan.type}}</p>
      <p><span class="letaa">纳税人识别号:</span>{{this.chakan.address}}</p>
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
  data () {
    return {
      dataSource: [
        {
            key: '0',
            title: '融嘉合创',
            type: '公司',
            address: '56565645234234',
            time:'2019-05-08 16:13',
            name:'batta'
        }, 
        {
            key: '1',
            title: '甘肃征信股份有限公司',
            type: '公司',
            address: '7856342423547',
            time:'2019-05-08 16:14',
            name:'batta'
        }],
        count: 2,
        columns: [{
            title: '发票抬头',
            dataIndex: 'title',
            width: '30%',
            // scopedSlots: { customRender: 'name' },
        }, {
            title: '类型',
            dataIndex: 'type',
        }, {
            title: '纳税人识别号',
            dataIndex: 'address',
        }, 
        {
            title: '创建时间',
            dataIndex: 'time',
        },
        {
            title: '创建人',
            dataIndex: 'name',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
        }
      ],
        chakan:"",
        visible:false
    }
  },
  mounted: function(){
      
  },
  methods: {
    onCellChange (key, dataIndex, value) {
        const dataSource = [...this.dataSource]
        const target = dataSource.find(item => item.key === key)
        if (target) {
          target[dataIndex] = value
          this.dataSource = dataSource
        }
    },
    onDelete (key) {
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
          console.log('Cancel');
        },
      });
      
    },
    handleAdd () {
      const { count, dataSource } = this
      console.log( dataSource)
      const newData = {
        key: count,
        title: `Edward King ${count}`,
        age: 45,
        address: `London, Park Lane no. ${count}`,
      }
      this.dataSource = [...dataSource, newData]
      this.count = count + 1
    },
    lookOver (record){
        this.chakan = record;
        this.showModal()
        console.log("发票抬头："+record.title+"类型："+record.type+"纳税人识别号:"+record.address+"创建时间"+record.time+"创建人："+record.name)
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e);
      this.visible = false
    },
  },
}
</script>
<style>
.back{
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
.letaa{
    width: 100px;
    display: inline-block;
    text-align: right;
    padding-right: 10px;
    font-size: 14px;
    font-weight: bold;
}
</style>