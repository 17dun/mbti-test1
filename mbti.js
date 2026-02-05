// MBTI 测试数据
const questions = [
    // E vs I (外向 vs 内向)
    { text: "在社交聚会中，你通常会...", options: ["主动与很多人交谈", "只和熟悉的人交谈"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "当你感到疲惫时，你更倾向于...", options: ["和朋友聊天放松", "独自安静休息"], dimension: "EI", value: { E: 0, I: 1 } },
    { text: "你更喜欢的沟通方式是...", options: ["当面交流", "文字/网络交流"], dimension: "EI", value: { E: 0, I: 1 } },
    
    // S vs N (感觉 vs 直觉)
    { text: "你更关注...", options: ["现实和细节", "可能性和未来"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "在处理问题时，你更依赖...", options: ["经验和事实", "直觉和灵感"], dimension: "SN", value: { S: 0, N: 1 } },
    { text: "你更喜欢...", options: ["实用和具体的事物", "抽象和创新的想法"], dimension: "SN", value: { S: 0, N: 1 } },
    
    // T vs F (思考 vs 情感)
    { text: "做决定时，你更看重...", options: ["逻辑和客观分析", "个人价值观和感受"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "你更注重...", options: ["公平和原则", "和谐和人情"], dimension: "TF", value: { T: 0, F: 1 } },
    { text: "在冲突中，你倾向于...", options: ["直接讨论问题", "考虑他人感受"], dimension: "TF", value: { T: 0, F: 1 } },
    
    // J vs P (判断 vs 感知)
    { text: "你更喜欢...", options: ["有计划地做事", "灵活随性"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "面对最后期限，你通常会...", options: ["提前完成", "在最后一刻"], dimension: "JP", value: { J: 0, P: 1 } },
    { text: "你更喜欢...", options: ["事情有定论", "保持选择开放"], dimension: "JP", value: { J: 0, P: 1 } }
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
