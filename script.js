// ============================================================
//  30天健康餐单 — 固定餐单数据 + 交互逻辑
// ============================================================

const plan = [
  // ── 第1周 ──
  {
    week: 1, day: 1,
    breakfast: ["鸡蛋2个", "无糖豆浆 250ml", "燕麦片 30g"],
    dinner:    ["清蒸鱼 120g", "水煮西兰花 250g", "玉米半根 100g"]
  },
  {
    week: 1, day: 2,
    breakfast: ["鸡蛋1个", "全麦面包1片", "无糖酸奶 150g", "小番茄 100g"],
    dinner:    ["鸡胸肉120g炒青椒150g", "凉拌黄瓜 150g", "红薯 100g"]
  },
  {
    week: 1, day: 3,
    breakfast: ["豆腐脑 250g（少卤）", "鸡蛋1个", "玉米半根 100g"],
    dinner:    ["豆腐白菜汤（豆腐150g＋白菜200g）", "煎鸡腿肉去皮 100g", "凉拌木耳 100g"]
  },
  {
    week: 1, day: 4,
    breakfast: ["鸡蛋2个", "牛奶 250ml", "燕麦片 30g"],
    dinner:    ["清蒸虾 120g", "蒜蓉菠菜 200g", "杂粮饭 100g"]
  },
  {
    week: 1, day: 5,
    breakfast: ["鸡蛋1个", "无糖酸奶 150g", "全麦面包1片", "黄瓜半根 100g"],
    dinner:    ["番茄豆腐汤（番茄100g＋豆腐100g）", "瘦牛肉100g炒芹菜150g", "玉米半根 100g"]
  },
  {
    week: 1, day: 6,
    breakfast: ["鸡蛋2个", "无糖豆浆 250ml", "红薯 100g"],
    dinner:    ["清蒸鸡胸肉 120g", "水煮生菜 200g", "凉拌海带丝 100g"]
  },
  {
    week: 1, day: 7,
    breakfast: ["鸡蛋1个", "牛奶 250ml", "燕麦片 30g", "小番茄 100g"],
    dinner:    ["冬瓜汤 200ml", "清蒸鱼 120g", "炒青菜 200g", "红薯 100g"]
  },

  // ── 第2周 ──
  {
    week: 2, day: 8,
    breakfast: ["鸡蛋2个", "无糖酸奶 150g", "玉米半根 100g"],
    dinner:    ["鸡胸肉沙拉（鸡胸肉100g＋生菜100g＋黄瓜100g＋番茄100g＋少油醋汁）", "红薯 100g"]
  },
  {
    week: 2, day: 9,
    breakfast: ["豆腐脑 250g（少卤）", "鸡蛋1个", "全麦面包1片"],
    dinner:    ["清蒸虾 120g", "蒜蓉西兰花 200g", "杂粮饭 100g"]
  },
  {
    week: 2, day: 10,
    breakfast: ["鸡蛋2个", "无糖豆浆 250ml", "燕麦片 30g"],
    dinner:    ["番茄鸡蛋汤（少油）", "煎鸡腿肉去皮 100g", "凉拌黄瓜 150g"]
  },
  {
    week: 2, day: 11,
    breakfast: ["鸡蛋1个", "牛奶 250ml", "红薯 100g", "小番茄 100g"],
    dinner:    ["清蒸鱼 120g", "水煮菠菜 200g", "玉米半根 100g"]
  },
  {
    week: 2, day: 12,
    breakfast: ["鸡蛋2个", "无糖酸奶 150g", "全麦面包1片"],
    dinner:    ["豆腐海带汤（豆腐100g＋海带50g）", "瘦牛肉100g炒青椒150g", "凉拌木耳 100g"]
  },
  {
    week: 2, day: 13,
    breakfast: ["鸡蛋1个", "无糖豆浆 250ml", "燕麦片 30g", "黄瓜半根 100g"],
    dinner:    ["鸡胸肉100g炒西兰花200g", "凉拌番茄 150g", "红薯 100g"]
  },
  {
    week: 2, day: 14,
    breakfast: ["鸡蛋2个", "牛奶 250ml", "玉米半根 100g"],
    dinner:    ["冬瓜虾仁汤（冬瓜200g＋虾仁80g）", "清蒸鸡胸肉 100g", "炒青菜 200g"]
  },

  // ── 第3周 ──
  {
    week: 3, day: 15,
    breakfast: ["鸡蛋1个", "无糖酸奶 150g", "燕麦片 30g", "小番茄 100g"],
    dinner:    ["清蒸鱼 120g", "蒜蓉菠菜 200g", "杂粮饭 100g"]
  },
  {
    week: 3, day: 16,
    breakfast: ["豆腐脑 250g（少卤）", "鸡蛋1个", "红薯 100g"],
    dinner:    ["番茄豆腐汤（番茄100g＋豆腐100g）", "鸡胸肉100g炒青椒150g", "凉拌黄瓜 150g"]
  },
  {
    week: 3, day: 17,
    breakfast: ["鸡蛋2个", "无糖豆浆 250ml", "全麦面包1片"],
    dinner:    ["清蒸虾 120g", "水煮西兰花 250g", "玉米半根 100g"]
  },
  {
    week: 3, day: 18,
    breakfast: ["鸡蛋1个", "牛奶 250ml", "燕麦片 30g", "黄瓜半根 100g"],
    dinner:    ["冬瓜汤 200ml", "瘦牛肉100g炒芹菜150g", "凉拌海带丝 100g", "红薯 100g"]
  },
  {
    week: 3, day: 19,
    breakfast: ["鸡蛋2个", "无糖酸奶 150g", "玉米半根 100g"],
    dinner:    ["清蒸鸡胸肉 120g", "蒜蓉生菜 200g", "杂粮饭 100g"]
  },
  {
    week: 3, day: 20,
    breakfast: ["鸡蛋1个", "无糖豆浆 250ml", "红薯 100g", "小番茄 100g"],
    dinner:    ["番茄鸡蛋汤（少油）", "清蒸鱼 120g", "炒青菜 200g"]
  },
  {
    week: 3, day: 21,
    breakfast: ["鸡蛋2个", "牛奶 250ml", "燕麦片 30g"],
    dinner:    ["豆腐白菜汤（豆腐100g＋白菜200g）", "煎鸡腿肉去皮 100g", "凉拌木耳 100g"]
  },

  // ── 第4周 ──
  {
    week: 4, day: 22,
    breakfast: ["鸡蛋1个", "无糖酸奶 150g", "全麦面包1片", "黄瓜半根 100g"],
    dinner:    ["清蒸虾 120g", "蒜蓉西兰花 200g", "玉米半根 100g"]
  },
  {
    week: 4, day: 23,
    breakfast: ["豆腐脑 250g（少卤）", "鸡蛋1个", "燕麦片 30g"],
    dinner:    ["鸡胸肉100g炒青椒150g", "凉拌黄瓜 150g", "红薯 100g"]
  },
  {
    week: 4, day: 24,
    breakfast: ["鸡蛋2个", "无糖豆浆 250ml", "玉米半根 100g"],
    dinner:    ["冬瓜汤 200ml", "清蒸鱼 120g", "水煮菠菜 200g", "杂粮饭 100g"]
  },
  {
    week: 4, day: 25,
    breakfast: ["鸡蛋1个", "牛奶 250ml", "红薯 100g", "小番茄 100g"],
    dinner:    ["番茄豆腐汤（番茄100g＋豆腐100g）", "瘦牛肉100g炒芹菜150g", "凉拌海带丝 100g"]
  },
  {
    week: 4, day: 26,
    breakfast: ["鸡蛋2个", "无糖酸奶 150g", "燕麦片 30g"],
    dinner:    ["清蒸鸡胸肉 120g", "蒜蓉生菜 200g", "玉米半根 100g"]
  },
  {
    week: 4, day: 27,
    breakfast: ["鸡蛋1个", "无糖豆浆 250ml", "全麦面包1片", "黄瓜半根 100g"],
    dinner:    ["豆腐海带汤（豆腐100g＋海带50g）", "清蒸虾 120g", "炒青菜 200g", "红薯 100g"]
  },
  {
    week: 4, day: 28,
    breakfast: ["鸡蛋2个", "牛奶 250ml", "玉米半根 100g"],
    dinner:    ["番茄鸡蛋汤（少油）", "煎鸡腿肉去皮 100g", "凉拌木耳 100g"]
  },
  {
    week: 4, day: 29,
    breakfast: ["鸡蛋1个", "无糖酸奶 150g", "燕麦片 30g", "小番茄 100g"],
    dinner:    ["清蒸鱼 120g", "蒜蓉菠菜 200g", "杂粮饭 100g"]
  },
  {
    week: 4, day: 30,
    breakfast: ["豆腐脑 250g（少卤）", "鸡蛋1个", "红薯 100g"],
    dinner:    ["冬瓜虾仁汤（冬瓜200g＋虾仁80g）", "鸡胸肉100g炒西兰花200g", "凉拌黄瓜 150g"]
  }
];

