const settingBtn = document.querySelector(".setting-button")
const settingItems = document.querySelector(".setting-items")

const OpenCloseSetting = () => {
  if (settingItems.classList.contains("open")) {
    settingItems.classList.remove("open")
    settingItems.classList.add("close")
  } else if (settingItems.classList.contains("close")) {
    settingItems.classList.remove("close")
    settingItems.classList.add("open")
  }
  console.log(settingItems.classList)
}

settingBtn.onclick = OpenCloseSetting
