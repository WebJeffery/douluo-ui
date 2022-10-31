import { createNamespace } from './utils/use-namespace.js'
import { updateElementTheme } from './utils/update-element-theme.js'
import { updateUITheme } from './utils/update-ui-theme.js'

// 注册组件
import Button from 'packages/element-ui/button/index.js'
import DatePicker from 'packages/element-ui/date-picker/index.js'
import TimePicker from 'packages/element-ui/time-picker/index.js'
import Radio from 'packages/element-ui/radio/index.js'
import RadioButton from 'packages/element-ui/radio-button/index.js'
import RadioGroup from 'packages/element-ui/radio-group/index.js'
import Checkbox from 'packages/element-ui/checkbox/index.js'
import CheckboxButton from 'packages/element-ui/checkbox-button/index.js'
import CheckboxGroup from 'packages/element-ui/checkbox-group/index.js'
import Form from 'packages/element-ui/form/index.js'
import FormItem from 'packages/element-ui/form-item/index.js'
import Input from 'packages/element-ui/input/index.js'
import Table from 'packages/element-ui/table/index.js'
import TableColumn from 'packages/element-ui/table-column/index.js'
import Empty from 'packages/element-ui/empty/index.js'
import Pagination from 'packages/element-ui/pagination/index.js'
import Dialog from 'packages/element-ui/dialog/index.js'
import Drawer from 'packages/element-ui/drawer/index.js'
import Popover from 'packages/element-ui/popover/index.js'
import Popconfirm from 'packages/element-ui/popconfirm/index.js'
import Tooltip from 'packages/element-ui/tooltip/index.js'
import Select from 'packages/element-ui/select/index.js'

const components = [
  Button,
  DatePicker,
  TimePicker,
  Radio,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn,
  Empty,
  Pagination,
  Dialog,
  Drawer,
  Popover,
  Popconfirm,
  Tooltip,
  Select
]

const install = (Vue, options = {}) => {
  // 判断是否安装
  if (install.installed) return
  install.installed = true

  components.forEach((component) => {
    Vue.component(createNamespace(component.name, { prefix: options.prefix }), component)
  })
}

// 判断调用vue加载器，实现全局加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// Vue.use 和按需加载都可以
export default {
  install,
  updateElementTheme,
  updateUITheme,
  ...components
}
