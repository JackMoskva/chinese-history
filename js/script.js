const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".main-menu");

burgerButton.addEventListener("click", function () {
  if (!burgerButton.classList.contains("burger-button--active")) {
    burgerButton.classList.add("burger-button--active");
    navMenu.classList.add("main-menu--active");
    const navMenuItems = navMenu.querySelectorAll(".nav-item");
    for (let i = 0; i < navMenuItems.length; ++i) {
      navMenuItems[i].addEventListener(
        "click",
        function () {
          setTimeout(() => {
            navMenu.classList.remove("main-menu--active");
            navMenu.classList.remove("main-menu--close");
          }, 200);
          burgerButton.classList.remove("burger-button--active");
          navMenu.classList.add("main-menu--close");
        },
        { once: true }
      );
    }
  } else {
    setTimeout(() => {
      navMenu.classList.remove("main-menu--active");
      navMenu.classList.remove("main-menu--close");
    }, 200);
    burgerButton.classList.remove("burger-button--active");
    navMenu.classList.add("main-menu--close");
  }
});

const anchors = document.querySelectorAll('a.nav-link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}