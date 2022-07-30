import { colorPalette } from '../index'

/**
 * 金牌会员
 *
 *
 */

const themeColor = {
    '--app-primary-color': '#ffaa00',
    '--app-primary-color-hover': colorPalette('#ffb600', 0.1),
    '--app-primary-bg-color': '#231909',
    // bg
    '--app-primary-bg-hover': colorPalette('#ffaa00', 0.08)
}

export default {
    ...themeColor,

    // 按钮
    '--btn-primary-color': themeColor['--app-primary-color'],
    '--btn-primary-ghost-color': themeColor['--app-primary-color'],
    '--btn-primary-plain-color': themeColor['--app-primary-color'],

    '--btn-primary-bg': themeColor['--app-primary-bg-color'],
    '--btn-primary-plain-bg': themeColor['--app-primary-color-hover'],

    '--btn-primary-border-color': themeColor['--app-primary-bg-color'],
    '--btn-primary-ghost-border-color': colorPalette(themeColor['--app-primary-color'], 0.4),

    // 导航
    '--tabs-highlight-color': themeColor['--app-primary-color'],

    // 输入框
    '--input-hover-border-color': themeColor['--app-primary-color'],

    // 多选框
    '--checkbox-check-bg': themeColor['--app-primary-color'],

    // 分页
    '--pagination-caret-reverse': themeColor['--app-primary-color'],
    '--pagination-item-bg-active': themeColor['--app-primary-color'],
    '--pagination-item-hover-color': themeColor['--app-primary-color'],
    '--pagination-dropdown-hover-bg': themeColor['--app-primary-color-hover'],
    '--pagination-dropdown-hover-color': themeColor['--app-primary-color'],
    '--pagination-dropdown-selected-color': themeColor['--app-primary-color'],

    // 单选框
    '--radio-check-bg': themeColor['--app-primary-color'],
    '--radio-button-color': themeColor['--app-primary-color'],
    '--radio-button-bg': themeColor['--app-primary-bg-color'],
    '--radio-button-hover-color': themeColor['--app-primary-color'],

    // 选择器
    '--select-caret-reverse': themeColor['--app-primary-color'],
    '--select-dropdown-hover-bg': themeColor['--app-primary-color-hover'],
    '--select-dropdown-hover-color': themeColor['--app-primary-color'],
    '--select-dropdown-selected-color': themeColor['--app-primary-color'],

    // 链接
    '--link-color': themeColor['--app-primary-color'],
    '--link-hover-color': themeColor['--app-primary-color-hover'],

    // 标签
    '--tag-color': themeColor['--app-primary-color'],
    '--tag-bg': themeColor['--app-primary-color-hover'],

    // 开关
    '--switch-check-bg': themeColor['--app-primary-color'],

    // 下拉选择
    '--dropdown-menu-hover-bg': themeColor['--app-primary-color-hover'],
    '--dropdown-menu-hover-color': themeColor['--app-primary-color'],

    // 步骤条
    '--steps-active-bg': themeColor['--app-primary-color-hover'],
    '--steps-active-color': themeColor['--app-primary-color'],

    // 日历
    '--datepicker-color': themeColor['--app-primary-color'],
    '--datepicker-background-color': themeColor['--app-primary-color']
}
