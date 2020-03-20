const language = localStorage.getItem("language") || "zh-CN";

let text;
if (language === "en-US") {
  text = {
    title: "Dream.one Image Tag",
    area: "Areas",
    style: "Styles",
    item: "Items",
    brand: "Brand",
    focus: "Focuses",
    material: "Materials",
    colorScheme: "Color Schemes",
    location: "Locations",
    imageTagSearch: "Image Tag Search",
    searchByTags: "Search Photos By Tags",
    readSucceed: "Read the list of image tags successfully!",
    readFailed: "Unable to retrieve data",
    imageLabelTool: "Image Labeling Tool",
    selectTags: "Select Tags",
    submit: "Submit",
    submitChanges: "Submit Label Changes"
  };
} else {
  text = {
    title: "居梦图片标签",
    area: "区域",
    style: "风格",
    item: "物品",
    brand: "品牌",
    focus: "重点",
    material: "材料",
    colorScheme: "颜色/色系",
    location: "地点",
    imageTagSearch: "图片标签搜索",
    searchByTags: "依照标签搜索图片",
    readSucceed: "读取标签列表成功",
    readFailed: "读取失败",
    imageLabelTool: "图片标签工具",
    selectTags: "选择标签",
    submit: "提交",
    submitChanges: "提交标签更新"
  };
}

export default text;