// ============================================================
//  状态
// ============================================================

let currentIndex = 0; // 0-based index into plan[]

// 已打卡天数集合（存 day 编号 1-30）
function getCheckins() {
  return new Set(JSON.parse(localStorage.getItem('checkins') || '[]'));
}
function saveCheckins(set) {
  localStorage.setItem('checkins', JSON.stringify([...set]));
}

// 开始日期（第1天对应的 ISO 日期字符串 "YYYY-MM-DD"）
function getStartDate() {
  return localStorage.getItem('startDate') || null;
}

// ============================================================
//  渲染
// ============================================================

function render() {
  const entry = plan[currentIndex];

  // 星期徽章
  document.getElementById('weekBadge').textContent = `第 ${entry.week} 周`;

  // 天数
  document.getElementById('dayNum').textContent = entry.day;

  // 进度条
  const pct = (entry.day / 30 * 100).toFixed(1);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = `${entry.day} / 30`;

  // 打卡数
  const checkins = getCheckins();
  document.getElementById('checkinCount').textContent = `已打卡 ${checkins.size} 天`;

  // 打卡按钮
  const btn = document.getElementById('checkinBtn');
  const icon = document.getElementById('checkinIcon');
  if (checkins.has(entry.day)) {
    btn.classList.add('checked');
    icon.textContent = '✓';
    btn.title = '点击取消打卡';
  } else {
    btn.classList.remove('checked');
    icon.textContent = '○';
    btn.title = '点击打卡';
  }

  // 早餐
  renderFoodList('breakfastList', entry.breakfast);
  // 晚餐
  renderFoodList('dinnerList', entry.dinner);

  // 导航按钮
  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('nextBtn').disabled = currentIndex === plan.length - 1;
}

