
###如果缺少.babelrc文件 在项目中 `touch .babelrc`

```
// 新建.babelrc
{
  "presets": [
    ["es2015", {"modules": false}],
    // webpack现在已经支持原生的import语句了, 并且将其运用在tree-shaking特性上
    "stage-2",
    // 规定JS运用的语言规范层级
    // Stage 2 是 "草案", 4 是 "已完成", 0 is "稻草人(strawman)"。
    // 详情查看 https://tc39.github.io/process-document/
    "react"
    // 转译React组件为JS代码
  ],
  "plugins": [
    "react-hot-loader/babel",
    // 开启react代码的模块热替换（HMR）
    ["import", { "style": "css", "libraryName": "antd-mobile" }]
  ]
}
```
