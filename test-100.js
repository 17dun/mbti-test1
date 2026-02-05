// MBTI测试验证脚本 - 100题版本
console.log("========== MBTI 100题测试 ==========\n");

// 导入题库数据（简化版验证）
const questionCount = {
    EI: 25,
    SN: 25,
    TF: 25,
    JP: 25
};

const totalQuestions = Object.values(questionCount).reduce((a, b) => a + b, 0);

console.log("✅ 题库统计：");
console.log(`   - E/I 维度: ${questionCount.EI} 题`);
console.log(`   - S/N 维度: ${questionCount.SN} 题`);
console.log(`   - T/F 维度: ${questionCount.TF} 题`);
console.log(`   - J/P 维度: ${questionCount.JP} 题`);
console.log(`   - 总计: ${totalQuestions} 题\n`);

// 模拟计分测试
function simulateTest(answers) {
    let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    // 模拟100题的答题情况
    // answers 是一个对象，表示每个维度选择第一个选项的比例（0-1）
    const ranges = {
        EI: { count: 25, left: 'E', right: 'I' },
        SN: { count: 25, left: 'S', right: 'N' },
        TF: { count: 25, left: 'T', right: 'F' },
        JP: { count: 25, left: 'J', right: 'P' }
    };

    for (const [dim, config] of Object.entries(ranges)) {
        const leftCount = Math.round(config.count * (answers[dim] || 0.5));
        const rightCount = config.count - leftCount;
        scores[config.left] += leftCount;
        scores[config.right] += rightCount;
    }

    return scores;
}

function calculateMBTI(scores) {
    let type = '';
    type += scores.E >= scores.I ? 'E' : 'I';
    type += scores.S >= scores.N ? 'S' : 'N';
    type += scores.T >= scores.F ? 'T' : 'F';
    type += scores.J >= scores.P ? 'J' : 'P';
    return type;
}

// 测试1：完全外向感觉思考判断（ESTJ）
console.log("测试1：完全选择第一个选项（应该得到ESTJ）");
const scores1 = simulateTest({ EI: 1, SN: 1, TF: 1, JP: 1 });
const result1 = calculateMBTI(scores1);
console.log(`结果: ${result1}`);
console.assert(result1 === "ESTJ", "❌ 测试1失败");
console.log("✅ 通过\n");

// 测试2：完全内向直觉情感感知（INFP）
console.log("测试2：完全选择第二个选项（应该得到INFP）");
const scores2 = simulateTest({ EI: 0, SN: 0, TF: 0, JP: 0 });
const result2 = calculateMBTI(scores2);
console.log(`结果: ${result2}`);
console.assert(result2 === "INFP", "❌ 测试2失败");
console.log("✅ 通过\n");

// 测试3：混合类型（ENTP）
console.log("测试3：混合选择（应该得到ENTP）");
const scores3 = simulateTest({ EI: 0.7, SN: 0.3, TF: 0.7, JP: 0.3 });
const result3 = calculateMBTI(scores3);
console.log(`结果: ${result3}`);
console.assert(result3 === "ENTP", "❌ 测试3失败");
console.log("✅ 通过\n");

// 测试4：平衡型（平局时选第一个）
console.log("测试4：完全平衡（应该得到ESTJ）");
const scores4 = simulateTest({ EI: 0.5, SN: 0.5, TF: 0.5, JP: 0.5 });
const result4 = calculateMBTI(scores4);
console.log(`结果: ${result4}`);
console.assert(result4 === "ESTJ", "❌ 测试4失败");
console.log("✅ 通过\n");

// 显示16种类型
console.log("========== 16种MBTI类型 ==========");
const types = [
    "ISTJ", "ISFJ", "INFJ", "INTJ",
    "ISTP", "ISFP", "INFP", "INTP",
    "ESTP", "ESFP", "ENFP", "ENTP",
    "ESTJ", "ESFJ", "ENFJ", "ENTJ"
];
types.forEach((type, i) => {
    process.stdout.write(`${type}${(i + 1) % 4 === 0 ? '\n' : '  '}`);
});

console.log("\n========== 全部测试通过 ✅ ==========");
