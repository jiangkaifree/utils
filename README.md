# Utils

收集整理的一些 `Utils`，包含正则、常用方法、基础封装等 

## PR

如果您觉得对你有所帮助，您也成功在项目当中得到运用。 同时也非常欢迎您提交您的补充和PR


## 运行

1. 安装依赖

使用 `yarn` 、`npm` 或者 `pnpm` 安装项目依赖，推荐使用 `pnpm`

2. 运行项目

```bash
# 开发
$ pnpm dev
```

3. 编译部署

```bash
# 编译前项目检测
$ pnpm doctor`

#编译项目文档
$ pnpm docs:build

#编译项目源码
$ pnpm build

# 发布 npm 包
$ npm publish
```

> 注意：发布 `npm` 前需要修改版本信息, 不然安装使用很可能导致并不是最新的版本。更多关于版本查看 /docs/guide/changelog.md

## 文件目录

```tree
|--- docs/ 项目文档
|--- src/ 项目代码
|---  |--- sm3/ sm3 加密算法
|---  |--- sm4/ sm4 加密算法
|---  |--- utils/
|---  |---  |--- constants 常量
|---  |---  |--- utils xhr封装
|---  |--- index 入口文件
|---  |--- type.d.ts 类型定义
|--- .dumirc.ts dumi配置
|--- .fatherrc.ts father配置
|--- rollup.config.ts rollup配置
```
