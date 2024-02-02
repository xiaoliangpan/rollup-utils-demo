<h1 align="center">
rollup-utils-demo
</h1>

## 环境地址

### 物业服务评价平台

- 线上地址 https://pms.aicity.sensoro.com
- 测试地址 https://pms.aicity-test1.sensoro.com
- 开发地址 https://pms.aicity-dev1.sensoro.com
- 西宁地址 https://pms.xn.sensoro.vip/

## 环境变量

- S_API_BASE_URL 设置接口地址
- CONFIG_ENV 当前环境：dev1|test1|prod|vxining

## 开发流程

1. 克隆项目 `git@gitlab.sensoro.com:frontend/aicity/industry-application/aicity-smart-call.git`
2. 安装依赖 `pnpm i`
3. 项目根目录新建 `.env.local` 文件，并添加如下代码 `S_API_BASE_URL=https://lins-dev1-api.sensoro.com`
4. 启动项目 `pnpm start`

## 相关命令如下

```sh
# 构建代码
pnpm build

# 交互式提交git代码
pnpm commit

# eslint代码风格和语法检查
pnpm lint

# eslint代码风格和语法检查 并修复
pnpm lint:fix

# TS检查类型 先执行 pnpm lint
pnpm tsc

# TS检查类型 先执行 pnpm lint
pnpm release:version
```

# ✨ 特性

- 标准化UI 基于@sensoro-design/styles和@lins-material/components
- 插件化新内核
- 配置化的导航和页面权限控制
- 零配置的登录模块
- 日期组件和时间处理使用dayjs
- 零配置的前端资源更新提示
- 多环境配置化和构建产物可复用
- 配置话构建配置wasp.yaml
- 基于vite框架开发

## 说明

### 标准化UI

- 基于@sensoro-design/styles和@lins-material/components

### 插件化新内核

- 基于@sensoro/core

## 配置化的导航和页面权限控制

- 基于@lins-material/layout和@sensoro/core

### 零配置的登录模块

- 基于@lins-material/login和@sensoro/core

### 零配置的前端资源更新提示

- 基于@sensoro/dyna插件化机制实现更新插件

### 多环境配置化和构建产物可复用

- 基于 @import-meta-env/cli、vite的.env与运维开发定制
- 文档：[文档](https://juejin.cn/post/7293182931005636617)

### 配置话构建配置wasp.yaml

- 运维开发定制
- 文档：[文档](https://sensoro.yuque.com/ivn8up/yo30yr/tt237mkypplkwf3z)

### 基于vite框架开发

- 具体配置请查看 vite.config.ts
- 文档：[vite文档](https://cn.vitejs.dev/)
