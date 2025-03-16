# Offer  智选 - Offer Wise

大数据和人工智能助你选出最适合你的 Offer。

## 主要功能 💡

- 接受 个人及 Offer 的关键信息的输入
- 利用大数据和人工智能，给你的 Offer 进行评估
- 给出 Offer 的综合评分及选择建议

## 技术架构 TODO List 🛠️

- 项目技术选型
  - [x] **Vite** - 构建工具
  - [x] **React** - 前端框架
  - [x] **TypeScript** - 类型保护
  - [x] **Tailwind CSS** - CSS 框架
  - [x] **NextUI** - React 组件库
- ESLint
  - [x] TailwindCSS 类提示及类排序
  - [x] React Hooks 规则
  - [x] 依赖包自动排序
- 路由
  - [x] React Router
- 依赖包免导入
  - [x] react
  - [x] react-router-dom
  - [x] react-i18next
  - [x] ahooks
- 国际化 i18n
  - [x] 中文
  - [x] 英文
  - [x] 储存用户选择
- Dark Mode
  - [x] 深浅色模式切换
  - [x] 储存用户选择
- 主题颜色
  - [ ] 全局设置
  - [ ] 相应的深浅色模式
- README.md
  - [x] 中文
  - [ ] 英文
- CICD
  - Github Action
  - 在线浏览部署
- 测试
  - Unit Test
  - Integration Test
- 前后端交互
  - 前端
    - React Query
    - Ahooks - useRequest
  - 后端
    - Node.js
    - 数据库
- 接入 AI
  - 供应商
  - 性能/价格
  - DeepSeek ?
- 云服务
  - 品牌
  - 性能/价格
- 多端应用
  - Web
  - 小程序
  - 原生 App

## 功能 TODO List 📝

- [ ] 用户输入
  - 工作经验
  - Offer 薪资（基本薪资、年终奖、签字费、股票期权）
  - 其他福利（如健康保险、年假等）
  - 工作时长
  - 工作生活平衡（如远程工作选项、灵活工作时间）
  - 城市
  - 所属行业
- [ ] 数据获取
  - 数据源
    - [Numbeo](https://www.numbeo.com): 一个用户驱动的数据库，提供全球各城市的生活成本、住房、医疗、污染、交通等信息。
    - [Mercer](https://www.mercer.com): 发布全球城市生活质量排名和生活成本调查，适合了解具体城市的宜居性和生活成本。
    - [世界银行](https://www.worldbank.org): 提供全球范围的经济、社会发展数据，包括生活水平、收入分配、贫困率等。部分数据可以细化到城市或地区级别。
  - 城市平均薪资
  - 城市行业平均薪资
  - 城市发展水平
    - 经济发展：GDP、就业率、平均收入等
    - 基础设施：交通便利性、公共设施质量等
  - 城市生活成本
    - 住房成本：房租、中位数房价等
    - 日常开销：食品、交通、娱乐等费用
  - 城市人类发展指数
  - 城市宜居指数
    - 环境质量：空气质量、水质等
    - 安全性：犯罪率、自然灾害风险等
- [ ] 结论生成（多语言）
  - 评分
  - 分析
  - 建议

## 商业化探索 TODO List 💼

- 用户获取
  - 目标用户
  - 营销推广
- 免费
  - 成本
  - 可持续性
- 订阅制
  - 用户付费意愿
- 一次性购买
- 广告
  - 用户体验
  - 内容可控性
- 其他
  - 赞助
  - 融资

## 思考点 🤔

- 法律和合规
  - 如何爬取数据？
  - 如何确保用户数据安全性？
  - 如何避免从入门到入狱？
- 数据源
  - 全国/全球各地的数据源
  - 可信度

## 安装和使用 🚀

1. 克隆仓库

   ```bash
   git clone https://github.com/ChuYang-FE/offer-wise.git
   ```

2. 安装依赖

   ```bash
   cd offer-wise
   pnpm install
   ```

3. 启动开发服务器

   ```bash
   pnpm run dev
   ```

4. 打包应用

   ```bash
   pnpm run build
   ```
