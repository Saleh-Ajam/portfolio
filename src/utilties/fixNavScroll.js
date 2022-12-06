export default function () {
  window.onscroll = () => {
    const linksList = document.getElementsByTagName("nav")[0];
    for (let el of linksList.children) {
      if (el) {
        if (el.classList) {
          el.classList.remove("active");
        }
      }
    }
    for (let el of document.getElementsByTagName("section")) {
      if (isInViewport(el)) {
        // setting active element
        if (document.getElementById("nav__link__" + el.id)) {
          document
            .getElementById("nav__link__" + el.id)
            .classList.add("active");
        }
      }
    }
  };
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
