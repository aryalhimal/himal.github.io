tabContents = document.querySelectorAll(".tab-contents");
tabLinks = document.querySelectorAll(".tab-links");
for (let i = 0; i < tabLinks.length; i++) {
  console.log(tabLinks[i]);
  tabLinks[i].addEventListener("click", () => {
    tabContents[i].classList.add("active-tab");
  });
}
