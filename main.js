// ===== 全站通用脚本 =====

document.addEventListener('DOMContentLoaded', function () {

    // 1. 轮播（首页）
    initCarousel();

    // 2. 在线咨询弹窗（如果有）
    initConsultModal();

    // 3. 表单提交模拟
    initForms();

    // 4. 搜索结果页动态渲染（如果当前是 search.html）
    if (window.location.pathname.includes('search.html')) {
        renderSearchResults();
    }

    // 5. 产品/案例/新闻详情页根据URL参数渲染
    renderDetailByParam();
});

// ===== 轮播 =====
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dots span');
    if (slides.length === 0) return;
    let current = 0;
    let timer = null;

    function goTo(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        current = index;
    }

    function next() {
        goTo((current + 1) % slides.length);
    }

    if (dots.length) {
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => { goTo(i); resetTimer(); });
        });
    }

    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(next, 5000);
    }

    goTo(0);
    resetTimer();
}

// ===== 咨询弹窗 =====
function initConsultModal() {
    const modal = document.getElementById('consultModal');
    if (!modal) return;

    const openBtns = document.querySelectorAll('[data-consult]');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    });

    closeBtn?.addEventListener('click', () => modal.classList.remove('active'));
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) modal.classList.remove('active');
    });
}

// ===== 表单提交 =====
function initForms() {
    const forms = document.querySelectorAll('form[data-ajax]');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn ? btn.innerHTML : '';
            if (btn) { btn.disabled = true; btn.innerHTML = '提交中...'; }

            // 模拟异步提交
            setTimeout(() => {
                if (btn) { btn.disabled = false; btn.innerHTML = originalText; }
                showToast('提交成功！我们会尽快与您联系。');
                form.reset();
            }, 800);
        });
    });
}

// ===== 轻提示 =====
function showToast(msg) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.style.cssText = `
            position:fixed; top:30px; left:50%; transform:translateX(-50%);
            background:#0b2b4f; color:#fff; padding:12px 30px;
            border-radius:40px; font-size:0.95rem; z-index:9999;
            box-shadow:0 10px 30px rgba(0,0,0,0.2); opacity:0;
            transition:opacity .3s; pointer-events:none;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// ===== 搜索结果页 =====
function renderSearchResults() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const container = document.getElementById('searchResults');
    if (!container) return;

    const allItems = window.SITE_DATA ? window.SITE_DATA.searchIndex : [];
    const keyword = q.trim().toLowerCase();

    if (!keyword) {
        container.innerHTML = '<p style="color:#5b7a9a;">请输入关键词进行搜索。</p>';
        return;
    }

    const results = allItems.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.desc.toLowerCase().includes(keyword) ||
        (item.keywords && item.keywords.some(k => k.toLowerCase().includes(keyword)))
    );

    if (results.length === 0) {
        container.innerHTML = `<p style="color:#5b7a9a;">未找到与 “${escapeHtml(q)}” 相关的结果，请尝试其他关键词。</p>`;
        return;
    }

    container.innerHTML = `<p style="margin-bottom:20px;color:#5b7a9a;">找到 ${results.length} 条与 “<strong>${escapeHtml(q)}</strong>” 相关的结果：</p>`;
    const list = document.createElement('div');
    list.className = 'grid-3';
    results.forEach(item => {
        const card = document.createElement('a');
        card.href = item.url;
        card.className = 'card';
        card.innerHTML = `
            <i class="fas ${item.icon || 'fa-file-alt'}"></i>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.desc)}</p>
            <span class="tag" style="margin-top:12px;">${escapeHtml(item.type || '页面')}</span>
        `;
        list.appendChild(card);
    });
    container.appendChild(list);
}

// ===== 详情页根据URL参数渲染 =====
function renderDetailByParam() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id || !window.SITE_DATA) return;

    // 产品详情
    if (window.location.pathname.includes('product-detail')) {
        const product = window.SITE_DATA.products.find(p => p.id === id);
        if (product) renderProductDetail(product);
    }

    // 案例详情
    if (window.location.pathname.includes('case-detail')) {
        const c = window.SITE_DATA.cases.find(x => x.id === id);
        if (c) renderCaseDetail(c);
    }

    // 新闻详情
    if (window.location.pathname.includes('news-detail')) {
        const n = window.SITE_DATA.news.find(x => x.id === id);
        if (n) renderNewsDetail(n);
    }
}

function renderProductDetail(product) {
    const container = document.getElementById('detailContent');
    if (!container) return;
    container.innerHTML = `
        <h2>产品简介</h2>
        <p>${product.desc}</p>
        <h2>核心功能</h2>
        <ul>${product.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <h2>应用场景</h2>
        <p>${product.scene}</p>
        <h2>客户价值</h2>
        <p>${product.value}</p>
        <div style="text-align:center;margin-top:30px;">
            <a href="consult.html" class="btn-primary">立即咨询</a>
        </div>
    `;
    const titleEl = document.getElementById('detailTitle');
    if (titleEl) titleEl.textContent = product.name;
}

function renderCaseDetail(c) {
    const container = document.getElementById('detailContent');
    if (!container) return;
    container.innerHTML = `
        <h2>项目背景</h2>
        <p>${c.background}</p>
        <h2>建设内容</h2>
        <p>${c.content}</p>
        <h2>项目价值</h2>
        <p>${c.value}</p>
        <h2>客户单位</h2>
        <p>${c.client}</p>
        <div style="text-align:center;margin-top:30px;">
            <a href="consult.html" class="btn-primary">立即咨询</a>
        </div>
    `;
    const titleEl = document.getElementById('detailTitle');
    if (titleEl) titleEl.textContent = c.name;
}

function renderNewsDetail(n) {
    const container = document.getElementById('detailContent');
    if (!container) return;
    container.innerHTML = `
        <p style="color:#5b7a9a;font-size:0.9rem;margin-bottom:20px;">
            ${n.date} · ${n.category}
        </p>
        <p>${n.content}</p>
        <div style="text-align:center;margin-top:30px;">
            <a href="news.html" class="btn-link">← 返回新闻列表</a>
        </div>
    `;
    const titleEl = document.getElementById('detailTitle');
    if (titleEl) titleEl.textContent = n.title;
}

// ===== 工具函数 =====
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}