function renderFoodList(id, items) {
  const ul = document.getElementById(id);
  // 触发重绘动画：先清空，requestAnimationFrame 再填入
  ul.innerHTML = '';
  requestAnimationFrame(() => {
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  });
}

// ============================================================
//  导航
// ============================================================

function navigate(delta) {
  const next = currentIndex + delta;
  if (next < 0 || next >= plan.length) return;
  currentIndex = next;
  render();
}

function goToToday() {
  const startDate = getStartDate();
  if (!startDate) {
    document.querySelector('.setup-panel').setAttribute('open', '');
    document.getElementById('setupHint').textContent = '请先设置开始日期，才能自动跳到今天。';
    return;
  }
  const start = new Date(startDate + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today - start) / 86400000);
  const planIndex = diffDays % plan.length;
  currentIndex = planIndex < 0 ? 0 : planIndex;
  render();
}

// ============================================================
//  打卡
// ============================================================

function toggleCheckin() {
  const day = plan[currentIndex].day;
  const checkins = getCheckins();
  if (checkins.has(day)) {
    checkins.delete(day);
  } else {
    checkins.add(day);
  }
  saveCheckins(checkins);
  render();
}

// ============================================================
//  开始日期设置
// ============================================================

function saveStartDate() {
  const val = document.getElementById('startDateInput').value;
  if (!val) {
    document.getElementById('setupHint').textContent = '请选择一个日期。';
    return;
  }
  localStorage.setItem('startDate', val);
  const d = new Date(val + 'T00:00:00');
  const fmt = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
  document.getElementById('setupHint').textContent = `✅ 已保存：${fmt} 为第1天`;
}

// ============================================================
//  实时日期 & 初始化
// ============================================================

function renderRealDate() {
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const now = new Date();
  const str = `${now.getFullYear()} 年 ${now.getMonth()+1} 月 ${now.getDate()} 日　${days[now.getDay()]}`;
  document.getElementById('realDate').textContent = str;
}

(function init() {
  renderRealDate();

  // 如果设置了开始日期，自动跳到对应天
  const sd = getStartDate();
  if (sd) {
    const start = new Date(sd + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.floor((today - start) / 86400000);
    if (diff >= 0) {
      currentIndex = diff % plan.length;
    }
    // 回填 input
    document.getElementById('startDateInput').value = sd;
    const d = new Date(sd + 'T00:00:00');
    document.getElementById('setupHint').textContent =
      `已设置：${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 为第1天`;
  }

  render();
})();
