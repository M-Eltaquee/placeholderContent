const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profileImg = document.getElementById("profile-img")
const userName = document.getElementById("user-name")
const date = document.getElementById("date")
const animBG = document.querySelectorAll(".animated-bg")
const animBGText = document.querySelectorAll(".animated-bg-text")

setTimeout(showData, 2500);

function showData() {
  header.innerHTML = `
  <img src="header-img.jpg" alt="" />
  `
  title.innerHTML = `Lorem ipsum dolor sit amet.`
  excerpt.innerHTML = `					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
  consequuntur.`
  profileImg.innerHTML = `<img src="photo.jpg" alt="" />`
  userName.textContent = `Mohamed`
  date.textContent = `Jan 10, 2022`

  animBG.forEach(element => element.classList.remove("animated-bg"))
  animBGText.forEach(element => element.classList.remove("animated-bg-text"))
}
