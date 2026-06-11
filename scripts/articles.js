document.addEventListener('DOMContentLoaded', () => {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    // Sample dataset covering 9 news items. Designed to populate backwards (9 down to 1) 
    // enforcing the correct image loading pattern specified.
    const newsData = [
        { id: 9, category: "ANNOUNCEMENT", catClass: "cat-maroon", date: "May 27, 2026", title: "沙漠与繁花 | 美国华人大会首届书展行动计划书", snippet: "截止日期：2026年6月12日，尽快报名", link: "https://mp.weixin.qq.com/s/MqtF3pZge6TeVgnut93qeg?scene=1" },
        { id: 7, category: "WORKSHOP", catClass: "cat-gold", date: "May 8, 2026", title: "开启赛事，见证精彩 | 首届全国匹克球锦标赛即将举行！", snippet: "全美匹克球联盟为您带来巅峰赛事", link: "https://mp.weixin.qq.com/s/zHmTfgHHzSDSctxE2tROxQ" },
        { id: 6, category: "ANNOUNCEMENT", catClass: "cat-maroon", date: "May 8, 2026", title: "议程首发｜第三届全美华裔青年大会议程公布：席位有限，报名从速", snippet: "从展示到对话，从链接到成长", link: "https://mp.weixin.qq.com/s/CkM0ZYRGTBB_r0Mr1dugBA" },
        { id: 5, category: "EVENT", catClass: "cat-navy", date: "April 12, 2026", title: "第三届全美华裔青年大会：逐梦拉斯维加斯，铸就华裔新一代", snippet: "立即报名，共赴盛会", link: "https://mp.weixin.qq.com/s/6G_dBLDEFQDqEIKex14xyQ" },
        { id: 4, category: "WORKSHOP", catClass: "cat-gold", date: "April 9, 2026", title: "早鸟优惠即将关闭 | UCA十周年庆典暨第五届美国华人大会", snippet: "早鸟票于4月15日截止，尽快报名", link: "https://mp.weixin.qq.com/s/lVCQ8xK5Qw0ixFF1anDBfQ" },
        { id: 3, category: "ANNOUNCEMENT", catClass: "cat-maroon", date: "March 27, 2026", title: "共襄盛举，共展宏图 | 第五届全美华人大会“华人社区组织成就展示会”诚邀加入", snippet: "申请截止日期：5月15日 参展费用$125", link: "https://mp.weixin.qq.com/s/1GB8QUUUGf3hPoIVS2vSiA" },
        { id: 2, category: "EVENT", catClass: "cat-navy", date: "March 3, 2026", title: "展示风采 点亮未来 | 2026美国华人大会青年组织竞赛及展示会开始报名", snippet: "报名或申请截止日期：4月30日", link: "https://mp.weixin.qq.com/s/x-HE2UQl4kBtu_eWTOSF8w" },
        { id: 1, category: "WORKSHOP", catClass: "cat-gold", date: "March 11, 2025", title: "UCA十周年诚邀赞助 | 2026美国华人大会赞助计划正式发布", snippet: "赞助练习方式：Sponsorship@ucausa.org", link: "https://mp.weixin.qq.com/s/8jOV_aNOlfzXcPp9FFo4_w" }
    ];

    // Limit cards if the data-limit attribute is present
    const limit = newsGrid.dataset.limit ? parseInt(newsGrid.dataset.limit) : newsData.length;

    // Dynamically inject cards into the DOM
    newsData.slice(0, limit).forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';

        card.innerHTML = `
            <div class="card-visual">
                <img src="images/convention_news${news.id}.png" alt="${news.title}" loading="lazy">
                <span class="category-badge ${news.catClass}">${news.category}</span>
            </div>
            <div class="card-body">
                <span class="timestamp">${news.date}</span>
                <h3 class="card-title">${news.title}</h3>
                <p class="card-snippet">${news.snippet}</p>
                <a href="${news.link}" class="read-more">Read More <span class="material-symbols-outlined">chevron_right</span></a>
            </div>
        `;

        newsGrid.appendChild(card);
    });
});