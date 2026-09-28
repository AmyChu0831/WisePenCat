# WisePenCat

WisePen 入门实验仓库。Lab0 的目标是把项目跑起来，并通过一个 Pull Request 把自己的名字加入贡献者列表。

## 本地运行

需要 Node.js 20.19+ 或 22.12+。

```bash
npm install
npm run dev
```

打开终端显示的本地地址。`npm run build` 用于检查类型并生成生产构建。

## Lab0：加入贡献者列表

1. Fork 仓库并克隆到本地，安装依赖后确认页面能打开。
2. 把头像文件放进 [`src/assets`](src/assets)，文件名必须是自己的用户名，例如 `你的名字.png`。支持 PNG、JPG、JPEG 和 WebP。
3. 打开 [`src/contributors.json`](src/contributors.json)，在数组中加入自己的名字。例如：

   ```json
   ["你的名字"]
   ```

   如果已经有人在列表中，请在原有名字后加逗号，再新增一项。不要删除别人的名字。
4. 在本地确认「贡献者」页面显示了自己的名字和头像，然后提交改动并向本仓库发起 Pull Request。

## 项目结构

- `src/contributors.json`：贡献者用户名列表。
- `src/assets`：按“用户名.png”命名的贡献者头像。
- `src/views/ContributorsView.tsx`：贡献者页面。
- `src/views/DebugView.tsx`：Agent 状态调试页面。
- `src/server/agent.ts`：本地模拟的 Agent 状态接口；目前不需要启动后端服务。

## 常用命令

```bash
npm run dev        # 启动开发服务器
npm run typecheck  # 检查 TypeScript
npm run build      # 构建静态页面
```
