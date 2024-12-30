export default {
  pages: {
    indexPage: {
      hero: {
        title: "自信掌握中文",
        description: "专为中文学习设计的Reading Advantage改编版本",
        startLearningButton: "立即开始学习",
        placementTestButton: "参加分级测试"
      },
      features: {
        title: "全面的学习功能",
        description: "我们的平台将先进技术与经过验证的学习方法相结合",
        sections: {
          characterLearning: {
            title: "汉字学习系统",
            features: {
              1: "笔顺可视化",
              2: "汉字结构分析",
              3: "部首学习组件",
              4: "繁简体支持"
            }
          },
          pronunciation: {
            title: "发音工具",
            features: {
              1: "拼音显示和练习",
              2: "声调识别练习",
              3: "录音功能",
              4: "语音分析工具"
            }
          },
          reading: {
            title: "适应性阅读功能",
            features: {
              1: "中文文本优化",
              2: "基于汉字的进度",
              3: "中文专项练习",
              4: "自适应难度"
            }
          },
          management: {
            title: "教育管理",
            features: {
              1: "课堂管理",
              2: "学生进度跟踪",
              3: "作业创建",
              4: "表现分析"
            }
          }
        }
      },
      technology: {
        title: "采用现代技术构建",
        description: "由Next.js 14和专业中文语言处理工具驱动",
        sections: {
          frontend: {
            title: "前端",
            description: "Next.js 14、TypeScript、Tailwind CSS和专业中文文本处理"
          },
          backend: {
            title: "后端",
            description: "支持Unicode的PostgreSQL、Prisma ORM和Firebase身份验证"
          },
          processing: {
            title: "处理",
            description: "HanziWriter用于动画，chinese-tokenizer用于文本分段"
          }
        }
      },
      cta: {
        title: "开启您的中文学习之旅",
        description: "加入我们全面的平台，自信掌握中文语言",
        button: "开始免费试用"
      }
    },
    loginPage: {
      loginDescription: "登录到您的账户",
      backButton: "返回",
    },
    student: {
      readPage: {
        articleSelection: "文章选择",
        article: {
          articleNotFound: "找不到文章",
          articleInsufficientLevel: "您的阅读水平不足，无法阅读此文章。",
          readBefore: "您之前读过这篇文章",
          readBeforeDescription:
            "您可以再次阅读并练习，以提高您的阅读技能。这是您之前阅读的结果。",
          status: "状态",
          statusText: {
            completed: "已完成",
            uncompleted: "未完成",
          },
          statusDescription: "最后更新于 {date}",
          score: "测验分数",
          scoreText: "{score}",
          scoreDescription: "共 {total} 个问题",
          rated: "已评分",
          ratedText: "{rated} 分",
          ratedDescription: "您对这篇文章的评分",
          timeSpend: "花费时间",
          timeSpendText: "{time}",
          timeSpendDescription: "在 {total} 个问题中",
          scoreSuffix: {
            point: "分",
            points: "分",
          },
          secondSuffix: {
            second: "秒",
            seconds: "秒",
          },
        },
      },
      historyPage: {
        title: "为 {userName} 的历史",
        reminderToReread: "重读提醒",
        articleRecords: "文章记录",
        reminderToRereadDescription:
          "您可能想再次尝试阅读这些文章，以查看您是否有所提高。",
        articleRecordsDescription: "您的阅读记录将在这里显示。",
      },
      practicePage: {
        flashcard: "句子卡片",
        manage: "管理",
        orderSentences: "排列句子",
        clozeTest: "填空测试",
        orderWords: "排序单词",
        matching: "匹配",
        flashcardDescription:
          "你可以通过句子卡片来练习你的阅读技巧。你保存的卡片会显示在这里。",
        savedSentences: "保存的句子",
        noSavedSentences: "您没有保存的句子。",
        savedSentencesDescription: "您有 {total} 个保存的句子。",
        added: "添加于 {date}",
        deleteButton: "删除",
        neverPracticeButton: "不用再练习这个句子了",
        toast: {
          success: "成功",
          successDescription: "成功删除保存的句子",
          error: "错误",
          errorDescription: "删除保存的句子时出错",
        },
        flashcardPractice: {
          buttonEasy: "容易",
          buttonHard: "难",
          buttonGood: "好",
          buttonAgain: "再来",
          flipCard: "翻转",
          nextButton: "下一个",
          yourXp: "您已经获得了 {xp} XP 为这个活动。",
        },
        orderSentencesPractice: {
          orderSentences: "排列句子",
          orderSentencesDescription:
            "这些是你读过的某篇文章中的一些句子。请按照对你有意义的顺序排列这些句子。如果顺序与文章中的相同，你将获得5经验值。",
          saveOrder: "保存并稍后继续",
          errorOrder: "请正确排序",
        },
        clozeTestPractice: {
          clozeTest: "填空测试",
          clozeTestDescription:
            "这是你读过的一篇文章中的几个句子，请填写缺失的单词以完成它们。如果你回答正确，你将获得5经验值。",
          submitButton: "提交",
          errorCloze: "请填写所有空白处",
          submitArticle: "检查你的答案",
          nextPassage: "下一段",
        },
        orderWordsPractice: {
          orderWords: "排序单词",
          orderWordsDescription:
            "这是你读过的一段文字中的一句。请将这些单词按对你有意义的顺序排列。如果这些单词的顺序与文章中的相同，你将获得5经验点。",
          saveOrder: "继续",
          errorOrder: "请正确排序",
          submitArticle: "检查你的答案",
          nextPassage: "下一段落",
          tryToSortThisSentence: "尝试排序这个句子",
        },
        matchingPractice: {
          matching: "配对",
          matchingDescription:
            "将句子与其翻译进行匹配。如果你正确匹配了所有句子，你将获得5 XP。",
          saveOrder: "保存并稍后继续",
          errorOrder: "请正确排序",
          submitArticle: "检查你的答案",
          nextPassage: "下一段",
          minSentencesAlert: "您至少需要保存五个句子才能进行这项活动。",
        },
      },
      reportpage: {
        title: "用户活动",
        activityprogress: "活动进度",
        recentactivity: "最近活动",
        inProgress: "进行中",
        completed: "已完成",
        daterange: "日期范围",
        xpearned: "获得的 XP",
        xpoverall: "总 XP",
        activityheatmap: "活动热图",
        readingstatschart: "阅读统计图表",
        activitytype: {
          article_rating: "文章评分",
          article_read: "文章阅读",
          level_test: "等级测试",
          mc_question: "多项选择题",
          sa_question: "简答题",
          la_question: "长答题",
          sentence_flashcards: "句子闪卡",
          sentence_matching: "句子匹配",
          sentence_ordering: "句子排序",
          sentence_word_ordering: "句子单词排序",
          sentence_cloze_test: "句子完形填空",
          vocabulary_flashcards: "词汇闪卡",
          vocabulary_matching: "词汇匹配",
        },
        cefr: {
          title: "CEFR 等级",
          yourlevel: "你的 CEFR 等级",
          description: {
            C2: "你几乎可以理解所有读到的内容，即使是复杂的材料。你能捕捉到故事中的小幽默和严肃文章中的隐含意义。你的词汇量非常丰富，并且知道在恰当的时候使用那些高级、华丽的词语。",
            "C2-":
              "你已经非常接近精通这门语言了。你可以轻松处理复杂的文本，但偶尔可能会在极其微妙或特定文化内容上遇到困难。你的词汇量很广，但可能仍会遇到一些罕见词汇需要停下来思考。",
            "C1+":
              "你能处理艰深的阅读材料，并能理解不同作者的写作风格。你相当擅长捕捉文本和文章中不那么明显的内容，而且不需要经常查字典。",
            C1: "你可以深入阅读长篇和困难的文章，并理解其中的大部分内容。你喜欢能引发思考的故事和文章，并且可以毫不费力地讨论它们。",
            "C1-":
              "你能轻松应对复杂的文本，但对于特别具有挑战性或专业的材料可能需要额外的时间。你通常可以从上下文推断意思，但有时可能在习语表达或非常技术性的语言上遇到困难。",
            "B2+":
              "你可以理解更具挑战性的内容的主要观点，比如专业文章。你开始自主阅读更多内容，并能处理一些抽象或技术性的主题，尤其是在你熟悉的领域。",
            B2: "你可以独立阅读，判断文本是正式还是非正式的，并能调整阅读速度。你可以享受一本好书或关于时事的文章。你知道很多词汇，即使有时会混淆，通常也能理清。",
            "B2-":
              "你在理解更复杂的文本方面正在变得更好，但可能仍然在一些高级词汇或复杂的句子结构上有困难。你可以跟上大多数一般兴趣文章的主要观点，但专业文本可能仍具挑战性。",
            "B1+":
              "你可以理解有关熟悉主题的清晰写作，并且正在变得更擅长处理稍微复杂一点的语言。你可以轻松找到所需信息，如果不太难的话，还可以享受阅读一本书。",
            B1: "你可以阅读你喜欢的主题的文本并理解其中的要点。故事和个人信件是你的强项。你有足够的日常词汇储备，可以毫不费力地谈论你所读的内容。",
            "B1-":
              "你开始处理更复杂的文本，但可能需要慢慢阅读或多读几遍。你可以理解熟悉主题的直白文章的主要思想，但详细或抽象的概念仍可能有困难。",
            "A2+":
              "你可以理解常规写作和短新闻故事或描述中的主要观点。你的词汇量正在增长，所以你可以谈论对你重要的事情并处理日常任务。",
            A2: "你可以理解简短、简单文本的大意，在广告或菜单等日常事物中找到所需信息，并遵循基本指示。你有足够的词汇来应对日常情况。",
            "A2-":
              "你在理解简单文本方面正在变得更好，但可能仍需要慢慢阅读或多读几遍。你可以从简短、直白的文本中提取重要信息，尤其是与熟悉主题相关的内容。",
            "A1+":
              "你开始理解对你重要的句子和表达。阅读不再仅仅是识别熟悉的单词；你开始理解简单文本中的整体信息。",
            A1: "你可以理解非常短和简单的内容。你知道足够的词汇来识别通知和简单指南中的词语。你可以用你知道的词语谈论简单的日常事物。",
            "A1-":
              "你刚开始在简单文本中识别熟悉的词语和非常基本的短语。你可以理解一些常见标志和简短、简单的信息，尤其是当有图片或上下文支持时。",
            "A0+":
              "你刚刚开始，但可以理解一些词语和短语，特别是有图片帮助时。你可以理解简单标志的含义，如果不太复杂的话，还可以遵循基本指示。",
            A0: "你可以认出以前见过的词语和名字，尤其是有图片时。你可以理解周围非常简单的标志和基本信息，比如某事发生的时间和地点。",
            "A0-": "你才刚刚开始！",
          },
        },
      },
    },
    teacher: {
      studentProgressPage: {
        activity: "活动",
        level: "等级",
        levelDescription: "您当前的等级是 {level}",
        progressOf: "{nameOfStudent} 的进度",
        noUserProgress: "没有用户进度，因为学生从未阅读过文章或进行其他活动。",
      },
    },
  },
  components: {
    mainNav: {
      home: "主页",
      about: "关于",
      contact: "联系",
      authors: "作者",
    },
    userAccountNav: {
      level: "等级 {level}",
      settings: "设置",
      signOut: "登出",
      contactUs: "联系支持",
      leveltest: "等级测试",
      learningpage: "学习者主页",
      teacherpage: "教师仪表板",
      adminpage: "管理员仪表板",
      systempage: "系统仪表板",
      daysLeft: "过期时间：{daysLeft} 天",
      expires: "已过期",
      users: {
        student: "学生",
        teacher: "教师",
        admin: "管理员",
        system: "系统",
        user: "用户",
      },
    },
    themeSwitcher: {
      dark: "暗模式",
      light: "亮模式",
      system: "系统",
    },
    localeSwitcher: {
      en: "English",
      th: "ไทย",
      cn: "简体字",
      tw: "繁體字",
      vi: "Tiếng Việt",
    },
    sidebarNav: {
      read: "阅读",
      history: "历史",
      sentences: "句子",
      reports: "报告",
      vocabulary: "词汇",
      myClasses: "我的课程",
      myStudents: "我的学生",
      classRoster: "班级名单",
      passages: "段落",
      assignments: "作业",
    },
    sidebarTeacherNav: {
      myClasses: "我的课程",
      myStudents: "我的学生",
      classRoster: "班级名单",
      reports: "报告",
      passages: "段落",
      assignments: "作业",
    },
    articleRecordsTable: {
      title: "标题",
      date: "日期",
      rated: "已评分",
      search: "搜索标题...",
      previous: "上一个",
      next: "下一个",
      select: "已选择 {selected} 个，共 {total} 个",
    },
    firstRunLevelTest: {
      heading: "让我们开始测试你的技能吧！",
      description: "选择正确的答案来评估您的阅读水平。",
      nextButton: "下一个",
      section: "部分 {currentSectionIndex}",
      toast: {
        successUpdate: "成功！",
        successUpdateDescription: "您的经验和等级已更新。",
        attention: "注意",
        attentionDescription: "请回答所有问题!",
        errorTitle: "出了点问题。",
        errorDescription: "您的经验和等级未更新。请重试。",
      },
      congratulations: "恭喜!",
      congratulationsDescription: "评估完成。",
      yourScore: "你的分数 : {xp}",
      yourCefrLevel: "你的 CEFR 等级 : {cefrLevel}",
      yourRaLevel: "你的 RA 级别 : {raLevel}",
      getStartedButton: "开始",
    },
    progressBarXp: {
      xp: "经验: ",
      level: "等级 {level}",
      congratulations: "恭喜!",
      upLevel: "您已獲得新等級！",
      close: "关闭",
    },

    firstRoleSelection: {
      heading: "你想做什么？",
      description: "请选择你的角色",
      studentButton: "我想学习",
      teacherButton: "我想教书",
      save: "保存",
      toast: {
        title: "角色已更新",
        studentDescription: "你现在是学生",
        teacherDescription: "你现在是教师",
        adminDescription: "你现在是管理员",
        systemDescription: "你现在是系统用户",
      },
    },

    select: {
      articleChoose: "请选择您想阅读的 {article}",
      articleChooseDescription:
        "您的级别是 {level}，这里是您可以选择的 {article}。",
    },
    article: {
      type: "文章类型",
      genre: "文章种类",
      subGenre: "文章子类",
      article: "文章",
      deleteButton: "删除",
      appoveButton: "批准",
    },
    articleCard: {
      raLevel: "阅读能力等级为 {raLevel}",
      cefrLevel: "CEFR 等级为 {cefrLevel}",
      articleCardDescription: "该文章涉及 {topic} 主题，属于 {genre} 类别。",
    },
    articleContent: {
      voiceAssistant: "语音助手",
      soundButton: {
        play: "播放声音",
        pause: "暂停声音",
      },
      openvoicebutton: "一边听一边读",
      // button translate
      translateButton: {
        open: "翻译",
        close: "關閉翻譯視窗",
      },
    },
    mcq: {
      title: "多项选择题",
      description: "参加测验以检查你的理解",
      descriptionSuccess: "你已经完成了测验",
      descriptionSuccess2: "你的分数是 {score}/{total}",
      descriptionLoading: "正在获取本文的问题，请稍等。",
      quiz: "测验",
      reQuiz: "重新测验",
      quizDescription:
        "开始测验以测试您的知识，并看看这篇文章对您来说有多容易。",
      reQuizDescription:
        "您之前完成过这个测验。您可以重新参加测验以提高您的分数。",
      startButton: "开始测验",
      retakeButton: "重新测验",
      elapsedTime: "已用时间 {time} 秒",
      questionHeading: "问题 {number}，共 {total} 个",
      nextQuestionButton: "下一个问题",
      submitButton: "提交测验",
      toast: {
        correct: "正确",
        correctDescription: "您答对了！",
        incorrect: "错误",
        incorrectDescription: "您答错了！",
        quizCompleted: "测验完成",
        quizCompletedDescription: "您已完成测验",
        error: "错误",
        errorDescription: "提交答案时出错，请稍后再试。",
      },
    },
    rate: {
      title: "评价这篇文章",
      content: "你如何评价本文的质量?",
      description: "此评分用于计算您下一级别。",
      newLevel: "您的新级别是 {level}",
      submitButton: "提交",
      backToHomeButton: "返回主页",
      nextQuizButton: "下一个测验",
      toast: {
        success: "成功",
        successDescription: "您的新级别是 {level}。",
      },
    },
    audioButton: {
      play: "播放声音",
      pause: "暂停声音",
    },
    menu: "菜单",
    loginButton: "登录",

    passages: {
      heading: "段落",
      type: "类型",
      fiction: "小说",
      Fiction: "小说",
      nonFiction: "非小说类",
      nonfiction: "非小说类",
      topic: "主题",
      selectGenre: "选择类型",
      selectSubGenre: "选择子流派",
      level: "级别",
      sortBy: "排序方式",
      rating: "评分",
      date: "日期",
      resetGenre: "重置类型",
      resetSubGenre: "重置子类型",
    },
    myClasses: {
      title: "我的课程",
      search: "搜索班级名称...",
      className: "班级名称",
      classCode: "班级代码",
      studentCount: "学生人数",
      actions: "操作",
      detail: "细节",
      roster: "名册",
      reports: "报告",
      createNewClass: {
        button: "创建新类",
        title: "创建新类",
        description: "填写详细信息以创建新课程",
        className: "班级名称",
        selectGrade: "选择年级",
        grade: "年级",
        create: "创建班级",
        cancel: "取消",
        classCode: "班级代码",
        toast: {
          attention: "注意力",
          attentionDescription: "所有字段必须填写！",
          successCreate: "成功",
          successDescription: "班级创建成功",
        },
      },
      edit: {
        title: "编辑班级详细信息",
        description: "更新以下课程详细信息",
        className: "班级名称",
        selectGrade: "选择年级",
        grade: "年级",
        toast: {
          attention: "注意力",
          attentionDescription: "所有字段必须填写！",
          successUpdate: "更新成功",
          successUpdateDescription: "课程更新成功",
        },
        update: "更新类",
        cancel: "取消",
      },
      archieve: {
        title: "存档类",
        descriptionBefore: "是否要存档",
        descriptionAfter: " 班级？",
        archive: "档案",
        cancel: "取消",
        toast: {
          successArchive: "课程已归档",
          successArchiveDescription: "课程已成功存档！",
          errorArchive: "错误",
          errorArchiveDescription: "归档课程时出错",
        },
      },
      delete: {
        title: "删除课堂",
        descriptionBefore: "是否要删除",
        descriptionAfter: "教室？",
        delete: "删除",
        cancel: "取消",
        toast: {
          successDelete: "课程已删除",
          successDeleteDescription: "课程已成功删除",
          errorDelete: "错误",
          errorDeleteDescription: "删除课程时出错",
        },
      },
    },

    myStudent: {
      title: "我的学生",
      name: "姓名",
      email: "电子邮件",
      searchName: "搜索姓名...",
      actions: "操作",
      progress: "进度",
      enroll: "注册",
      unEnroll: "取消注册",
      resetProgress: "重置进度",
      resetTitle: "重置所有XP进度",
      resetDescription: "您确定要重置所有进度吗？",
      reset: "重置",
      cancelReset: "取消",

      enrollPage: {
        title: "{studentName}可注册的班级",
        add: "添加",
        search: "搜索...",
        className: "班级名称",
        enroll: "注册",
        toast: {
          successEnrollment: "注册成功",
          successEnrollDescription: "学生已注册到班级",
          errorEnrollment: "注册失败",
          errorEnrollDescription: "学生未能注册到班级",
        },
      },
      unEnrollPage: {
        title: "{studentName}取消注册的班级",
        remove: "移除",
        search: "搜索...",
        className: "班级名称",
        unEnroll: "取消注册",
        toast: {
          successUnenrollment: "移除成功",
          successUnenrollDescription: "学生已从班级移除",
          errorUnenrollment: "取消注册失败",
          errorUnenrollDescription: "学生未能从班级移除",
        },
      },
    },

    classRoster: {
      title: "班级名单：{className}",
      name: "姓名",
      lastActivity: "最后活动",
      actions: "操作",
      history: "历史",
      search: "搜索姓名...",
      noStudent: "此班级中没有学生",
      noClassroom: "没有选择班级。请先选择一个班级。",
      noClassroomDescription: "请从我的班级中选择班级",
      addStudentButton: "添加新学生",
      toast: {
        successResetProgress: "成功重置进度",
        successResetProgressDescription: "所有进度已重置",
      },

      addNewStudent: {
        title: "添加新学生到 {className}",
        description: "通过输入他们的电子邮件地址将新学生添加到班级。",
        email: "电子邮件：",
        placeholder: "输入电子邮件地址",
        addStudent: "添加新学生",
        warning: "要添加学生，请填写上面的必填字段。",
        saveButton: "保存并继续",
        toast: {
          successAddStudent: "学生已添加",
          successAddStudentDescription: "学生已成功添加到此班级。",
          errorAddStudent: "添加学生失败",
          errorAddStudentDescription: "未能将学生添加到此班级。",
          emailNotFound: "未找到电子邮件",
          emailNotFoundDescription:
            "此电子邮件地址未关联任何账户。请检查拼写或尝试不同的电子邮件地址。",
          studentAlreadyInClass: "学生已经在班级中",
          studentAlreadyInClassDescription: "这个学生已经在这个班级中",
        },
      },
    },

    history: {
      reminder: {
        title: "标题",
        score: "分数",
        date: "日期",
        rated: "已评分",
        status: "状态",
      },
      record: {
        search: "搜索...",
        columns: "列",
        title: "标题",
        scores: "分数",
        updated_at: "日期",
        rated: "已评分",
        status: "状态",
      },
    },

    reports: {
      title: "班级报告：{className}",
      averageLevel: "平均等级：",
      name: "姓名",
      xp: "XP",
      level: "等级",
      search: "搜索姓名...",
      lastActivity: "最后活动",
      actions: "操作",
      detail: "详情",
      viewDetails: "查看详情",
      noStudent: "此班级中没有学生",
      noStudentDescription: "请从我的班级中选择班级",

      editStudent: {
        title: "编辑学生详情",
        description: "更新以下学生详情",
        placeholder: "学生姓名",
        update: "更新学生",
        cancel: "取消",
        toast: {
          successUpdate: "更新成功",
          successUpdateDescription: "学生信息更新成功",
          attentionUpdate: "注意",
          attentionUpdateDescription: "请填写信息",
          errorUpdate: "更新失败",
          errorUpdateDescription: "更新学生信息失败",
        },
      },
      removeStudent: {
        title: "移除学生",
        descriptionBefore: "你想要移除",
        descriptionAfter: "从这个班级吗？",
        remove: "移除",
        cancel: "取消",
        toast: {
          successRemove: "学生移除成功",
          successRemoveDescription: "学生已成功移除",
          errorRemove: "错误",
          errorRemoveDescription: "移除学生时出错",
        },
      },
    },

    search: "搜索...",

    chatBot: {
      textSuggestion: "提一个问题",
    },
    wordList: {
      title: "词汇列表",
      closeButton: "关闭",
      saveButton: "保存",
      detail: "选择词汇并保存以便日后练习。",
      tab: {
        flashcard: "单词卡",
        matching: "匹配",
      },
      flashcard: {
        neverPracticeButton: "不再练习这个词汇",
        description:
          "你可以通过你保存的词汇卡片来练习你的阅读技巧，这些词汇卡片会显示在这里",
      },
      matching: {
        description:
          "将词汇与其翻译进行匹配。如果你正确匹配所有词汇，你将获得 5 XP.",
      },
    },
    laq: {
      title: "长答案问题",
      description: "写一篇文章。",
      descriptionSuccess: "你已经完成了长答案问题。",
      descriptionLoading: "正在获取长答案问题...",
      descriptionFailure: "获取问题时出错了。",
      practiceButton: "练习写作",
      successButton: "练习完成",
      cancelButton: "取消",
      feedbackButton: "获取反馈",
      submitButton: "提交",
      elapsedTime: "{time} 秒已过",
      feedbackModal: {
        feedbackwritting: "写作反馈",
        finalfeedback: "最终反馈",
        vocabulary: "词汇使用",
        grammar: "语法准确性",
        clarityandcoherence: "清晰与连贯性",
        complexityandstructure: "复杂性与结构",
        contentanddevelopment: "内容与发展",
        areaforimpovement: "改进区域",
        examples: "示例",
        strength: "优势",
        suggestions: "建议",
        feedbackoverall: "整体反馈",
        examplerevisions: "修改示例",
        nextStep: "下一步",
        reviseResponse: "修改你的回答",
        getXP: "获取经验值！",
        score: "分数是",
      },
    },
    saq: {
      title: "简答题",
      description: "写几句话",
      descriptionSuccess: "你已经完成了简答题",
      descriptionLoading: "正在获取简答题...",
      descriptionFailure: "获取问题时出错。{error}",
      question: "问题",
      suggestedAnswer: "建议答案",
      yourAnswer: "你的答案",
      practiceButton: "开始写作",
      rateButton: "评价答案",
      submitButton: "保存答案",
      elapsedTime: "已用时间 {time} 秒",
      scorerate: "让我们评价你的答案",
    },
  },

  selectType: {
    types: {
      nonfiction: "非小说",
      "Biography and Memoir": "传记和回忆录",
      "historical biography": "历史传记",
      "History and Mythology": "历史和神话",
      "Genocide and Religious Studies": "种族灭绝和宗教研究",
      fiction: "小说",
      "coming-of-age": "成长小说",
      "Friendship and Kindness": "友谊和仁爱",
      "Ancient Civilizations": "古代文明",
      "Fantasy and Science Fiction": "奇幻与科幻",
      Quest: "探险",
      "Philosophy and Religion": "哲学和宗教",
      "Religious Studies": "宗教研究",
      "Science and Nature": "科学和自然",
      "Biology and Zoology": "生物学和动物学",
      "Technology and Science": "技术和科学",
      "Art and Culture": "艺术和文化",
      Calligraphy: "书法",
      "Survival Stories": "生存故事",
      "Space Colonization": "太空殖民",
      "Marine and Animal Studies": "海洋和动物研究",
      "Artificial Intelligence and Space": "人工智能和空间",
      Fantasy: "奇幻",
      "Magical Realism": "魔幻现实主义",
      "Folklore and Mythology": "民间传说和神话",
      "African Mythology": "非洲神话",
      "epic fantasy": "史诗奇幻小说",
      "Young Adult Fantasy": "青少年奇幻小说",
      "Humorous Fiction": "幽默小说",
      "Classic and Literary Fiction": "经典和文学小说",
      "Classic and Historical Fiction": "经典和历史小说",
      "Slice of Life": "日常生活",
      Media: "媒体",
      "World Literature": "世界文学",
      "Romance and Contemporary": "浪漫与当代",
      "Young Adult": "青少年",
      "Animal fantasy": "动物奇幻小说",
      "Musical and Science Fiction": "音乐和科幻小说",
      "Drama and Family": "戏剧和家庭",
      "Personal Growth": "个人成长",
      "magical realism": "魔幻现实主义",
      Music: "音乐",
      "Thriller and Mystery": "惊悚和神秘",
      "Treasure Hunt": "寻宝",
      Dystopian: "反乌托邦",
      Adventure: "冒险",
      Historical: "历史",
      "Harlem Renaissance": "哈莱姆复兴",
      "Fairy Tale": "童话故事",
      "portal fantasy": "传送门奇幻",
      "Social Commentary": "社会评论",
      "Greek Mythology": "希腊神话",
      "Action and Adventure": "动作与冒险",
      "Treasure Hunting": "寻宝",
      "Ancient Mythology": "古代神话",
      "Social and Emotional Learning": "社会和情感学习",
      "Coming-of-Age and Gothic Fiction": "成长和哥特小说",
      War: "战争",
      "Engineering and Robotics": "工程与机器人学",
      "Musical Friendship Adventure": "音乐友谊冒险",
      "Slice of life": "日常生活",
      "Earth and Environmental Sciences": "地球和环境科学",
      Superhero: "超级英雄",
      "Space and Time Adventures": "时空冒险",
      "Social Sciences and Issues": "社会科学和问题",
      "Diversity and Human Rights": "多样性和人权",
      "Digital and Consumer Electronics": "数码和消费电子",
      "Biographical Fiction": "传记小说",
      "Political and Military History": "政治和军事历史",
      "Japanese Folklore": "日本民间传说",
      "Fantasy and Folklore": "奇幻和民间传说",
      "Wild West": "西部荒野",
      "Adventure and Travel": "冒险和旅行",
      "Travel Guides": "旅行指南",
      "Supernatural Mystery": "超自然之谜",
      Folklore: "民间传说",
      "Friendship and Inspiring Stories": "友情和励志故事",
      "Tall Tale": "荒诞故事",
      "Legends and Fairy Tales": "传奇和童话",
      "Space Adventure": "太空冒险",
      "Health and Wellness": "健康与健康",
      "Nutrition and Healthy Living": "营养与健康生活",
      "School and Slice of Life": "学校和日常生活",
      "Fitness and Exercise": "健身和运动",
      "Historical Biographical Fiction": "历史传记小说",
      "Western and Pirate Adventures": "西部和海盗冒险",
      fantasy: "奇幻",
      "Animal Fantasy": "动物奇幻小说",
      "Aztec Mythology": "阿兹特克神话",
      Supernatural: "超自然",
      "Environmental awareness": "环保意识",
      "Health and Wellness Technology": "健康和健康技术",
      "Historical and Humorous Stories": "历史和幽默故事",
      "Animal Adventures and Superheroes": "动物冒险和超级英雄",
      "Self-help": "自助",
      Wellness: "健康",
      "Children's Mystery": "儿童推理",
      "Indian Mythology": "印度神话",
      "Community Celebration": "社区庆祝",
      "Gothic and Horror": "哥特和恐怖",
      Horror: "恐怖",
      "Urban Exploration": "城市探险",
      "Quests and Treasures": "探险和宝藏",
      "Comedy and Humor": "喜剧和幽默",
      "Environmental conservation": "环境保护",
      "Professional and Personal Development": "职业和个人发展",
      "Mindfulness and Personal Development": "正念和个人发展",
      "Virtual Reality and Exploration": "虚拟现实和探索",
      "Crime Thriller": "犯罪惊悚",
      Sociology: "社会学",
      "Historical Adventure": "历史冒险",
      "Heroic Fantasy": "英雄奇幻",
      Detective: "侦探",
      "Social-emotional Learning": "社会情感学习",
      Sports: "体育",
      "Sports Biographies": "体育传记",
      Festivals: "节日",
      "Detective Fiction": "侦探小说",
      Business: "商业",
      Entrepreneurship: "创业",
      "Children's literature": "成长",
      "True Crime and Paranormal": "真实犯罪和超自然",
      "Horror Stories": "恐怖故事",
      "Fictional Characters": "虚构人物",
      "Portal Fantasy": "传送门奇幻",
      "Historical Exploration": "历史探索",
      "Mythology and Folklore": "神话和民间传说",
      "Cultural Diversity": "文化多样性",
      Drama: "戏剧",
      "Norse Mythology": "北欧神话",
      "Inspirational and Media Coverage": "灵感和媒体报道",
      "Medical and Alternative Medicine": "医学和替代医学",
      "Family and Parenting": "家庭和育儿",
      Parenting: "育儿",
      "historical fiction": "历史小说",
      "Space Exploration": "太空探索",
      "WWII Resistance": "二战抵抗",
      "Native American Mythology": "美洲原住民神话",
      "Environmental Sustainability": "环境可持续性",
      Friendship: "友谊",
      "Virtual Reality": "虚拟现实",
      "Teen Detective": "青少年侦探",
      Fairytale: "童话",
      "Social Justice": "社会正义",
      "Types of Sports": "体育运动类型",
      Education: "教育",
      "Media and STEAM Education": "媒体和STEAM教育",
      "Adventure and Mountaineering": "探险和登山",
      "Alien and Dystopian Encounters": "外星人和反乌托邦相遇",
      "Urban and High Fantasy": "城市和高级奇幻",
      Classic: "经典",
      "Historical and Contemporary Romance": "历史和现代浪漫",
      "Military and Heroic Thrillers": "军事和英雄惊悚",
      "Modernist Literature": "现代主义文学",
      "Serial Killers": "连环杀手",
      "Art Techniques": "艺术技巧",
      "Art Theft": "艺术盗窃",
      Mythology: "神话",
      "Hindu Mythology": "印度神话",
      "Children's Fantasy": "儿童幻想",
      "Film and Media": "电影和媒体",
      Western: "西部片",
      Surrealism: "超现实主义",
      "Cultural and Culinary Travel": "文化和烹饪旅行",
      "Animal and Sea Adventures": "动物和海洋冒险",
      "Fairy Tales": "童话故事",
      "Detective Club": "侦探俱乐部",
      "Arthurian Legend": "亚瑟王传奇",
      Hauntings: "鬼故事",
      Memoirs: "回忆录",
      "Environmental and Cultural Education": "环境和文化教育",
      Philosophy: "哲学",
      "Tall Tales": "神话故事",
      "Community Conflict": "社区冲突",
      "Forbidden Love": "禁忌之爱",
      "Creation Myth": "创世神话",
      Legend: "传奇",
      Fable: "寓言",
      "Historical Fiction": "历史小说",
      "Historical Biography": "历史传记",
      "Cultural and Celebrity Memoirs": "文化和名人传记",
      "Political and Medical Memoirs": "政治和医学回忆录",
      "Textile Art": "纺织艺术",
      Prankster: "恶作剧者",
      "Medieval Adventure": "中世纪冒险",
      "Civic and Civil Rights": "公民和公民权利",
      "Mystery and Sports": "神秘和体育",
      "Psychological Horror": "心理恐怖",
      "Library and Global Issues": "图书馆和全球问题",
      "young adult mystery": "青少年悬疑",
      "Diversity and Relationships": "多样性和关系",
      "Supernatural Creatures": "超自然生物",
      "Epic and Heroic": "史诗和英勇",
      tragedy: "悲剧",
      "Animal adventure": "动物冒险",
      "Environmental Conservation": "环境保护",
      "Western Adventure": "西部冒险",
      "Supernatural Phenomena": "超自然现象",
      "Military Fiction": "军事小说",
      "Food and Culinary Arts": "食品和烹饪艺术",
      "Culinary Arts": "烹饪艺术",
      "Family Drama": "家庭剧",
      "Career and Communication": "职业和沟通",
      "Mental Health and Problem-solving": "心理健康和问题解决",
      "heroic fantasy": "英雄幻想",
      "Women's Suffrage Movement": "妇女解放运动",
      "Slavic Mythology": "斯拉夫神话",
      "Friendship and Adventure": "友谊和冒险",
      "Eastern European Mythology": "东欧神话",
      "Historical Mystery": "历史悬疑",
      "Inuit Mythology": "因纽特神话",
      Comedy: "喜剧",
      Psychology: "心理学",
      "Music and Memory": "音乐和记忆",
      "Mythical Creatures": "神秘生物",
      "Environmental Awareness": "环境意识",
      "Career and Digital Learning": "职业和数字学习",
      Podcasts: "播客",
      "Virtual Reality Adventure": "虚拟现实冒险",
      "War Fiction": "战争小说",
      "Child and Educational Psychology": "儿童和教育心理学",
      "Andean Mythology": "安第斯神话",
      Military: "军事",
      "Sports Inspirational Fiction": "体育励志小说",
      "Charity and Community Service": "慈善和社区服务",
      "Friendship and Growth": "友谊和成长",
      "Coming-of-age": "成人",
      "Inspiring story": "励志故事",
      "Natural Disasters": "自然灾害",
      "Quest Fantasy": "寻找奇迹",
      "Epic Fantasy": "史诗奇幻小说",
      "Sports Fiction": "体育小说",
      "Language and Literature": "语言和文学",
      "Writing and Translation": "写作和翻译",
      mystery: "神秘",
      "Existential and Absurdist Fiction": "存在主义和荒诞主义小说",
      "Children's Historical Fiction": "儿童历史小说",
      Wizardry: "巫术",
      "West African Mythology": "西非神话",
      "Post-Apocalyptic": "末日后",
      "Animal Fiction": "动物小说",
      "Language Mastery": "语言掌握",
      "Military ethics": "军事伦理",
      "Sports Drama": "体育剧",
      "Renaissance Art": "文艺复兴艺术",
      Pirate: "海盗",
      "Folk Tale": "民间故事",
      "Communication and Conflict Resolution": "沟通和冲突解决",
      "Psychological Thriller": "心理惊悚片",
      Medical: "医学",
      "Medical Fields": "医学领域",
      "Budget and City Travel": "预算和城市旅行",
      "Cultural Heritage": "文化遗产",
      "Greek Myth": "希腊神话",
      "Chinese Mythology": "中国神话",
      Legends: "传奇",
      "Classic Western and Frontier Adventure": "经典西部和边境冒险",
      Relationships: "关系",
      "Eastern European Folklore": "东欧民间传说",
      "Epic Myth": "史诗神话",
      "The Haunting Shadows: An Exploration of Psychological Horror":
        "令人恐惧的阴影：心理恐怖的探索",
      "Western Mystery": "西部神秘",
      "Regency Romance": "摄政时代浪漫",
      School: "学校",
      "Religious Fiction": "宗教小说",
      "Christian Fiction": "基督教小说",
      "Romantic Tragedy": "浪漫悲剧",
      "Domestic Life": "家庭生活",
      "Medieval Fantasy": "中世纪幻想",
      "Classic Fairy Tales": "经典童话",
      Cyberpunk: "赛博朋克",
      Spy: "间谍",
      Epic: "史诗",
      Humorous: "幽默",
      Contemporary: "当代",
      Realism: "现实主义",
      Community: "社区",
      "Cowgirl Adventure": "牛仔冒险",
      "Heroic Myth": "英雄神话",
      "Urban Fiction": "都市小说",
      Travel: "旅行",
      "Friendship and Music": "友谊和音乐",
      "Supernatural Horror": "超自然恐怖",
      "Political Thriller": "政治惊悚小说",
      "Southern Gothic": "南方哥特",
      Geography: "地理",
      "Desert Exploration": "沙漠探险",
      "Ecotourism and Historical Travel": "生态旅游和历史旅游",
      Comics: "漫画",
      "Community Service": "社区服务",
      "Social issues": "社会问题",
      "Child Development": "儿童发展",
      "Parallel Universe": "平行宇宙",
      "Revolutionary War Fiction": "革命战争小说",
      "School life": "校园生活",
      "Coming-of-Age": "成长",
      "Friendship and teamwork": "友谊和团队合作",
      Inspiration: "灵感",
      "Ancient Rome": "古罗马",
      "Time Travel": "时间旅行",
      "Time Travel Comedy": "时间旅行喜剧",
      "Musical adventure": "音乐冒险",
      "Classic Fairy Tale": "经典童话",
      "Music Therapy": "音乐疗法",
      Existentialism: "存在主义",
      "Superhero Comedy": "超级英雄喜剧",
      "Animal welfare": "动物福利",
      "Ancient Civilization": "古代文明",
      "Inspiring Story": "励志故事",
      "Contemporary Fiction": "当代小说",
      "Classic Literature": "经典文学",
      novel: "小说",
      "Community activism": "戏剧",
      "Relationship Drama and Romantic Suspense": "关系剧和浪漫悬疑",
      Mystery: "神秘",
      "Young Adult Mystery": "青少年神秘小说",
      "Gothic Horror": "哥特恐怖",
      "Psychological Fiction": "心理小说",
      Resistance: "抵抗",
      "historical activism": "历史行动主义",
      "Magical School": "魔法学校",
      "Gothic horror": "哥特恐怖",
      Renaissance: "文艺复兴",
      "Friendship and Values": "友谊和价值观",
      "Comics and Graphic Novels": "漫画和图像小说",
      "Second Chance Romance": "第二次机会的浪漫",
      "Global Governance": "全球治理",
      "American and Contemporary Fiction": "美国和当代小说",
      "Children's": "儿童",
      Legendary: "传奇",
      "Slice of Life in a Small Village": "小村庄的生活",
      Espionage: "间谍",
      "School Stories": "校园故事",
      "Romantic Fiction": "浪漫小说",
      "Children's Literature": "儿童文学",
      "Animal Fable": "动物寓言",
      "Western Legends": "西部传奇",
      "Religious Fantasy": "宗教幻想",
      "Bounty Hunters and Gold Rush": "赏金猎人和淘金热",
      Thriller: "惊悚",
      "Korean Mythology": "韩国神话",
      Metafiction: "元小说",
      "community activism": "社区行动主义",
      "Military espionage": "军事间谍",
      "Book Club": "读书俱乐部",
      drama: "戏剧",
      "Alien Encounter": "外星人遭遇",
      "World War II Resistance": "二战抵抗",
      "Renaissance Adventure": "文艺复兴冒险",
    },
  },
} as const;