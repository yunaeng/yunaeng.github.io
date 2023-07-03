const menuHeader = document.querySelector(".menu__header");
const menuContent = document.querySelector(".menu__content");
const headerBtn = document.querySelector(".menu__header__btn ");
const headerText = document.querySelector(".menu__header__text");
const menuHome = document.querySelector(".menu-home");
const menuHometwo = document.querySelector(".menu-hometwo");
const menuMovie = document.querySelector(".menu-movie");
const menuJanuary = document.querySelector(".menu-January");
const menuFebruary = document.querySelector(".menu-February");
const menuMarch = document.querySelector(".menu-March");
const menuApril = document.querySelector(".menu-April");
const menuMay = document.querySelector(".menu-May");
const menuJune = document.querySelector(".menu-June");
const menuJuly = document.querySelector(".menu-July");
const menuAugust = document.querySelector(".menu-August");
const menuSeptember = document.querySelector(".menu-September");
const menuOctober = document.querySelector(".menu-October");
const menuNovember = document.querySelector(".menu-November");
const menuDecember = document.querySelector(".menu-December");
const menuVertical = document.querySelector(".menu__vertical");
menuHeader.addEventListener("click", onClickMenuHeader);
menuContent.addEventListener("click", onClickMenuContent)
menuHometwo.addEventListener("click", onClickHome)

let clicked = false;
let duration = 0;

function onClickMenuHeader(event) {
  const target = event.target;
  const dataset = target.dataset;
  const key = dataset.key;
  if (key === undefined) {
    return;
  } else {
    if (!clicked) {
      changeHeader("down");
      menuDown(menuVertical);
      menuDown(menuHome);
      menuDown(menuMovie);
      menuDown(menuJanuary);
      menuDown(menuFebruary);
      menuDown(menuMarch);
      menuDown(menuApril);
      menuDown(menuMay);
      menuDown(menuJune);
      menuDown(menuJuly);
      menuDown(menuAugust);
      menuDown(menuSeptember);
      menuDown(menuOctober);
      menuDown(menuNovember);
      menuDown(menuDecember);
      clicked = true;
    } else {
      changeHeader("up");
      menuUp(menuVertical);
      menuUp(menuHome);
      menuUp(menuMovie);
      menuUp(menuJanuary);
      menuUp(menuFebruary);
      menuUp(menuMarch);
      menuUp(menuApril);
      menuUp(menuMay);
      menuUp(menuJune);
      menuUp(menuJuly);
      menuUp(menuAugust);
      menuUp(menuSeptember);
      menuUp(menuOctober);
      menuUp(menuNovember);
      menuUp(menuDecember);
      clicked = false;
    }
  }
}

function menuUp(item) {
  item.style.opacity = '0';
  item.style.transitionDelay = `${duration}ms`;
  duration -= 80;
}

function menuDown(item) {
  item.style.opacity = `1`;
  item.style.transitionDelay = `${duration}ms`;
  duration += 80;
}

function onClickMenuContent(event) {
  const target = event.target;
  const dataset = target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "Home":
      const header = document.querySelector(".header");
      header.scrollIntoView({ behavior: "smooth" });
      break;
    case "Movie":
    case "January":
      const movie = document.querySelector(".movie");
      const movieRect = movie.getBoundingClientRect();
      const movieTop = movieRect.top;
      const movieHeight = movieRect.height;
      window.scrollBy({
        top: movieTop - movieHeight / 50,
        behavior: "smooth",
        left: 0
      });
      break;
    case "February":
      const February = document.querySelector(".movie__February");
      const FebruaryRect = February.getBoundingClientRect();
      const FebruaryTop = FebruaryRect.top;
      const FebruaryHeight = FebruaryRect.height;
      window.scrollBy({
        top: FebruaryTop - FebruaryHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "March":
      const March = document.querySelector(".movie__March");
      const MarchRect = March.getBoundingClientRect();
      const MarchTop = MarchRect.top;
      const MarchHeight = MarchRect.height;
      window.scrollBy({
        top: MarchTop - MarchHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "April":
      const April = document.querySelector(".movie__April");
      const AprilRect = April.getBoundingClientRect();
      const AprilTop = AprilRect.top;
      const AprilHeight = AprilRect.height;
      window.scrollBy({
        top: AprilTop - AprilHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "May":
      const May = document.querySelector(".movie__May");
      const MayRect = May.getBoundingClientRect();
      const MayTop = MayRect.top;
      const MayHeight = MayRect.height;
      window.scrollBy({
        top: MayTop - MayHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "June":
      const June = document.querySelector(".movie__June");
      const JuneRect = June.getBoundingClientRect();
      const JuneTop = JuneRect.top;
      const JuneHeight = JuneRect.height;
      window.scrollBy({
        top: JuneTop - JuneHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "July":
      const July = document.querySelector(".movie__July");
      const JulyRect = July.getBoundingClientRect();
      const JulyTop = JulyRect.top;
      const JulyHeight = JulyRect.height;
      window.scrollBy({
        top: JulyTop - JulyHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "August":
      const August = document.querySelector(".movie__August");
      const AugustRect = August.getBoundingClientRect();
      const AugustTop = AugustRect.top;
      const AugustHeight = AugustRect.height;
      window.scrollBy({
        top: AugustTop - AugustHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "September":
      const September = document.querySelector(".movie__September");
      const SeptemberRect = September.getBoundingClientRect();
      const SeptemberTop = SeptemberRect.top;
      const SeptemberHeight = SeptemberRect.height;
      window.scrollBy({
        top: SeptemberTop - SeptemberHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "October":
      const October = document.querySelector(".movie__October");
      const OctoberRect = October.getBoundingClientRect();
      const OctoberTop = OctoberRect.top;
      const OctoberHeight = OctoberRect.height;
      window.scrollBy({
        top: OctoberTop - OctoberHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "November":
      const November = document.querySelector(".movie__November");
      const NovemberRect = November.getBoundingClientRect();
      const NovemberTop = NovemberRect.top;
      const NovemberHeight = NovemberRect.height;
      window.scrollBy({
        top: NovemberTop - NovemberHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    case "December":
      const December = document.querySelector(".movie__December");
      const DecemberRect = December.getBoundingClientRect();
      const DecemberTop = DecemberRect.top;
      const DecemberHeight = DecemberRect.height;
      window.scrollBy({
        top: DecemberTop - DecemberHeight / 3,
        behavior: "smooth",
        left: 0
      });
      break;
    default:
      throw Error(`Click Wrong Button`);
  }
}

function onClickHome(event) {
  const target = event.target;
  const dataset = target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "Hometwo":
      const headertwo = document.querySelector(".header");
      headertwo.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      throw Error(`Click Wrong Button`);
  }
}


function changeHeader(text) {
  if (text === "down") {
    headerBtn.innerHTML = `<i class="fas fa-times" data-key="header-icon" data-value="scroll" ></i>`
    headerText.innerText = `Close`;
  } else {
    headerBtn.innerHTML = `<i class="fas fa-bars" data-key="header-icon" data-value="scroll" ></i>`
    headerText.innerText = `Menu`;
  }
}
