<template>
  <div>
    <h2>NwTable</h2>
    <h3 class="pb10">表格</h3>
    <NwTable
      :tableData="tableData"
      :column="columnTitle"
    >
      <el-table-column
        slot="options"
        label="操作"
        width="150"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-button type="text" :status="scope.row.status">编辑</el-button>
        </template>
      </el-table-column>
    </NwTable>

    <ShowMark v-model="readmeTxt" />
  </div>
</template>
<script>
import readmeTxt from 'packages/element-ui/table/src/README.md'

export default {

  data() {
    return {
      readmeTxt,
      columnTitle: [
        {
          label: '类型名称',
          prop: 'deviceTypeName',
          minWidth: 100
        },
        {
          label: '是否回收',
          prop: 'isRecover',
          width: 90,
          options: [
            { label: '是', value: 'yes' },
            { label: '否', value: 'no' }
          ]
        },
        {
          label: '状态',
          prop: 'status',
          width: 150,
          flagOnOff: true,
          options: [
            { label: '启用', value: 'yes' },
            { label: '停用', value: 'no' }
          ]
        },
        {
          label: '备注',
          prop: 'remark',
          minWidth: 200,
          // 多级表头配置
          children: [
            {
              label: '备注1',
              prop: 'remark'
            },
            {
              label: '备注2',
              prop: 'remark'
            }
          ]
        },
        // 支持自定义
        {
          label: '标识图片',
          prop: 'fileUrl',
          minWidth: 100,
          render: (h, params) => {
            // 方式一
            return [
              h('img', {
                attrs: {
                  src: params.row.fileUrl,
                  alt: '图片'
                },
                style: {
                  width: '40px',
                  height: '30px',
                  backgroundSize: '100%'
                }
              }, params.row.fileUrl)
            ]
            // 方式2
            // return (<img src={params.row.fileUrl} alt="图片">)
          }
        },
        {
          label: '任务名称',
          prop: 'taskName',
          minWidth: 150,
          style: {
            color: '#567CDB',
            cursor: 'pointer'
          },
          click: (index, row) => this.$router.push({ path: 'taskDetail', query: { id: row.id }})
        },
        {
          label: '人数/总人数',
          prop: 'percentage',
          minWidth: 200,
          // 格式组装数据
          format: (row, prop) => `${row.finishPeople}/${row.totalJoinPeopleCount}`
        },
        {
          label: '时间',
          prop: 'createTime',
          // 过滤时间，相关方法看nyTable/filter文件
          filter: 'time'
        }
      ],
      tableData: [
        {
          typeName: '类型2',
          isRecover: 'no',
          isStandard: 'no',
          status: 'no',
          taskName: '任务2',
          finishPeople: 1,
          fileUrl: 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/brand.82c24770.svg',
          totalJoinPeopleCount: 100
        }
      ],
      pageInfo: {}
    }
  },
  methods: {
  }
}
</script>

