export default function setDarkMode() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.querySelector(".dmode").innerHTML = "dark_mode";
  } else {
    document.documentElement.classList.remove("dark");
    document.querySelector(".dmode").innerHTML = "light_mode";
  }
}
