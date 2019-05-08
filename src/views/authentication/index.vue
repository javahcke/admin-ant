<template>
  <div class="font">
    <a-table
      :columns="columns"
      :rowKey="record => record.riqi"
      :dataSource="data"
      :pagination="pagination"
      
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">{{name.title}}</template>
     
    </a-table>
  </div>
</template>

<script>

const columns = [
  {
    title: '企业名称',
    dataIndex: 'name',
    //   sorter: true,
    //   width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '统一社会信用代码',
    dataIndex: 'xingyongdaima'
    //   filters: [
    //     { text: 'Male', value: 'male' },
    //     { text: 'Female', value: 'female' },
    //   ],
    //   width: '20%',
  },
  {
    title: '认证申请日期',
    dataIndex: 'riqi'
  },
  {
    title: '认证有效期',
    dataIndex: 'youxiaoqi'
  },
  {
    title: '审核意见',
    dataIndex: 'yijian'
  },
  {
    title: '认证描述',
    dataIndex: 'miaos'
  },
  {
    title: '联系电话',
    dataIndex: 'phone'
  },
  {
    title: '详情',
    dataIndex: 'info'
  }
]
export default {
  name: 'authentication',
  mounted() {
    // this.fetch()
  },
  data() {
    return {
      data: [{
            "gender": "male",
            "name": {
                "title": "百度",
                // "first": "sven",
                // "last": "dalby"
            },
            "xingyongdaima": "123123123123",
            "riqi": "2019-05-08",
            "login": {
                "uuid": "d2757f26-da19-4c4b-96ee-4da339583481",
                // "username": "tinyswan354",
                // "password": "grils",
                // "salt": "YMgJVpTY",
                // "md5": "29320b9b10fb6b127b23b8de5c8f1857",
                // "sha1": "b26a521ec938ab5027ea03714f1bde0a54ce2dbe",
                // "sha256": "e103ba709d94033399ec8d53ff6b414f37b873ccc3e9fbc21a4a3b1e6b818362"
            },
            "youxiaoqi":"2019-05-08",
            "yijian":"通过",
            "phone": "36352250",
            "miaos": "合格",
            "info": "",
            // "picture": {
            //     "large": "https://randomuser.me/api/portraits/men/21.jpg",
            //     "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
            //     "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
            // },
            // "nat": "NO"
        },
        {
            "gender": "male",
            "name": {
                "title": "百度",
                // "first": "sven",
                // "last": "dalby"
            },
            "xingyongdaima": "123123123123",
            "riqi": "2019-05-08",
            "login": {
                "uuid": "d2757f26-da19-4c4b-96ee-4da339583481",
                // "username": "tinyswan354",
                // "password": "grils",
                // "salt": "YMgJVpTY",
                // "md5": "29320b9b10fb6b127b23b8de5c8f1857",
                // "sha1": "b26a521ec938ab5027ea03714f1bde0a54ce2dbe",
                // "sha256": "e103ba709d94033399ec8d53ff6b414f37b873ccc3e9fbc21a4a3b1e6b818362"
            },
            "youxiaoqi":"2019-05-08",
            "yijian":"通过",
            "phone": "36352250",
            "miaos": "合格",
            "info": "",
            // "picture": {
            //     "large": "https://randomuser.me/api/portraits/men/21.jpg",
            //     "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
            //     "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
            // },
            // "nat": "NO"
        },
        {
            "gender": "male",
            "name": {
                "title": "百度",
                // "first": "sven",
                // "last": "dalby"
            },
            "xingyongdaima": "123123123123",
            "riqi": "2019-05-08",
            "login": {
                "uuid": "d2757f26-da19-4c4b-96ee-4da339583481",
                // "username": "tinyswan354",
                // "password": "grils",
                // "salt": "YMgJVpTY",
                // "md5": "29320b9b10fb6b127b23b8de5c8f1857",
                // "sha1": "b26a521ec938ab5027ea03714f1bde0a54ce2dbe",
                // "sha256": "e103ba709d94033399ec8d53ff6b414f37b873ccc3e9fbc21a4a3b1e6b818362"
            },
            "youxiaoqi":"2019-05-08",
            "yijian":"通过",
            "phone": "36352250",
            "miaos": "合格",
            "info": "",
            // "picture": {
            //     "large": "https://randomuser.me/api/portraits/men/21.jpg",
            //     "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
            //     "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
            // },
            // "nat": "NO"
        }],
      pagination: {
          position:'bottom'
      },
      loading: false,
      columns
    }
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
   
  }
}
</script>

<style scoped>
.font{
    background: #fff;   
    padding: 10px 10px;
}
</style>
