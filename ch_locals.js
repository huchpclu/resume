function highlight(str) {
    return str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`(.+?)`/g, '<strong>$1</strong>');
}

module.exports = {
    experience_type: {
        "internship": ""
    },
    skill_type: {
        "frontend": "印刷",
        "backend": "计算机",
        "miscellaneous": "其他"
    },
    education_type: {
        "undergraduate": "（本科）"
    },
    link_type: {
        "zhihu": "知乎",
        "doubanbook": "豆瓣读书",
        "repo": "源代码",
        "pdf": "PDF 下载"
    },
    section_names: {
        "education": {
            "ch": "教育经历",
            "en": "Education"
        },
        "language": {
            "ch": "语言水平",
            "en": "Language"
        },
        "experience": {
            "ch": "学习与社会经验",
            "en": "Experience"
        },
        "skills": {
            "ch": "技能",
            "en": "Skills"
        }
    },
    highlight: highlight,
    lt_ie8_comment: "你正在使用 IE8 或更老的古董浏览器，还是快升级或者换浏览器吧~"
};

var resume_data = require('./resume.json');
for (var item in resume_data) {
    module.exports[item] = resume_data[item];
}
