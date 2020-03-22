import text from "./text";

export function changeLanguage(language) {
  if (localStorage.getItem("language") === "zh-CN") {
    localStorage.setItem("language", "en-US");
    document.title = text.title;
  } else {
    localStorage.setItem("language", "zh-CN");
    document.title = text.title;
  }
  window.location.reload();
}
