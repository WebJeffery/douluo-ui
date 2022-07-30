<template>
  <div>
    <h2>NwQueryList</h2>
    <h3>查询列表，整合了NwFormQuery、NwTable、NwPagination</h3>
    <NwQueryList
      ref="queryList"
      :formConfig="baseConfig"
      :buttons="buttons"
      :column="columnTitle"
      :reqFunc="reqFunc"
      :fmtParams="fmtParams"
    >
      <el-table-column
        slot="options"
        label="操作"
        width="180"
        fixed="right"
      >
        <template slot-scope="{ row }">
          <el-button type="text" :status="row.status">编辑</el-button>
        </template>
      </el-table-column>
    </NwQueryList>

    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
import readmeTxt from 'packages/element-ui/querylist/src/README.md'

export default {
  data() {
    return {
      readmeTxt,
      baseConfig: {
        keyword: {
          type: 'input',
          label: '活动搜索',
          $attrs: {
            placeholder: '活动名称/活动ID'
          }
        },
        activity_state: {
          type: 'select',
          label: '活动状态',
          options: []
        }
      },
      buttons: [
        {
          label: '查询',
          type: 'primary',
          span: 10,
          func: () => this.$refs.queryList.search()
        },
        {
          label: '重置',
          func: () => this.$refs.queryList.reset()
        }
      ],
      columnTitle: [
        {
          label: '活动ID',
          prop: 'id'
        },
        {
          label: '活动名称',
          prop: 'activity_name'
        },
        {
          label: '活动对象',
          prop: 'activity_object'
        },
        {
          label: '状态',
          prop: 'activity_state'
        },
        {
          label: '活动开始时间',
          prop: 'start_time'
        },
        {
          label: '活动结束时间',
          prop: 'end_time'
        }
      ],
      reqFunc: this.getList
    }
  },
  methods: {
    // 格式参数
    fmtParams(data) {
      if (data.keyword) {
        const key = Number(data.keyword) ? 'activity_id' : 'activity_name'
        data[key] = data.keyword
      }
      delete data.keyword
      return data
    },
    getList() {
      return new Promise(resolve => {
        this.timeout && clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          resolve(
            {
              "result_code": 1,
              "error_code": "200",
              "error_msg": "OK",
              "data": {
                "list": [
                  {
                    "id": Date.now(),
                    "activity_type": 6,
                    "activity_name": "医拉医测试活动",
                    "activity_url": "https://docwechat.91160.com/vue/docPullDoc/index?activity_id=107",
                    "start_time": "2021-10-20 00:00:00",
                    "end_time": "2021-10-28 23:59:59",
                    "status": 0,
                    "bonus_pools_state": 0,
                    "add_time": 1634804663,
                    "upd_time": 1635487014,
                    "is_polymerize": 0,
                    "create_user": "测试环境超管",
                    "activity_state": 3,
                    "give_reward_type": 0,
                    "activity_object": "已认证"
                  }
                ],
                "total": 11
              }
            }
          )
        }, 3000 * Math.random())
      })
    }
  }
}
</script>
