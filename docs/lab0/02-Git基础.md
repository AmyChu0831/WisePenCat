# Git 基础

Git 是记录代码变化的工具。你可以把它理解成一个有历史记录的项目文件夹：每次提交都会留下一个可追踪的版本。

## 三个区域

- **工作区**：你正在编辑的文件。
- **暂存区**：你准备放进下一次提交的文件。
- **本地仓库**：已经提交到 Git 历史中的版本。

查看当前状态：

```bash
git status
```

## 一次完整提交

```bash
git add src/contributors.json src/assets/你的名字.png
git commit -m "feat: 添加贡献者信息"
```

`git add` 把文件放进暂存区，`git commit` 把暂存区内容记录进本地历史。提交前再次运行 `git status`，确认没有把不相关的文件一起放进去。

## 分支

不要直接在 `main` 上长期开发。为 Lab0 建一个自己的分支：

```bash
git switch -c lab0/你的用户名
```

查看当前分支：

```bash
git branch --show-current
```

分支只是另一条独立的提交记录。它能让你的修改保持清晰，也方便 Pull Request 对比。

## 远程仓库

查看远程地址：

```bash
git remote -v
```

提交后把当前分支上传到自己的 Fork：

```bash
git push -u origin lab0/你的用户名
```

这里的 `origin` 通常指向你的 Fork。第一次 push 使用 `-u` 后，后续只需运行 `git push`。

## 两个重要习惯

1. 经常运行 `git status`，不要凭感觉判断文件状态。
2. 一次提交只做一件事情。Lab0 的提交应该只包含 contributor、头像和必要的文档改动。
