
//MENU
const menu = document.getElementById("menu__img")
const navlinks = document.getElementById("navlinks")

menu.onclick = () => {
    if(navlinks.style.maxHeight) {
        navlinks.style.maxHeight = null;
    }
    else {
        navlinks.style.maxHeight = navlinks.scrollHeight + "px";
    };
}

//ANIMATIONS
const applyAnimationWhenVisible = (element, animationClass) => {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass)
            }
        })
    })
    obs.observe(element)
}

const applyAnimationWhenVisibleForAll = (elements, animationClass) => {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass)
            }
        })
    })
    for(let i = 0; i < elements.length; i++) obs.observe(elements.item(i));
}

const fadeInRightElements = document.getElementsByClassName("fade-in-right")
applyAnimationWhenVisibleForAll(fadeInRightElements, "apply-fade-in-right")

const fadeInLeftElements = document.getElementsByClassName("fade-in-left")
applyAnimationWhenVisibleForAll(fadeInLeftElements, "apply-fade-in-left")

const insideOut = document.getElementsByClassName("inside-out")
applyAnimationWhenVisibleForAll(insideOut, "apply-inside-out")

//To Top Button
let topButton = document.getElementById("top-button");

window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topButton.onclick = topFunction


