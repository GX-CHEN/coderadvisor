const language = localStorage.getItem("language") || "zh-CN";

let text;
if (language === "en-US") {
  text = {
    listingTitle: "Listing Page",
    fundamentalTitle: "Dev Fundamental",
    fundamentalLine1: "Fundamental Knowledge of Web Dev/Java",
    fundamentalLine2: "Focus on high-level concepts",
    fundamentalLine3: "In a clear Question & Answer format",
    jsTitle: "JavaScript Training",
    jsLine1: "Cover JS basics to advanced knowledge",
    jsLine2: "Contain both ES5 and ES6 syntax",
    jsLine3: "Small code snippets with concise comments",
    reactTitle: "React (coming soon)",
    reactLine1: "Introduction to React beginner knowledge",
    reactLine2: "Both concept-based and project-based sections",
    reactLine3: "Suggest for useful React UI tools/libs",
    cssTitle: "CSS (coming soon)",
    cssLine1: "Covers basic to intermediate knowledge",
    cssLine2: "Contains modern CSS module, Flex-box etc",
    cssLine3: "Introduce tools like Sass/Less"
  };
} else {
  text = {
    listingTitle: "总览列表",
    fundamentalTitle: "开发的基础",
    fundamentalLine1: "网站/Java开发的基础知识",
    fundamentalLine2: "侧重于概念总览",
    fundamentalLine3: "清晰的问题/回答格式进行展示",
    jsTitle: "JavaScript训练",
    jsLine1: "包含了JS从基础到进阶的知识",
    jsLine2: "包含了ES5和ES6的句法",
    jsLine3: "精炼的代码例子，与简短的解释",
    reactTitle: "React (很快会来)",
    reactLine1: "介绍React的入门知识",
    reactLine2: "包含了概念介绍，以及项目联系",
    reactLine3: "推荐一些React相关的工具和包",
    cssTitle: "CSS (很快会来)",
    cssLine1: "从基础到进阶的知识都会涵盖",
    cssLine2: "包含比较新的CSS module, Flex-box等等",
    cssLine3: "介绍Sass/Less这类的辅助工具"
  };
}

export default text;
