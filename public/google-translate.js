localStorage.setItem("lang", localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru")
const googleTranslateConfig = {
  lang: "ru",
};

TranslateInit = () => {
  let code = localStorage.getItem("lang");
  const lang = document.querySelectorAll(".popup_nav_list__item");
  lang.forEach(item => {
    if (item.getAttribute("data-google-lang") === code) {
      item.classList.add("popup_nav_list__item_active")
    }
    item.addEventListener("click", items => {
      localStorage.setItem("lang", item.getAttribute("data-google-lang"))
      item.classList.add("popup_nav_list__item_active");
      window.location.reload()
    });
  })

  let tt = new google.translate.TranslateElement({
    pageLanguage: googleTranslateConfig.lang,
  });
  console.log('google', tt)
};


//TranslateInit();