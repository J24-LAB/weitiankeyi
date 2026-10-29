// ===== 全站数据（列表页动态渲染 + 搜索索引 + 详情页） =====
window.SITE_DATA = {

    // ---------- 产品数据 ----------
    products: [
        {
            id: 'zhihui-weijian',
            name: '智慧未检平台',
            category: '检察类产品',
            desc: '面向未成年人检察工作的综合平台，涵盖强制报告、在线帮教、维权举报、联合保护、犯罪预防、心理疏导、家庭教育指导、就读就业帮扶、社区矫正监管、志愿服务激励等模块。',
            features: [
                '强制报告与线索管理',
                '在线帮教与心理疏导',
                '维权举报与联合保护',
                '犯罪预防与平安校园',
                '家庭教育指导与就业帮扶',
                '社区矫正监管与志愿服务激励'
            ],
            scene: '各级人民检察院未成年人检察部门、一站式未检服务中心、平安校园建设。',
            value: '提升未检工作质效，实现未成年人保护全流程数字化、智能化。',
            icon: 'fa-child'
        },
        {
            id: 'weijian-mini',
            name: '微检察小程序',
            category: '检察类产品',
            desc: '基于微信小程序的检察服务终端，涵盖刑事检察、民事检察、行政检察、控申、未检、公益诉讼、云听证、非羁码、大数据建模等模块。',
            features: [
                '刑事/民事/行政检察服务',
                '控告申诉与未检服务',
                '公益诉讼线索举报',
                '云听证与非羁码',
                '大数据建模分析'
            ],
            scene: '各级人民检察院面向社会公众的移动检察服务。',
            value: '降低群众使用门槛，提升检察服务便捷性与透明度。',
            icon: 'fa-mobile-alt'
        },
        {
            id: 'deepseek-ai',
            name: 'DeepSeek 司法一体机',
            category: '硬件终端设备',
            desc: '本地化部署的大模型一体机，内置法律知识库，支持文书审核、法规检索、案例比对、会议纪要、法律问答等场景。',
            features: [
                '文书智能审核与纠错',
                '法律法规与案例检索',
                '案例智能比对',
                '会议纪要自动生成',
                '法律智能问答'
            ],
            scene: '法院、检察院、司法行政机关的本地化AI能力建设。',
            value: '数据不出域，保障安全，提升办案与办公效率。',
            icon: 'fa-robot'
        },
        {
            id: 'bianxie-luyin',
            name: '便携式认罪认罚同步录音录像系统',
            category: '硬件终端设备',
            desc: '高集成拉杆箱式外出办案设备，集成音视频采集、同步录音录像、电子签名等功能，满足认罪认罚从宽制度下的同步录音录像要求。',
            features: [
                '一体化拉杆箱设计，便于携带',
                '高清音视频采集与同步录音录像',
                '电子签名与指纹采集',
                '本地存储与加密上传',
                '与检察业务系统对接'
            ],
            scene: '检察院、公安机关外出办案、认罪认罚听取意见等场景。',
            value: '保障认罪认罚过程合法合规，提升外出办案效率。',
            icon: 'fa-box'
        },
        {
            id: 'yuejuan-yitiji',
            name: '自助接待阅卷一体机',
            category: '硬件终端设备',
            desc: '面向律师和案件当事人的自助阅卷终端，支持律师异地阅卷、卷宗刻录、代理案件办理等功能。',
            features: [
                '律师身份核验与异地阅卷',
                '电子卷宗浏览与刻录',
                '代理案件办理',
                '阅卷记录与日志管理'
            ],
            scene: '法院、检察院诉讼服务中心、12309检务大厅。',
            value: '减少人工窗口压力，提升阅卷效率与服务体验。',
            icon: 'fa-print'
        },
        {
            id: 'paper-cloud',
            name: '纸质文档智能管理云平台',
            category: '法院类产品',
            desc: '面向法院无纸化办案的纸质文档管理平台，配合智能中间柜实现立案、庭审、合议、归档、执行全流程无纸化与电子卷宗全生命周期管理。',
            features: [
                '纸质文档扫描与OCR识别',
                '电子卷宗全生命周期管理',
                '智能中间柜联动',
                '全流程无纸化办案支撑'
            ],
            scene: '各级人民法院无纸化办案、电子卷宗管理。',
            value: '提升办案效率，降低纸质文档管理成本。',
            icon: 'fa-file-archive'
        },
        {
            id: 'mid-cabinet',
            name: '智能中间柜',
            category: '硬件终端设备',
            desc: '面向法院、检察院案卷流转的智能存储柜，支持案卷的智能存取、流转跟踪、安全存储与权限管理。',
            features: [
                '案卷智能存取与流转跟踪',
                '身份认证与权限管理',
                '安全存储与环境监控',
                '与办案系统数据联动'
            ],
            scene: '法院、检察院案卷管理中心。',
            value: '实现案卷流转全程可追溯，保障案卷安全。',
            icon: 'fa-cabinet-filing'
        },
        {
            id: 'susong-terminal',
            name: '智慧诉服全系列终端',
            category: '硬件终端设备',
            desc: '面向诉讼服务中心的全套自助终端，包括智能安检、导诉分流、自助立案、材料收转、自助缴费等。',
            features: [
                '智能安检与导诉分流',
                '自助立案与材料收转',
                '自助缴费与进度查询',
                '诉讼服务全流程覆盖'
            ],
            scene: '各级人民法院诉讼服务中心。',
            value: '提升诉讼服务效率，优化群众办事体验。',
            icon: 'fa-desktop'
        },
        {
            id: 'zhengju-xitong',
            name: '涉案财务管理系统',
            category: '平台软件产品',
            desc: '移动化涉案财物登记与管理平台，支持移动取证登记、标签打印、云端管理，实现涉案财物全流程规范管理。',
            features: [
                '移动化取证登记',
                '标签打印与二维码管理',
                '云端存储与查询统计',
                '涉案财物全流程跟踪'
            ],
            scene: '法院、检察院、公安机关涉案财物管理。',
            value: '规范涉案财物管理，提升透明度和效率。',
            icon: 'fa-coins'
        },
        {
            id: 'kuabumen-jiandu',
            name: '跨部门执法司法监督平台',
            category: '平台软件产品',
            desc: '汇聚跨部门执法司法数据，构建监督模型，实现线索发现、预警推送、监督闭环。',
            features: [
                '跨部门数据汇聚',
                '监督模型构建',
                '线索发现与预警推送',
                '监督闭环管理'
            ],
            scene: '政法委、检察院跨部门执法司法监督。',
            value: '提升执法司法监督质效，促进公正司法。',
            icon: 'fa-balance-scale'
        },
        {
            id: 'dianzi-shuju',
            name: '电子数据调查实验室平台',
            category: '平台软件产品',
            desc: '面向电子数据取证与调查的专业实验室平台，集成取证工作站、介质修复、数据恢复等功能。',
            features: [
                '电子数据取证工作站',
                '损坏介质修复',
                '数据恢复与提取',
                '标准化取证流程管理'
            ],
            scene: '检察院、公安机关电子数据调查实验室。',
            value: '提升电子数据取证能力，保障证据合法有效。',
            icon: 'fa-hdd'
        }
    ],

    // ---------- 案例数据 ----------
    cases: [
        {
            id: 'gs-gaoyuan',
            name: '甘肃省高级人民法院新建综合楼信息化项目',
            category: '法院项目',
            background: '甘肃省高级人民法院新建综合楼需要配套建设高标准的信息化系统，满足审判、办公、安防等全方位需求。',
            content: '综合布线、智慧法庭、无纸化办案系统、诉讼服务中心、执行可视化、网络安全等。',
            value: '打造全省法院信息化标杆，提升审判质效与服务水平。',
            client: '甘肃省高级人民法院',
            icon: 'fa-building'
        },
        {
            id: 'junwei-zhihui',
            name: '军委某联合作战指挥中心音视频系统',
            category: '音视频专项项目',
            background: '某联合作战指挥中心需要高保密、高可靠的音视频指挥调度系统。',
            content: '音视频统一调度、指挥大厅、会议系统、安全保密体系。',
            value: '保障指挥调度高效、安全、稳定。',
            client: '军委某部',
            icon: 'fa-fighter-jet'
        },
        {
            id: 'zhuanji-huiyi',
            name: '国家某领导人专机会议系统',
            category: '音视频专项项目',
            background: '专机会议系统需要满足高保密、便携、可靠的要求。',
            content: '专机会议音视频系统、加密通信、便携式设备。',
            value: '保障专机会议安全顺畅。',
            client: '国家有关部门',
            icon: 'fa-plane'
        },
        {
            id: 'weijian-zhongxin',
            name: '一站式未成年人保护中心建设项目',
            category: '检察院项目',
            background: '多地检察院建设一站式未检服务中心，需要物理场所与信息化系统整体交付。',
            content: '咨询接待室、心理热线、脑波情绪调节、沙盘箱庭、VR训练室、情绪宣泄室等功能空间建设。',
            value: '为未成年人提供全方位保护与帮教服务。',
            client: '多地人民检察院',
            icon: 'fa-child'
        },
        {
            id: 'gongyi-susong',
            name: '公益诉讼快检实验室项目',
            category: '检察院项目',
            background: '公益诉讼案件需要快速检测土壤、水质、空气、食品等，缩短取证周期。',
            content: '公益诉讼快检实验室设备、快检流程、数据管理平台。',
            value: '提升公益诉讼取证效率与办案质效。',
            client: '多地人民检察院',
            icon: 'fa-flask'
        },
        {
            id: 'dianzi-shuju-case',
            name: '电子数据调查实验室建设项目',
            category: '司法行政 & 通用信息化项目',
            background: '司法机关需要建设专业的电子数据调查实验室，提升电子数据取证能力。',
            content: '取证工作站、介质修复、数据恢复、标准化取证流程。',
            value: '提升电子数据取证能力，保障证据合法有效。',
            client: '多地司法机关',
            icon: 'fa-hdd'
        }
    ],

    // ---------- 新闻数据 ----------
    news: [
        {
            id: 'news-1',
            title: '纬天科怡通过高新技术企业复审',
            category: '企业新闻',
            date: '2025-06-15',
            content: '近日，兰州纬天科怡信息技术有限公司顺利通过高新技术企业复审，持续保持高新技术企业资质。公司将继续加大研发投入，深耕政法行业信息化。'
        },
        {
            id: 'news-2',
            title: '甘肃省高级人民法院信息化项目顺利验收',
            category: '项目资讯',
            date: '2025-05-20',
            content: '由我司承建的甘肃省高级人民法院新建综合楼信息化项目顺利通过验收，获得客户高度评价。项目涵盖综合布线、智慧法庭、无纸化办案等模块。'
        },
        {
            id: 'news-3',
            title: '智慧法院建设政策解读：一张网建设目标',
            category: '行业动态',
            date: '2025-04-10',
            content: '最高人民法院持续推进智慧法院“一张网”建设，构建全业务网上办理、全流程依法公开、全方位智能服务的智慧法院体系。'
        },
        {
            id: 'news-4',
            title: '公司与兰州理工大学开展产学研合作交流',
            category: '企业新闻',
            date: '2025-03-05',
            content: '公司与兰州理工大学计算机与通信学院开展产学研合作交流，双方就人才培养、课题研究、技术创新等方面达成合作意向。'
        },
        {
            id: 'news-5',
            title: '多地检察院一站式未检服务中心建成投用',
            category: '项目资讯',
            date: '2025-02-18',
            content: '由我司承建的多地检察院一站式未成年人保护中心相继建成投用，为未成年人提供咨询接待、心理疏导、帮教等全方位服务。'
        },
        {
            id: 'news-6',
            title: '数字检察战略与轻罪治理体系解读',
            category: '行业动态',
            date: '2025-01-12',
            content: '最高人民检察院深入推进数字检察战略，构建“线索发现-立案监督-案件办理-效果评估”全流程智能办案体系，轻罪治理成为重要方向。'
        }
    ],

    // ---------- 合作伙伴 ----------
    partners: [
        { id: 'tongdahai', name: '南京通达海', desc: '国内法院信息化头部厂商，核心代理商。' },
        { id: 'huayu', name: '北京华宇', desc: '法院、检察院信息化主流厂商，核心代理商。' },
        { id: 'taiji', name: '太极计算机', desc: '大型信息系统集成商，深度合作。' },
        { id: 'tiandi', name: '天地伟业', desc: '音视频监控与智慧安防厂商，核心代理商。' },
        { id: 'haikang', name: '海康威视', desc: '智能物联与安防头部企业，核心代理商。' },
        { id: 'dahua', name: '大华', desc: '智慧物联解决方案提供商，核心代理商。' },
        { id: 'qianxin', name: '奇安信', desc: '网络安全头部企业，核心合作伙伴。' },
        { id: 'shenxin', name: '深信服', desc: '网络安全与云计算厂商，核心合作伙伴。' },
        { id: 'tianrong', name: '天融信', desc: '网络安全厂商，核心合作伙伴。' },
        { id: 'deqi', name: '德启智能', desc: '智慧政法产品厂商，深度合作。' },
        { id: 'mifu', name: '米福软件', desc: '政法行业软件厂商，深度合作。' },
        { id: 'huaxia', name: '华夏电通', desc: '智慧法院、智慧检务解决方案厂商，深度合作。' },
        { id: 'meiqida', name: '美启达', desc: '智慧政法终端设备厂商，深度合作。' },
        { id: 'chuyuan', name: '楚源数智', desc: '数据治理与人工智能厂商，深度合作。' }
    ],

    // ---------- 搜索索引（全站可搜索内容） ----------
    searchIndex: [
        // 页面
        { title: '公司简介', desc: '兰州纬天科怡信息技术有限公司成立于2007年，专注政法行业信息系统集成。', url: 'about-intro.html', type: '页面', icon: 'fa-info-circle', keywords: ['简介', '公司', '关于'] },
        { title: '企业文化', desc: '企业愿景、核心理念、工作理念、质量理念、创新理念、人才理念。', url: 'about-culture.html', type: '页面', icon: 'fa-heart', keywords: ['文化', '愿景', '理念'] },
        { title: '发展历程', desc: '2007年成立至今的发展历程时间轴。', url: 'about-history.html', type: '页面', icon: 'fa-timeline', keywords: ['历程', '历史', '发展'] },
        { title: '资质荣誉', desc: '高新技术企业、ISO五大体系认证、26项软件著作权。', url: 'about-honor.html', type: '页面', icon: 'fa-certificate', keywords: ['资质', '荣誉', 'ISO', '软著'] },
        { title: '产学研合作', desc: '兰州理工大学、兰州财经大学、武汉大学法学院、湖北经济学院法学院。', url: 'about-coop.html', type: '页面', icon: 'fa-graduation-cap', keywords: ['产学研', '高校', '合作'] },
        { title: '核心团队', desc: '售前解决方案、项目实施集成、软件研发、售后运维服务团队。', url: 'about-team.html', type: '页面', icon: 'fa-users', keywords: ['团队', '人员'] },
        { title: '数字法院解决方案', desc: '智慧法庭、无纸化办案、诉讼服务中心、执行可视化、法律知识图谱。', url: 'solution-court.html', type: '解决方案', icon: 'fa-gavel', keywords: ['法院', '数字法院', '智慧法庭'] },
        { title: '数字检察解决方案', desc: '微检察、智慧未检、公益诉讼、轻罪治理、一站式未检服务中心。', url: 'solution-procuratorate.html', type: '解决方案', icon: 'fa-search', keywords: ['检察', '数字检察', '未检'] },
        { title: '司法行政解决方案', desc: '行政执法、电子数据调查实验室、劳动人事调解仲裁、跨部门执法司法监督。', url: 'solution-justice.html', type: '解决方案', icon: 'fa-file-signature', keywords: ['司法行政', '执法'] },
        { title: '通用信息化解决方案', desc: '国产化替代、机房建设、网络安全、档案室达标、新媒体中心、智慧党建展厅。', url: 'solution-general.html', type: '解决方案', icon: 'fa-server', keywords: ['通用', '信息化', '国产化'] },
        { title: '技术服务', desc: '咨询规划、系统集成实施、项目管理、定制软件开发、运维保障服务。', url: 'services.html', type: '服务', icon: 'fa-cogs', keywords: ['技术服务', '运维', '集成'] },
        { title: '典型案例', desc: '甘肃省高级人民法院、军委某联合作战指挥中心、国家某领导人专机会议系统等。', url: 'cases.html', type: '案例', icon: 'fa-star', keywords: ['案例', '样板', '项目'] },
        { title: '合作伙伴', desc: '通达海、华宇、太极、天地伟业、海康威视、大华、奇安信等。', url: 'partners.html', type: '页面', icon: 'fa-handshake', keywords: ['合作伙伴', '厂商', '代理'] },
        { title: '新闻动态', desc: '企业新闻、项目资讯、行业动态。', url: 'news.html', type: '页面', icon: 'fa-newspaper', keywords: ['新闻', '动态', '资讯'] },
        { title: '招贤纳士', desc: '售前解决方案工程师、系统集成工程师、软件开发工程师、运维工程师、商务。', url: 'careers.html', type: '页面', icon: 'fa-user-plus', keywords: ['招聘', '岗位', '人才'] },
        { title: '联系我们', desc: '地址：兰州市城关区雁东路102号留创园9层A04-A08室；电话：0931-4523389。', url: 'contact.html', type: '页面', icon: 'fa-phone', keywords: ['联系', '地址', '电话'] }
    ]
};

// 将产品、案例、新闻补充到搜索索引
window.SITE_DATA.products.forEach(p => {
    window.SITE_DATA.searchIndex.push({
        title: p.name,
        desc: p.desc,
        url: `product-detail.html?id=${p.id}`,
        type: '产品',
        icon: p.icon,
        keywords: [p.category, p.name]
    });
});
window.SITE_DATA.cases.forEach(c => {
    window.SITE_DATA.searchIndex.push({
        title: c.name,
        desc: c.content,
        url: `case-detail.html?id=${c.id}`,
        type: '案例',
        icon: c.icon,
        keywords: [c.category, c.name, c.client]
    });
});
window.SITE_DATA.news.forEach(n => {
    window.SITE_DATA.searchIndex.push({
        title: n.title,
        desc: n.content.substring(0, 80) + '...',
        url: `news-detail.html?id=${n.id}`,
        type: '新闻',
        icon: 'fa-newspaper',
        keywords: [n.category, n.title]
    });
});