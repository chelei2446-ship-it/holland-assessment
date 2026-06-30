(function () {
  const dimensions = ["R", "I", "A", "S", "E", "C"];

  const dimensionInfo = {
    R: {
      name: "现实型",
      short: "动手、工具、明确成果",
      verbs: "搭建、修复、操作、把想法落到真实物件上",
      insight: "你会被能接触真实工具、空间、设备或明确成果的任务吸引。",
      strength: "在需要实际操作、现场判断和把事情做出来的场景里，你更容易进入状态。",
      caution: "如果环境长期只有抽象讨论、缺少可见成果，你可能会觉得投入感不足。"
    },
    I: {
      name: "研究型",
      short: "分析、推理、探索原理",
      verbs: "观察、验证、建模、解释复杂问题",
      insight: "你会被需要分析、推理、查证和理解规律的任务吸引。",
      strength: "在信息复杂、需要找原因和建立判断依据的场景里，你更容易保持耐心。",
      caution: "如果工作只要求快速执行、很少允许追问为什么，你可能会觉得不够过瘾。"
    },
    A: {
      name: "艺术型",
      short: "表达、创造、审美判断",
      verbs: "创作、设计、策划、用自己的方式表达观点",
      insight: "你会被有表达、创造、审美或想象空间的任务吸引。",
      strength: "在需要把想法变成内容、体验或视觉表达的场景里，你更容易产生主动性。",
      caution: "如果流程过度固定、几乎没有表达空间，你可能会觉得被限制。"
    },
    S: {
      name: "社会型",
      short: "沟通、支持、教育协作",
      verbs: "倾听、解释、辅导、帮助他人理解和成长",
      insight: "你会被能与人建立连接、支持他人或促进成长的任务吸引。",
      strength: "在需要沟通、共情、解释和协作的环境里，你更容易感到工作有意义。",
      caution: "如果工作长期缺少人的反馈，或者只有冷冰冰的指标，你可能会觉得疏离。"
    },
    E: {
      name: "企业型",
      short: "推动、影响、目标达成",
      verbs: "组织资源、影响他人、推进计划、争取结果",
      insight: "你会被能推动目标、影响他人或组织资源的任务吸引。",
      strength: "在目标明确、需要沟通资源和带动行动的场景里，你更容易释放能量。",
      caution: "如果环境节奏很慢、决策空间很小，你可能会觉得行动感不足。"
    },
    C: {
      name: "常规型",
      short: "秩序、规则、细致执行",
      verbs: "整理信息、制定流程、核对细节、稳定交付",
      insight: "你会被有结构、规则、数据和流程感的任务吸引。",
      strength: "在需要准确、稳定、可追踪和持续优化的场景里，你更容易建立可靠产出。",
      caution: "如果目标长期模糊、规则频繁变化，你可能会消耗很多额外精力。"
    }
  };

  const questions = [
    { dim: "R", type: "兴趣倾向题", text: "如果一个任务需要你动手修复、搭建或操作具体设备，你通常会愿意尝试。" },
    { dim: "I", type: "兴趣倾向题", text: "面对一个复杂问题时，你会想先弄清原因、规律和背后的逻辑。" },
    { dim: "A", type: "兴趣倾向题", text: "比起按固定模板完成任务，你更喜欢有表达、审美或创意空间的工作。" },
    { dim: "S", type: "兴趣倾向题", text: "当别人遇到困惑时，你愿意花时间倾听、解释或帮助对方理清问题。" },
    { dim: "E", type: "兴趣倾向题", text: "你对组织一次活动、推动一个计划或影响他人采取行动有兴趣。" },
    { dim: "C", type: "兴趣倾向题", text: "你能从整理信息、制定流程、让事情变得有秩序中获得稳定感。" },
    { dim: "R", type: "场景选择题", text: "如果参加一次职业体验，你会被实验室操作、手工制作、设备调试或现场任务吸引。" },
    { dim: "I", type: "场景选择题", text: "如果加入一个项目，你愿意负责资料分析、用户研究或验证某个假设。" },
    { dim: "A", type: "场景选择题", text: "如果周末参加活动，你更愿意选择内容创作、展览策划、视觉表达或表演体验。" },
    { dim: "S", type: "场景选择题", text: "如果参与志愿活动，你愿意负责陪伴沟通、课程辅导或帮助他人适应环境。" },
    { dim: "E", type: "场景选择题", text: "如果小组要完成目标，你愿意主动协调分工、争取资源并推动进度。" },
    { dim: "C", type: "场景选择题", text: "如果项目资料混乱，你会想把信息分类、建表、核对并整理成清楚流程。" },
    { dim: "R", type: "自我描述题", text: "你更喜欢能看到实体成果的任务，例如模型、装置、产品、空间或可运行的东西。" },
    { dim: "I", type: "自我描述题", text: "你会享受查资料、比对证据、提出解释并修正自己判断的过程。" },
    { dim: "A", type: "自我描述题", text: "你常常会在意一件事情是否有美感、风格、叙事或独特表达。" },
    { dim: "S", type: "自我描述题", text: "你更容易被能帮助他人成长、改善关系或产生正向影响的工作吸引。" },
    { dim: "E", type: "自我描述题", text: "你喜欢明确目标，并愿意和他人沟通资源、推进事情落地。" },
    { dim: "C", type: "自我描述题", text: "比起完全开放的任务，你有时更喜欢规则清楚、标准明确的工作环境。" },
    { dim: "R", type: "任务偏好题", text: "学习新技能时，如果能通过实操、演示或真实案例上手，你会更有兴趣。" },
    { dim: "I", type: "任务偏好题", text: "你愿意花时间拆解一个现象，直到找到更合理的解释或解决方案。" },
    { dim: "A", type: "任务偏好题", text: "你喜欢把信息重新组织成更有感染力的文字、画面、故事或体验。" },
    { dim: "S", type: "任务偏好题", text: "你愿意在团队里承担解释、协调情绪、引导讨论或支持新人的角色。" },
    { dim: "E", type: "任务偏好题", text: "面对机会或挑战时，你会有兴趣提出方案、说服他人并推动尝试。" },
    { dim: "C", type: "任务偏好题", text: "你愿意维护清单、表格、标准和节点，让复杂任务更可控。" },
    { dim: "R", type: "工作环境题", text: "你希望工作中有一部分时间能离开屏幕，接触真实场景、材料或设备。" },
    { dim: "I", type: "工作环境题", text: "你希望工作环境允许你提出问题、做调查，并用事实支持判断。" },
    { dim: "A", type: "工作环境题", text: "你希望工作环境允许试错、表达个人观点，并尊重不同风格。" },
    { dim: "S", type: "工作环境题", text: "你希望工作成果能被真实的人使用、理解、学习或受益。" },
    { dim: "E", type: "工作环境题", text: "你希望工作中能看到目标推进、结果反馈，并有一定决策或影响空间。" },
    { dim: "C", type: "工作环境题", text: "你希望工作有清楚责任、流程边界、质量标准和稳定节奏。" }
  ];

  const careerCatalog = [
    {
      id: "ux",
      title: "用户体验研究",
      category: "research creative",
      dims: ["I", "S", "A"],
      intro: "通过访谈、观察和分析理解人的需求，再把发现转化为产品决策。",
      reason: "它同时需要理解人、分析证据和表达发现，适合愿意探究问题又关注真实体验的人。",
      tasks: ["设计访谈提纲并与用户沟通", "整理行为证据和关键洞察", "把研究结论转译给产品、设计和业务团队"],
      skills: ["提问与倾听", "信息归纳", "研究伦理", "报告表达", "跨团队沟通"],
      study: "心理学、社会学、传播学、产品设计、统计基础和用户研究方法。",
      action: "先做一次身边用户访谈：围绕一个真实产品，记录对方遇到的问题和背后的原因。"
    },
    {
      id: "brand",
      title: "品牌与内容策划",
      category: "creative business",
      dims: ["A", "E", "S"],
      intro: "围绕受众、表达和传播目标组织内容，让信息更有辨识度。",
      reason: "它需要创造表达、理解人群和推动传播目标，适合喜欢把观点组织成清晰叙事的人。",
      tasks: ["拆解品牌定位和受众需求", "策划内容主题和传播节奏", "协同设计、运营和业务团队推进落地"],
      skills: ["叙事结构", "审美判断", "用户洞察", "项目推进", "复盘分析"],
      study: "传播学、广告学、设计学、市场营销、内容运营和基础数据分析。",
      action: "选择一个你熟悉的产品，重写它的一页介绍文案，并解释面向谁、想传达什么。"
    },
    {
      id: "education",
      title: "教育产品设计",
      category: "education creative",
      dims: ["S", "A", "I"],
      intro: "把学习目标、内容表达和用户体验结合起来，帮助学生更好理解和行动。",
      reason: "它连接助人、表达和研究，适合关心学习体验并愿意持续优化内容结构的人。",
      tasks: ["拆解学习目标和用户困难", "设计课程结构、练习和反馈", "通过数据和访谈改进学习体验"],
      skills: ["教学设计", "内容结构化", "用户访谈", "原型设计", "学习效果评估"],
      study: "教育学、心理学、课程设计、产品设计和学习科学。",
      action: "把一个你擅长的知识点设计成三步学习任务，找一位同学试用并收集反馈。"
    },
    {
      id: "cs",
      title: "客户成功",
      category: "business education",
      dims: ["S", "E", "C"],
      intro: "通过沟通、问题拆解和持续跟进帮助客户获得结果。",
      reason: "它需要助人动机、目标推进和流程意识，适合喜欢支持他人并看到结果的人。",
      tasks: ["理解客户目标和使用阻碍", "制定推进计划并跟进关键节点", "把客户问题反馈给产品与业务团队"],
      skills: ["沟通协调", "问题拆解", "项目跟进", "产品理解", "情绪稳定性"],
      study: "商业管理、服务设计、沟通心理学、产品基础和数据看板使用。",
      action: "模拟一次客户沟通，写下对方目标、当前阻碍和下一次跟进动作。"
    },
    {
      id: "data",
      title: "数据分析",
      category: "research business",
      dims: ["I", "C", "E"],
      intro: "围绕数据、问题和业务判断展开工作，用证据解释现象。",
      reason: "它需要推理、秩序和目标感，适合喜欢验证假设并用结构化方式表达结论的人。",
      tasks: ["定义分析问题和指标口径", "清洗、汇总和解释数据", "形成可行动的分析结论"],
      skills: ["统计基础", "数据工具", "业务理解", "可视化表达", "逻辑写作"],
      study: "统计学、信息管理、计算机基础、商业分析和数据可视化。",
      action: "找一份公开数据，提出一个问题并做出一页可解释的图表。"
    },
    {
      id: "pm",
      title: "项目管理",
      category: "business",
      dims: ["E", "C", "S"],
      intro: "把目标、资源、流程和人协同起来，推动事情按阶段落地。",
      reason: "它需要推动目标、建立秩序和沟通协调，适合喜欢让复杂事情有节奏向前的人。",
      tasks: ["拆解目标、范围和关键节点", "协调资源并同步风险", "复盘交付结果和协作过程"],
      skills: ["计划拆解", "风险识别", "会议推动", "文档表达", "利益相关者沟通"],
      study: "管理学、运营管理、项目管理方法、组织行为和基础财务。",
      action: "为一个小组任务写一页项目计划：目标、时间线、风险和下一步负责人。"
    },
    {
      id: "industrial",
      title: "工业与服务设计",
      category: "creative research",
      dims: ["R", "A", "I"],
      intro: "把真实场景、材料限制、用户需求和体验表达结合起来，设计可落地的产品或服务。",
      reason: "它适合同时喜欢动手验证、创造表达和分析真实问题的人。",
      tasks: ["观察真实使用场景", "制作草模、原型或服务流程", "根据反馈迭代材料、结构和体验"],
      skills: ["原型制作", "场景观察", "材料理解", "体验表达", "测试复盘"],
      study: "工业设计、服务设计、人机工程、材料基础和用户研究。",
      action: "选一个日常物品，画出它的使用流程，并尝试提出一个可制作的小改进。"
    },
    {
      id: "lab",
      title: "实验与质量分析",
      category: "research",
      dims: ["I", "R", "C"],
      intro: "通过规范实验、数据记录和结果判断，支持研发、检测或质量改进。",
      reason: "它适合喜欢探究原因、动手操作，同时能保持严谨记录的人。",
      tasks: ["准备实验材料和操作流程", "记录实验数据并排查异常", "根据标准形成检测或改进结论"],
      skills: ["实验规范", "数据记录", "质量意识", "安全意识", "问题排查"],
      study: "化学、生物、材料、食品科学、环境科学或质量管理。",
      action: "找一个公开实验案例，整理它的目的、步骤、变量和可能误差来源。"
    },
    {
      id: "operations",
      title: "运营管理",
      category: "business",
      dims: ["C", "E", "S"],
      intro: "围绕目标、流程、数据和用户反馈持续优化服务或产品运转。",
      reason: "它适合重视秩序和结果，同时愿意与人协作推动改进的人。",
      tasks: ["维护流程和数据看板", "设计活动或服务规则", "协调资源并跟进效果复盘"],
      skills: ["流程设计", "数据意识", "沟通协调", "规则表达", "执行复盘"],
      study: "运营管理、信息管理、市场营销、服务设计和基础数据分析。",
      action: "为一个你熟悉的活动写一份运营清单：目标、流程、指标、风险和复盘问题。"
    }
  ];

  const fallbackScores = { R: 14, I: 20, A: 24, S: 23, E: 17, C: 15 };

  function safeJsonRead(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "null");
    } catch (error) {
      return null;
    }
  }

  function safeJsonWrite(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function labelsFor(dimList) {
    return dimList.map((dim) => `${dim} ${dimensionInfo[dim].name}`);
  }

  function normalizeScores(rawScores) {
    const scores = {};
    dimensions.forEach((dim) => {
      const score = Number(rawScores?.[dim]);
      scores[dim] = Number.isFinite(score) && score >= 0 ? score : fallbackScores[dim];
    });
    return scores;
  }

  function orderedDimensions(scores) {
    return dimensions
      .map((dim) => [dim, Number(scores[dim]) || 0])
      .sort((a, b) => b[1] - a[1] || dimensions.indexOf(a[0]) - dimensions.indexOf(b[0]));
  }

  function buildResult(answers) {
    const scores = Object.fromEntries(dimensions.map((dim) => [dim, 0]));
    const counts = Object.fromEntries(dimensions.map((dim) => [dim, 0]));

    questions.forEach((question, index) => {
      const score = Number(answers[index]);
      counts[question.dim] += 1;
      if (Number.isFinite(score)) {
        scores[question.dim] += Math.min(5, Math.max(1, score));
      }
    });

    const percentages = {};
    dimensions.forEach((dim) => {
      const maxScore = Math.max(1, counts[dim] * 5);
      percentages[dim] = Math.round((scores[dim] / maxScore) * 100);
    });

    const ordered = orderedDimensions(scores);
    const top = ordered.slice(0, 3).map(([dim]) => dim);

    return {
      scores,
      percentages,
      top,
      code: top.slice(0, 2).join(""),
      questionCount: questions.length,
      createdAt: new Date().toLocaleDateString("zh-CN"),
      answers
    };
  }

  function readResult() {
    const stored = safeJsonRead("interestResult");
    if (!stored?.scores) {
      return {
        scores: { ...fallbackScores },
        percentages: normalizePercentages(fallbackScores),
        top: ["A", "S", "I"],
        code: "AS",
        createdAt: "示例结果",
        hasSavedResult: false
      };
    }

    const scores = normalizeScores(stored.scores);
    const ordered = orderedDimensions(scores);
    const savedTop = Array.isArray(stored.top)
      ? stored.top.filter((dim) => dimensions.includes(dim))
      : [];
    const top = [...new Set([...savedTop, ...ordered.map(([dim]) => dim)])].slice(0, 3);

    return {
      ...stored,
      scores,
      percentages: stored.percentages || normalizePercentages(scores),
      top,
      code: top.slice(0, 2).join(""),
      hasSavedResult: true
    };
  }

  function normalizePercentages(scores) {
    const max = Math.max(1, ...Object.values(scores).map((score) => Number(score) || 0));
    return Object.fromEntries(dimensions.map((dim) => [dim, Math.round(((Number(scores[dim]) || 0) / max) * 100)]));
  }

  function comboHeadline(top) {
    return `你的兴趣结构更偏向 ${labelsFor(top.slice(0, 2)).join(" + ")}`;
  }

  function comboSummary(top) {
    const [primary, secondary] = top;
    return `你可能更容易在能体现${dimensionInfo[primary].short}，同时允许${dimensionInfo[secondary].short}参与的任务中保持投入。`;
  }

  function portraitCopy(top) {
    const [primary, secondary, third] = top;
    return {
      headline: `你可能更容易在${dimensionInfo[primary].verbs}，并结合${dimensionInfo[secondary].verbs}的任务中获得投入感。`,
      body: `主导兴趣不是固定标签，而是一组更容易点燃你的活动线索。${dimensionInfo[primary].name}说明你的主要投入来源，${dimensionInfo[secondary].name}补充了你喜欢的工作方式，${third ? `${dimensionInfo[third].name}则提示了可以继续发展的第三个支点。` : ""}`,
      chips: [
        dimensionInfo[primary].short,
        dimensionInfo[secondary].short,
        third ? dimensionInfo[third].short : "阶段性探索",
        "结果可随经历变化"
      ].filter(Boolean)
    };
  }

  function environmentCopy(top) {
    const [primary, secondary] = top;
    return {
      good: [
        `能让你发挥${dimensionInfo[primary].short}的任务，并且成果有清楚反馈。`,
        `允许${dimensionInfo[secondary].verbs}，不只要求机械执行。`
      ],
      caution: [
        dimensionInfo[primary].caution,
        dimensionInfo[secondary].caution
      ],
      improve: [
        "把兴趣转成可训练能力：记录任务、复盘反馈、补足工具和方法。",
        "用小项目验证方向，避免只凭职业名称判断是否适合。"
      ]
    };
  }

  function majorSuggestions(top) {
    const map = {
      R: ["机械、建筑、工业设计、材料、环境、运动科学"],
      I: ["心理学、统计学、计算机、生命科学、社会学、数据科学"],
      A: ["设计学、传播学、艺术、中文、影视、新媒体"],
      S: ["教育学、心理学、社会工作、护理、公共服务、组织发展"],
      E: ["管理学、市场营销、金融、创业、公共管理、商务沟通"],
      C: ["信息管理、会计、审计、法学、运营管理、档案与数据管理"]
    };
    return [...new Set(top.flatMap((dim) => map[dim]))].slice(0, 8);
  }

  function actionSuggestions(top) {
    const [primary, secondary] = top;
    return [
      `观察一周内让你最投入的三个任务，标记它们是否更接近${dimensionInfo[primary].short}。`,
      `找一位从事目标方向的人，询问他每天重复最多的任务，以及最消耗精力的部分。`,
      `做一个结合${dimensionInfo[primary].verbs}和${dimensionInfo[secondary].verbs}的小项目，用结果验证兴趣。`
    ];
  }

  function careerScore(career, result) {
    const scores = normalizeScores(result?.scores);
    return career.dims.reduce((total, dim, index) => total + (scores[dim] || 0) * (3 - index), 0);
  }

  function recommendedCareers(result) {
    return careerCatalog
      .map((career) => ({ ...career, match: careerScore(career, result) }))
      .sort((a, b) => b.match - a.match || a.title.localeCompare(b.title, "zh-CN"));
  }

  window.HollandApp = {
    dimensions,
    dimensionInfo,
    questions,
    careerCatalog,
    labelsFor,
    buildResult,
    readResult,
    safeJsonRead,
    safeJsonWrite,
    orderedDimensions,
    comboHeadline,
    comboSummary,
    portraitCopy,
    environmentCopy,
    majorSuggestions,
    actionSuggestions,
    recommendedCareers
  };
})();
