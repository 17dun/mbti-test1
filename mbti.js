// MBTI 测试数据 - 100道题
const questions = [
    // E vs I (外向 vs 内向) - 25题
    { text: "在社交聚会中，你通常会...", options: ["主动与很多人交谈", "只和熟悉的人交谈"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "当你感到疲惫时，你更倾向于...", options: ["和朋友聊天放松", "独自安静休息"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你更喜欢的沟通方式是...", options: ["当面交流", "文字/网络交流"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在陌生环境中，你倾向于...", options: ["主动结识新人", "观察后再行动"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你更喜欢的工作方式是...", options: ["团队合作讨论", "独立专注完成"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "周末休息时，你更愿意...", options: ["外出参加活动", "在家独处"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在会议上，你倾向于...", options: ["积极参与讨论", "仔细倾听后发言"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你如何认识新朋友...", options: ["主动介绍自己", "等别人来认识"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在人群中，你通常感觉...", options: ["充满活力", "消耗能量"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你更喜欢...", options: ["成为关注的焦点", "在幕后默默贡献"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "遇到问题时，你倾向于...", options: ["找人讨论解决", "自己思考解决"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你的社交圈通常是...", options: ["广泛多样", "小而精"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在公共场合，你会...", options: ["自然表达想法", "谨慎选择时机"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你更喜欢的活动类型是...", options: ["群体活动", "个人活动"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在学习新知识时，你偏好...", options: ["和他人一起学习", "自己研究学习"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你的能量来源是...", options: ["外部世界", "内心世界"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在聚会上，你通常会...", options: ["主动组织游戏", "参与或旁观"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "面对陌生人，你会...", options: ["主动开启话题", "等待对方开口"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你更喜欢...", options: ["热闹的氛围", "安静的环境"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在电话沟通中，你...", options: ["喜欢长聊", "希望简短"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你的思维方式更偏向...", options: ["边说边想", "想好再说"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你更喜欢...", options: ["多任务处理", "专注一件事"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "在旅行中，你倾向于...", options: ["参加团体活动", "自由探索"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你如何处理冲突...", options: ["直接面对面", "写下来整理"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你的朋友圈更新频率...", options: ["经常分享", "偶尔更新"], dimension: "EI", value: { E: 0, I: 1 } },
    
    // S vs N (感觉 vs 直觉) - 25题
    { text: "你更关注...", options: ["现实和细节", "可能性和未来"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "在处理问题时，你更依赖...", options: ["经验和事实", "直觉和灵感"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更喜欢...", options: ["实用和具体的事物", "抽象和创新的想法"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "阅读时，你更注重...", options: ["具体细节", "整体含义"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更信任...", options: ["确凿的数据", "直觉的感觉"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "在工作中，你倾向于...", options: ["按步骤执行", "寻找创新方法"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更喜欢...", options: ["实际应用", "理论探索"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "面对新信息，你首先...", options: ["关注具体内容", "思考深层含义"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更擅长...", options: ["观察现状", "预见未来"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "学习新技能时，你喜欢...", options: ["跟随教程实践", "理解原理后创新"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更感兴趣的是...", options: ["事物本来面目", "事物可能的样子"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "在讨论中，你倾向于...", options: ["谈论具体事例", "探讨抽象概念"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更注重...", options: ["当前的现实", "未来的潜力"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "做计划时，你会...", options: ["列出详细步骤", "设定大致方向"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更喜欢...", options: ["传统可靠的方法", "尝试新方法"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你的记忆方式偏向...", options: ["记住具体细节", "记住整体印象"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "面对复杂系统，你...", options: ["关注各部分", "关注整体模式"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更信任...", options: ["过去的经验", "未来的可能性"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "在创意工作中，你...", options: ["基于现实改进", "从零开始想象"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更喜欢...", options: ["具体的指令", "宏观的愿景"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "面对未知，你会...", options: ["参考类似情况", "想象各种可能"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你的注意力更多在...", options: ["此时此地", "未来愿景"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更喜欢...", options: ["实用技能", "理论知识"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "在决策时，你依赖...", options: ["具体数据", "整体趋势"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你对...更感兴趣", options: ["事物是什么", "事物可能成为什么"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你的思维方式是...", options: ["循序渐进", "跳跃式联想"], dimension: "SN", value: { S: 0, N: 1 } },
    
    // T vs F (思考 vs 情感) - 25题
    { text: "做决定时，你更看重...", options: ["逻辑和客观分析", "个人价值观和感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更注重...", options: ["公平和原则", "和谐和人情"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "在冲突中，你倾向于...", options: ["直接讨论问题", "考虑他人感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更看重...", options: ["真理", "友善"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "做判断时，你依据...", options: ["客观标准", "个人影响"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更在意...", options: ["事情是否正确", "人们是否开心"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "给出反馈时，你会...", options: ["直接指出问题", "委婉表达建议"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更认同...", options: ["逻辑推理", "情感共鸣"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "面对困难决定，你...", options: ["分析利弊", "考虑感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更欣赏...", options: ["理性的人", "温暖的人"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "在团队中，你倾向于...", options: ["追求效率", "维护和谐"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更信任...", options: ["理智分析", "直觉感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "对待规则，你的态度是...", options: ["严格遵守", "灵活考虑"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更擅长...", options: ["批判性思维", "理解他人情感"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "在争论中，你注重...", options: ["事实和逻辑", "关系和感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "做决定后，你会...", options: ["评估结果好坏", "感受情绪变化"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更看重...", options: ["能力", "态度"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "面对不公正，你会...", options: ["指出问题", "安抚受害者"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更倾向于...", options: ["解决问题", "理解情绪"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "在工作中，你优先...", options: ["完成任务", "照顾团队"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你对他人更关注...", options: ["他们的能力", "他们的感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更喜欢...", options: ["客观的分析", "主观的理解"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "在压力下，你会...", options: ["抽离情感思考", "表达真实感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你认为更重要...", options: ["正义", "仁慈"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更愿意...", options: ["做正确的事", "做善良的事"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你的决策风格是...", options: ["理性分析型", "情感导向型"], dimension: "TF", value: { T: 0, F: 1 } },
    
    // J vs P (判断 vs 感知) - 25题
    { text: "你更喜欢...", options: ["有计划地做事", "灵活随性"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对最后期限，你通常会...", options: ["提前完成", "在最后一刻"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更喜欢...", options: ["事情有定论", "保持选择开放"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你的工作方式是...", options: ["按计划推进", "随机应变"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对变化，你倾向于...", options: ["提前做好准备", "灵活应对"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更喜欢...", options: ["完成清单", "探索可能"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "在项目中，你...", options: ["制定详细计划", "边做边调整"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你的生活风格...", options: ["有序有规律", "灵活自由"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对未完成的任务，你会...", options: ["感到焦虑", "保持冷静"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更喜欢...", options: ["明确的目标", "开放的可能性"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "在旅行中，你倾向于...", options: ["详细规划行程", "随性探索"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你的办公桌通常是...", options: ["整洁有序", "有些凌乱"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对新信息，你倾向于...", options: ["尽快处理", "先收集再说"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更喜欢...", options: ["确定的结果", "探索的过程"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "在时间管理上，你...", options: ["严格遵守计划", "灵活调整"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对多种选择，你会...", options: ["快速决定", "继续探索"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更注重...", options: ["达成目标", "享受过程"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "在决策前，你会...", options: ["充分准备", "凭直觉行动"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你的工作节奏是...", options: ["稳定持续", "波动起伏"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对突发情况，你...", options: ["按计划调整", "随机应变"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更喜欢...", options: ["完成一件事", "同时进行多件事"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "在周末，你倾向于...", options: ["按计划安排", "随性而为"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你的决策风格...", options: ["果断明确", "保留弹性"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对压力，你会...", options: ["按计划应对", "灵活处理"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更喜欢...", options: ["结构化的环境", "自由的环境"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你的生活态度是...", options: ["目标导向", "体验导向"], dimension: "JP", value: { J: 0, P: 1 } }
];

// MBTI 类型描述
const mbtiTypes = {
    "ISTJ": { name: "物流师", desc: "安静、严肃，通过全面性和可靠性获得成功。实际，实事求是，现实，负责任。决定做什么事情，然后坚定不移地完成，不被干扰。喜欢将工作、家庭和生活的一切安排得井井有条。" },
    "ISFJ": { name: "守卫者", desc: "安静、友好、负责任、认真。始终如一、稳重。致力于履行义务。虽然待人周到、体贴，但通常不怎么表现出来。" },
    "INFJ": { name: "提倡者", desc: "寻求思想、关系、物质等之间的意义和联系。想了解什么能激励人，对人有很强的洞察力。有责任心，坚持自己的价值观。对于如何为共同利益服务有清晰的远景。" },
    "INTJ": { name: "建筑师", desc: "有独创性的思想，对实现自己的想法和目标有强烈的动力。能很快在外部事件中看到规律，并形成长远的解释性远景。当他们承诺做一件事时，会组织好并坚持到底。怀疑、批判、独立、决断。" },
    "ISTP": { name: "鉴赏家", desc: "灵活、忍耐力强，是个安静的观察者，直到有问题发生，就会马上行动。分析事物运作的原理，从大量数据中找到核心问题的所在。因为追求效率，所以很有逻辑性。" },
    "ISFP": { name: "探险家", desc: "安静、友好、敏感、和善。享受当下。喜欢有自己的空间，按照自己的时间表工作。忠诚于自己的价值观和对自己重要的人。不喜欢争论和冲突，不会把自己的观念和价值观强加于人。" },
    "INFP": { name: "调停者", desc: "理想主义，对自己价值观和重要的人忠诚。希望外部生活与内心价值观一致。好奇心重，能看到可能存在的各种可能性。适应力强，灵活，包容。" },
    "INTP": { name: "逻辑学家", desc: "对所有自己感兴趣的事物寻求合理的解释。喜欢理论和抽象的事情，热衷于观念而非社交。安静、内向、灵活、适应力强。对于解决在感兴趣的范畴内的问题有非凡的能力。" },
    "ESTP": { name: "企业家", desc: "灵活、忍耐力强，实际，注重结果。觉得理论和抽象的解释非常无聊。喜欢积极地采取行动解决问题。注重当下，自然不做作，享受和他人在一起的时刻。" },
    "ESFP": { name: "表演者", desc: "外向、友好、接受力强。热爱生活、人类和物质上的享受。喜欢和别人一起将事情做成。在工作中讲究常识和实用性，并使工作变得有趣。" },
    "ENFP": { name: "竞选者", desc: "热情洋溢、富有想象力。认为人生充满了很多可能性。能很快地将事情和信息联系起来，然后很自信地根据自己的判断解决问题。总是需要得到别人的认可，也总是准备着给与他人赏识和支持。" },
    "ENTP": { name: "辩论家", desc: "反应快、睿智，有激励别人的能力，警觉性强，直言不讳。在解决新的、有挑战性的问题时机智而有策略。善于找出概念上的可能性，然后分析它们。善于读出别人的意图。" },
    "ESTJ": { name: "总经理", desc: "实际、现实主义。果断，一旦下决心就会马上行动。善于将项目和人组织起来将事情完成，并尽可能用最有效率的方法得到结果。注重日常的细节。有一套清晰的逻辑标准，系统性地遵循，并希望他人也同样遵循。" },
    "ESFJ": { name: "执政官", desc: "热心肠、有责任心、合作。希望周边的环境温馨而和谐，并为此果断地行动。喜欢和他人一起精确并及时地完成任务。事无巨细都会保持忠诚。能体察到他在日常生活中的所需并竭尽全力帮助。" },
    "ENFJ": { name: "主人公", desc: "热情、为他人着想、负责任、高度自觉。能敏锐地察觉他人的情绪、需求和动机。能发现每个人的潜能，并希望能帮助他人实现。是个人和群体成长的催化剂。忠诚，对赞扬和批评都会积极响应。" }
};

// 维度描述
const dimensionDescriptions = {
    "EI": { left: "E 外向", right: "I 内向" },
    "SN": { left: "S 感觉", right: "N 直觉" },
    "TF": { left: "T 思考", right: "F 情感" },
    "JP": { left: "J 判断", right: "P 感知" }
};

// 当前状态
let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

// 开始测试
function startTest() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    document.getElementById('start-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    
    showQuestion();
}

// 显示问题
function showQuestion() {
    const question = questions[currentQuestion];
    
    // 更新进度
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-q').textContent = currentQuestion + 1;
    document.getElementById('total-q').textContent = questions.length;
    
    // 显示问题
    document.getElementById('question-text').textContent = question.text;
    
    // 显示选项
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsDiv.appendChild(optionDiv);
    });
}

// 选择选项
function selectOption(index) {
    const question = questions[currentQuestion];
    const dimension = question.dimension;
    
    // 计分
    if (index === 0) {
        // 选择第一个选项，给左边维度加分
        if (dimension === 'EI') scores.E++;
        else if (dimension === 'SN') scores.S++;
        else if (dimension === 'TF') scores.T++;
        else if (dimension === 'JP') scores.J++;
    } else {
        // 选择第二个选项，给右边维度加分
        if (dimension === 'EI') scores.I++;
        else if (dimension === 'SN') scores.N++;
        else if (dimension === 'TF') scores.F++;
        else if (dimension === 'JP') scores.P++;
    }
    
    // 下一题或显示结果
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 计算MBTI类型
function calculateMBTI() {
    let type = '';
    type += scores.E >= scores.I ? 'E' : 'I';
    type += scores.S >= scores.N ? 'S' : 'N';
    type += scores.T >= scores.F ? 'T' : 'F';
    type += scores.J >= scores.P ? 'J' : 'P';
    return type;
}

// 显示结果
function showResult() {
    const mbti = calculateMBTI();
    const typeInfo = mbtiTypes[mbti] || { name: "未知", desc: "暂无描述" };
    
    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('result-page').classList.add('active');
    
    document.getElementById('mbti-type').textContent = mbti;
    document.getElementById('mbti-name').textContent = typeInfo.name;
    document.getElementById('mbti-desc').textContent = typeInfo.desc;
    
    // 显示维度分析
    const dimensionsDiv = document.getElementById('dimensions');
    dimensionsDiv.innerHTML = '';
    
    const dimensions = [
        { key: 'EI', left: 'E', right: 'I', leftScore: scores.E, rightScore: scores.I },
        { key: 'SN', left: 'S', right: 'N', leftScore: scores.S, rightScore: scores.N },
        { key: 'TF', left: 'T', right: 'F', leftScore: scores.T, rightScore: scores.F },
        { key: 'JP', left: 'J', right: 'P', leftScore: scores.J, rightScore: scores.P }
    ];
    
    dimensions.forEach(dim => {
        const total = dim.leftScore + dim.rightScore;
        const leftPercent = total === 0 ? 50 : Math.round((dim.leftScore / total) * 100);
        const rightPercent = total === 0 ? 50 : Math.round((dim.rightScore / total) * 100);
        
        const dimDiv = document.createElement('div');
        dimDiv.className = 'dimension';
        dimDiv.innerHTML = `
            <div class="dimension-label">${dimensionDescriptions[dim.key].left}</div>
            <div class="dimension-bar">
                <div class="dimension-fill" style="width: ${leftPercent}%"></div>
            </div>
            <div class="dimension-value">${leftPercent}%</div>
        `;
        dimensionsDiv.appendChild(dimDiv);
    });
}

// 重新测试
function restartTest() {
    document.getElementById('result-page').classList.remove('active');
    document.getElementById('start-page').classList.add('active');
}
