# 🥗 30天健康餐单

30天减脂饮食计划网页，按天查看固定早餐与晚餐，支持打卡记录和自动定位今天。

## ✨ 功能

- 📋 内置完整 **30天固定餐单**（早餐＋晚餐）
- 📅 左右翻页浏览每一天，自动显示所在周次
- ✅ **打卡功能**：记录已完成的天数（存储在浏览器本地）
- 🎯 **跳到今天**：设置计划开始日期后，自动定位当前应吃第几天
- 📱 响应式，手机电脑均可正常显示

## 🚀 部署到 GitHub Pages

### 使用 Git 命令行

```bash
git init
git add .
git commit -m "🥗 30天健康餐单"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

然后进入仓库 **Settings → Pages → Source** 选择 `main` 分支根目录，保存后约1分钟即可访问：

```
https://<你的用户名>.github.io/<仓库名>/
```

## 📁 文件结构

```
.
├── index.html   # 页面结构
├── style.css    # 样式（绿色健康主题）
├── script.js    # 30天餐单数据与交互逻辑
└── README.md    # 说明
```

## 🛠️ 修改餐单

编辑 `script.js` 顶部的 `plan` 数组，每个对象对应一天：

```js
{
  week: 1, day: 1,
  breakfast: ["鸡蛋2个", "无糖豆浆 250ml", "燕麦片 30g"],
  dinner:    ["清蒸鱼 120g", "水煮西兰花 250g", "玉米半根 100g"]
}
```

## 📄 License

MIT
