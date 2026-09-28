# 提交 Pull Request

Pull Request（PR）是把你分支里的改动请求合并到主仓库。它不是把整个仓库上传一遍，而是让维护者审查一组清晰的差异。

## 开始前

确认以下命令都通过：

```bash
git status
npm run typecheck
npm run build
```

确认 contributor 页面中显示了自己的名字和头像，并且没有删除别人的名字。

## 推送分支

```bash
git push -u origin lab0/你的用户名
```

打开 GitHub 上的仓库页面，通常会看到“Compare & pull request”按钮。点击后确认：

- **base repository** 是 WisePenCat 主仓库。
- **base branch** 是 `main`。
- **head repository** 是你的 Fork。
- **compare branch** 是你的 `lab0/你的用户名` 分支。

## PR 描述怎么写

可以直接使用下面的结构：

```markdown
## 做了什么
- 在 contributor 列表中加入：你的用户名
- 添加头像：src/assets/你的用户名.png

## 如何验证
- npm run typecheck
- npm run build
- 本地页面确认名字和头像正确显示
```

标题保持具体，例如：`feat: 添加 zhangsan 为 contributor`。

## Review 之后

维护者可能会留言要求修改。修改同一个分支后再次提交并 push，PR 会自动更新：

```bash
git add <修改过的文件>
git commit -m "fix: 调整 contributor 头像"
git push
```

不要为了“重新提交一个 PR”关闭原 PR 再开一个。先读清楚评论，再在原分支继续修改。
