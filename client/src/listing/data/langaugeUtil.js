export function changeLanguage() {
  if (localStorage.getItem("language") === "zh-CN") {
    localStorage.setItem("language", "en-US");
  } else {
    localStorage.setItem("language", "zh-CN");
  }
  window.location.reload();
}
