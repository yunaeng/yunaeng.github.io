const JanuaryContent = document.querySelector(".January__content");
const JanuarySlider = document.querySelector(".January__slider");

const FebruaryContent = document.querySelector(".February__content");
const FebruarySlider = document.querySelector(".February__slider");

const MarchContent = document.querySelector(".March__content");
const MarchSlider = document.querySelector(".March__slider");

const AprilContent = document.querySelector(".April__content");
const AprilSlider = document.querySelector(".April__slider");

const MayContent = document.querySelector(".May__content");
const MaySlider = document.querySelector(".May__slider");

const JuneContent = document.querySelector(".June__content");
const JuneSlider = document.querySelector(".June__slider");

const JulyContent = document.querySelector(".July__content");
const JulySlider = document.querySelector(".July__slider");

const AugustContent = document.querySelector(".August__content");
const AugustSlider = document.querySelector(".August__slider");

const SeptemberContent = document.querySelector(".September__content");
const SeptemberSlider = document.querySelector(".September__slider");

const OctoberContent = document.querySelector(".October__content");
const OctoberSlider = document.querySelector(".October__slider");

const NovemberContent = document.querySelector(".November__content");
const NovemberSlider = document.querySelector(".November__slider");

const DecemberContent = document.querySelector(".December__content");
const DecemberSlider = document.querySelector(".December__slider");


const JanuaryBtns = document.querySelector(".January__btns");
const JanuaryBtn = document.querySelectorAll(".January__btn");

const FebruaryBtns = document.querySelector(".February__btns");
const FebruaryBtn = document.querySelectorAll(".February__btn");

const MarchBtns = document.querySelector(".March__btns");
const MarchBtn = document.querySelectorAll(".March__btn");

const AprilBtns = document.querySelector(".April__btns");
const AprilBtn = document.querySelectorAll(".April__btn");

const MayBtns = document.querySelector(".May__btns");
const MayBtn = document.querySelectorAll(".May__btn");

const JuneBtns = document.querySelector(".June__btns");
const JuneBtn = document.querySelectorAll(".June__btn");


const JulyBtns = document.querySelector(".July__btns");
const JulyBtn = document.querySelectorAll(".July__btn");


const AugustBtns = document.querySelector(".August__btns");
const AugustBtn = document.querySelectorAll(".August__btn");


const SeptemberBtns = document.querySelector(".September__btns");
const SeptemberBtn = document.querySelectorAll(".September__btn");


const OctoberBtns = document.querySelector(".October__btns");
const OctoberBtn = document.querySelectorAll(".October__btn");


const NovemberBtns = document.querySelector(".November__btns");
const NovemberBtn = document.querySelectorAll(".November__btn");


const DecemberBtns = document.querySelector(".December__btns");
const DecemberBtn = document.querySelectorAll(".December__btn");


let AMOUNT_January = 0;
let AMOUNT_February = 0;
let AMOUNT_March = 0;
let AMOUNT_April = 0;
let AMOUNT_May = 0;
let AMOUNT_June = 0;
let AMOUNT_July = 0;
let AMOUNT_August = 0;
let AMOUNT_September = 0;
let AMOUNT_October = 0;
let AMOUNT_November = 0;
let AMOUNT_December = 0;

JanuaryContent.addEventListener("click", onClickJanuary);
JanuaryBtns.addEventListener("change", onChangeJanuaryBtns);

FebruaryContent.addEventListener("click", onClickFebruary);
FebruaryBtns.addEventListener("change", onChangeFebruaryBtns);

MarchContent.addEventListener("click", onClickMarch);
MarchBtns.addEventListener("change", onChangeMarchBtns);

AprilContent.addEventListener("click", onClickApril);
AprilBtns.addEventListener("change", onChangeAprilBtns);

MayContent.addEventListener("click", onClickMay);
MayBtns.addEventListener("change", onChangeMayBtns);

JuneContent.addEventListener("click", onClickJune);
JuneBtns.addEventListener("change", onChangeJuneBtns);

JulyContent.addEventListener("click", onClickJuly);
JulyBtns.addEventListener("change", onChangeJulyBtns);

AugustContent.addEventListener("click", onClickAugust);
AugustBtns.addEventListener("change", onChangeAugustBtns);

SeptemberContent.addEventListener("click", onClickSeptember);
SeptemberBtns.addEventListener("change", onChangeSeptemberBtns);

OctoberContent.addEventListener("click", onClickOctober);
OctoberBtns.addEventListener("change", onChangeOctoberBtns);

NovemberContent.addEventListener("click", onClickNovember);
NovemberBtns.addEventListener("change", onChangeNovemberBtns);

DecemberContent.addEventListener("click", onClickDecember);
DecemberBtns.addEventListener("change", onChangeDecemberBtns);


function onClickJanuary(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_January -= 100;
    if (AMOUNT_January < -400) {
      AMOUNT_January = -400;
    }
    JanuarySlider.setAttribute("style", `transform: translateX(${AMOUNT_January}%)`);
    switch (AMOUNT_January) {
      case 0:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[0].checked = true;;
        break;
      case -100:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[1].checked = true;;
        break;
      case -200:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[2].checked = true;;
        break;
      case -300:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[3].checked = true;;
        break;
      case -400:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_January += 100;
    if (AMOUNT_January > 0) {
      AMOUNT_January = 0;
    }
    JanuarySlider.setAttribute("style", `transform: translateX(${AMOUNT_January}%)`)
    switch (AMOUNT_January) {
      case 0:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[0].checked = true;
        break;
      case -100:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[1].checked = true;
        break;
      case -200:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[2].checked = true;
        break;
      case -300:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[3].checked = true;
        break;
      case -400:
        JanuaryBtn.forEach(btn => btn.checked = false);
        JanuaryBtn[4].checked = true;
        break;
    }
  }
}

function onClickFebruary(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_February -= 100;
    if (AMOUNT_February < -400) {
      AMOUNT_February = -400;
    }
    FebruarySlider.setAttribute("style", `transform: translateX(${AMOUNT_February}%)`);
    switch (AMOUNT_February) {
      case 0:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[0].checked = true;;
        break;
      case -100:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[1].checked = true;;
        break;
      case -200:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[2].checked = true;;
        break;
      case -300:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[3].checked = true;;
        break;
      case -400:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_February += 100;
    if (AMOUNT_February > 0) {
      AMOUNT_February = 0;
    }
    FebruarySlider.setAttribute("style", `transform: translateX(${AMOUNT_February}%)`)
    switch (AMOUNT_February) {
      case 0:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[0].checked = true;
        break;
      case -100:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[1].checked = true;
        break;
      case -200:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[2].checked = true;
        break;
      case -300:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[3].checked = true;
        break;
      case -400:
        FebruaryBtn.forEach(btn => btn.checked = false);
        FebruaryBtn[4].checked = true;
        break;
    }
  }
}

function onClickMarch(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_March -= 100;
    if (AMOUNT_March < -400) {
      AMOUNT_March = -400;
    }
    MarchSlider.setAttribute("style", `transform: translateX(${AMOUNT_March}%)`);
    switch (AMOUNT_March) {
      case 0:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[0].checked = true;;
        break;
      case -100:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[1].checked = true;;
        break;
      case -200:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[2].checked = true;;
        break;
      case -300:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[3].checked = true;;
        break;
      case -400:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_March += 100;
    if (AMOUNT_March > 0) {
      AMOUNT_March = 0;
    }
    MarchSlider.setAttribute("style", `transform: translateX(${AMOUNT_March}%)`)
    switch (AMOUNT_March) {
      case 0:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[0].checked = true;
        break;
      case -100:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[1].checked = true;
        break;
      case -200:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[2].checked = true;
        break;
      case -300:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[3].checked = true;
        break;
      case -400:
        MarchBtn.forEach(btn => btn.checked = false);
        MarchBtn[4].checked = true;
        break;
    }
  }
}

function onClickApril(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_April -= 100;
    if (AMOUNT_April < -400) {
      AMOUNT_April = -400;
    }
    AprilSlider.setAttribute("style", `transform: translateX(${AMOUNT_April}%)`);
    switch (AMOUNT_April) {
      case 0:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[0].checked = true;;
        break;
      case -100:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[1].checked = true;;
        break;
      case -200:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[2].checked = true;;
        break;
      case -300:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[3].checked = true;;
        break;
      case -400:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_April += 100;
    if (AMOUNT_April > 0) {
      AMOUNT_April = 0;
    }
    AprilSlider.setAttribute("style", `transform: translateX(${AMOUNT_April}%)`)
    switch (AMOUNT_April) {
      case 0:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[0].checked = true;
        break;
      case -100:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[1].checked = true;
        break;
      case -200:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[2].checked = true;
        break;
      case -300:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[3].checked = true;
        break;
      case -400:
        AprilBtn.forEach(btn => btn.checked = false);
        AprilBtn[4].checked = true;
        break;
    }
  }
}

function onClickMay(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_May -= 100;
    if (AMOUNT_May < -400) {
      AMOUNT_May = -400;
    }
    MaySlider.setAttribute("style", `transform: translateX(${AMOUNT_May}%)`);
    switch (AMOUNT_May) {
      case 0:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[0].checked = true;;
        break;
      case -100:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[1].checked = true;;
        break;
      case -200:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[2].checked = true;;
        break;
      case -300:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[3].checked = true;;
        break;
      case -400:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_May += 100;
    if (AMOUNT_May > 0) {
      AMOUNT_May = 0;
    }
    MaySlider.setAttribute("style", `transform: translateX(${AMOUNT_May}%)`)
    switch (AMOUNT_May) {
      case 0:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[0].checked = true;
        break;
      case -100:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[1].checked = true;
        break;
      case -200:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[2].checked = true;
        break;
      case -300:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[3].checked = true;
        break;
      case -400:
        MayBtn.forEach(btn => btn.checked = false);
        MayBtn[4].checked = true;
        break;
    }
  }
}

function onClickJune(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_June -= 100;
    if (AMOUNT_June < -400) {
      AMOUNT_June = -400;
    }
    JuneSlider.setAttribute("style", `transform: translateX(${AMOUNT_June}%)`);
    switch (AMOUNT_June) {
      case 0:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[0].checked = true;;
        break;
      case -100:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[1].checked = true;;
        break;
      case -200:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[2].checked = true;;
        break;
      case -300:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[3].checked = true;;
        break;
      case -400:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_June += 100;
    if (AMOUNT_June > 0) {
      AMOUNT_June = 0;
    }
    JuneSlider.setAttribute("style", `transform: translateX(${AMOUNT_June}%)`)
    switch (AMOUNT_June) {
      case 0:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[0].checked = true;
        break;
      case -100:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[1].checked = true;
        break;
      case -200:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[2].checked = true;
        break;
      case -300:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[3].checked = true;
        break;
      case -400:
        JuneBtn.forEach(btn => btn.checked = false);
        JuneBtn[4].checked = true;
        break;
    }
  }
}

function onClickJuly(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_July -= 100;
    if (AMOUNT_July < -400) {
      AMOUNT_July = -400;
    }
    JulySlider.setAttribute("style", `transform: translateX(${AMOUNT_July}%)`);
    switch (AMOUNT_July) {
      case 0:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[0].checked = true;;
        break;
      case -100:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[1].checked = true;;
        break;
      case -200:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[2].checked = true;;
        break;
      case -300:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[3].checked = true;;
        break;
      case -400:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_July += 100;
    if (AMOUNT_July > 0) {
      AMOUNT_July = 0;
    }
    JulySlider.setAttribute("style", `transform: translateX(${AMOUNT_July}%)`)
    switch (AMOUNT_July) {
      case 0:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[0].checked = true;
        break;
      case -100:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[1].checked = true;
        break;
      case -200:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[2].checked = true;
        break;
      case -300:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[3].checked = true;
        break;
      case -400:
        JulyBtn.forEach(btn => btn.checked = false);
        JulyBtn[4].checked = true;
        break;
    }
  }
}

function onClickAugust(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_August -= 100;
    if (AMOUNT_August < -400) {
      AMOUNT_August = -400;
    }
    AugustSlider.setAttribute("style", `transform: translateX(${AMOUNT_August}%)`);
    switch (AMOUNT_August) {
      case 0:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[0].checked = true;;
        break;
      case -100:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[1].checked = true;;
        break;
      case -200:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[2].checked = true;;
        break;
      case -300:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[3].checked = true;;
        break;
      case -400:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_August += 100;
    if (AMOUNT_August > 0) {
      AMOUNT_August = 0;
    }
    AugustSlider.setAttribute("style", `transform: translateX(${AMOUNT_August}%)`)
    switch (AMOUNT_August) {
      case 0:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[0].checked = true;
        break;
      case -100:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[1].checked = true;
        break;
      case -200:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[2].checked = true;
        break;
      case -300:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[3].checked = true;
        break;
      case -400:
        AugustBtn.forEach(btn => btn.checked = false);
        AugustBtn[4].checked = true;
        break;
    }
  }
}

function onClickSeptember(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_September -= 100;
    if (AMOUNT_September < -400) {
      AMOUNT_September = -400;
    }
    SeptemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_September}%)`);
    switch (AMOUNT_September) {
      case 0:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[0].checked = true;;
        break;
      case -100:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[1].checked = true;;
        break;
      case -200:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[2].checked = true;;
        break;
      case -300:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[3].checked = true;;
        break;
      case -400:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_September += 100;
    if (AMOUNT_September > 0) {
      AMOUNT_September = 0;
    }
    SeptemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_September}%)`)
    switch (AMOUNT_September) {
      case 0:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[0].checked = true;
        break;
      case -100:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[1].checked = true;
        break;
      case -200:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[2].checked = true;
        break;
      case -300:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[3].checked = true;
        break;
      case -400:
        SeptemberBtn.forEach(btn => btn.checked = false);
        SeptemberBtn[4].checked = true;
        break;
    }
  }
}

function onClickOctober(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_October -= 100;
    if (AMOUNT_October < -400) {
      AMOUNT_October = -400;
    }
    OctoberSlider.setAttribute("style", `transform: translateX(${AMOUNT_October}%)`);
    switch (AMOUNT_October) {
      case 0:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[0].checked = true;;
        break;
      case -100:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[1].checked = true;;
        break;
      case -200:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[2].checked = true;;
        break;
      case -300:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[3].checked = true;;
        break;
      case -400:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_October += 100;
    if (AMOUNT_October > 0) {
      AMOUNT_October = 0;
    }
    OctoberSlider.setAttribute("style", `transform: translateX(${AMOUNT_October}%)`)
    switch (AMOUNT_October) {
      case 0:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[0].checked = true;
        break;
      case -100:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[1].checked = true;
        break;
      case -200:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[2].checked = true;
        break;
      case -300:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[3].checked = true;
        break;
      case -400:
        OctoberBtn.forEach(btn => btn.checked = false);
        OctoberBtn[4].checked = true;
        break;
    }
  }
}

function onClickNovember(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_November -= 100;
    if (AMOUNT_November < -400) {
      AMOUNT_November = -400;
    }
    NovemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_November}%)`);
    switch (AMOUNT_November) {
      case 0:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[0].checked = true;;
        break;
      case -100:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[1].checked = true;;
        break;
      case -200:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[2].checked = true;;
        break;
      case -300:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[3].checked = true;;
        break;
      case -400:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_November += 100;
    if (AMOUNT_November > 0) {
      AMOUNT_November = 0;
    }
    NovemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_November}%)`)
    switch (AMOUNT_November) {
      case 0:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[0].checked = true;
        break;
      case -100:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[1].checked = true;
        break;
      case -200:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[2].checked = true;
        break;
      case -300:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[3].checked = true;
        break;
      case -400:
        NovemberBtn.forEach(btn => btn.checked = false);
        NovemberBtn[4].checked = true;
        break;
    }
  }
}

function onClickDecember(event) {
  const target = event.target;
  const dataset = target.dataset;
  const id = dataset.id;
  if (id === undefined) {
    return;
  } else if (id === "right-btn") {
    AMOUNT_December -= 100;
    if (AMOUNT_December < -400) {
      AMOUNT_December = -400;
    }
    DecemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_December}%)`);
    switch (AMOUNT_December) {
      case 0:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[0].checked = true;;
        break;
      case -100:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[1].checked = true;;
        break;
      case -200:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[2].checked = true;;
        break;
      case -300:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[3].checked = true;;
        break;
      case -400:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[4].checked = true;;
        break;
    }
  } else {
    AMOUNT_December += 100;
    if (AMOUNT_December > 0) {
      AMOUNT_December = 0;
    }
    DecemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_December}%)`)
    switch (AMOUNT_December) {
      case 0:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[0].checked = true;
        break;
      case -100:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[1].checked = true;
        break;
      case -200:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[2].checked = true;
        break;
      case -300:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[3].checked = true;
        break;
      case -400:
        DecemberBtn.forEach(btn => btn.checked = false);
        DecemberBtn[4].checked = true;
        break;
    }
  }
}



function onChangeJanuaryBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_January = 0;
      JanuarySlider.setAttribute("style", `transform: translateX(${AMOUNT_January}%)`);
      break;
    case "second":
      AMOUNT_January = -100;
      JanuarySlider.setAttribute("style", `transform: translateX(${AMOUNT_January}%)`);
      break;
    case "third":
      AMOUNT_January = -200;
      JanuarySlider.setAttribute("style", `transform: translateX(${AMOUNT_January}%)`);
      break;
    case "fourth":
      AMOUNT_January = -300;
      JanuarySlider.setAttribute("style", `transform: translateX(${AMOUNT_January}%)`);
      break;
    case "fifth":
      AMOUNT_January = -400;
      JanuarySlider.setAttribute("style", `transform: translateX(${AMOUNT_January}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeFebruaryBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_February = 0;
      FebruarySlider.setAttribute("style", `transform: translateX(${AMOUNT_February}%)`);
      break;
    case "second":
      AMOUNT_February = -100;
      FebruarySlider.setAttribute("style", `transform: translateX(${AMOUNT_February}%)`);
      break;
    case "third":
      AMOUNT_February = -200;
      FebruarySlider.setAttribute("style", `transform: translateX(${AMOUNT_February}%)`);
      break;
    case "fourth":
      AMOUNT_February = -300;
      FebruarySlider.setAttribute("style", `transform: translateX(${AMOUNT_February}%)`);
      break;
    case "fifth":
      AMOUNT_February = -400;
      FebruarySlider.setAttribute("style", `transform: translateX(${AMOUNT_February}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeMarchBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_March = 0;
      MarchSlider.setAttribute("style", `transform: translateX(${AMOUNT_March}%)`);
      break;
    case "second":
      AMOUNT_March = -100;
      MarchSlider.setAttribute("style", `transform: translateX(${AMOUNT_March}%)`);
      break;
    case "third":
      AMOUNT_March = -200;
      MarchSlider.setAttribute("style", `transform: translateX(${AMOUNT_March}%)`);
      break;
    case "fourth":
      AMOUNT_March = -300;
      MarchSlider.setAttribute("style", `transform: translateX(${AMOUNT_March}%)`);
      break;
    case "fifth":
      AMOUNT_March = -400;
      MarchSlider.setAttribute("style", `transform: translateX(${AMOUNT_March}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeAprilBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_April = 0;
      AprilSlider.setAttribute("style", `transform: translateX(${AMOUNT_April}%)`);
      break;
    case "second":
      AMOUNT_April = -100;
      AprilSlider.setAttribute("style", `transform: translateX(${AMOUNT_April}%)`);
      break;
    case "third":
      AMOUNT_April = -200;
      AprilSlider.setAttribute("style", `transform: translateX(${AMOUNT_April}%)`);
      break;
    case "fourth":
      AMOUNT_April = -300;
      AprilSlider.setAttribute("style", `transform: translateX(${AMOUNT_April}%)`);
      break;
    case "fifth":
      AMOUNT_April = -400;
      AprilSlider.setAttribute("style", `transform: translateX(${AMOUNT_April}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeMayBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_May = 0;
      MaySlider.setAttribute("style", `transform: translateX(${AMOUNT_May}%)`);
      break;
    case "second":
      AMOUNT_May = -100;
      MaySlider.setAttribute("style", `transform: translateX(${AMOUNT_May}%)`);
      break;
    case "third":
      AMOUNT_May = -200;
      MaySlider.setAttribute("style", `transform: translateX(${AMOUNT_May}%)`);
      break;
    case "fourth":
      AMOUNT_May = -300;
      MaySlider.setAttribute("style", `transform: translateX(${AMOUNT_May}%)`);
      break;
    case "fifth":
      AMOUNT_May = -400;
      MaySlider.setAttribute("style", `transform: translateX(${AMOUNT_May}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeJuneBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_June = 0;
      JuneSlider.setAttribute("style", `transform: translateX(${AMOUNT_June}%)`);
      break;
    case "second":
      AMOUNT_June = -100;
      JuneSlider.setAttribute("style", `transform: translateX(${AMOUNT_June}%)`);
      break;
    case "third":
      AMOUNT_June = -200;
      JuneSlider.setAttribute("style", `transform: translateX(${AMOUNT_June}%)`);
      break;
    case "fourth":
      AMOUNT_June = -300;
      JuneSlider.setAttribute("style", `transform: translateX(${AMOUNT_June}%)`);
      break;
    case "fifth":
      AMOUNT_June = -400;
      JuneSlider.setAttribute("style", `transform: translateX(${AMOUNT_June}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeJulyBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_July = 0;
      JulySlider.setAttribute("style", `transform: translateX(${AMOUNT_July}%)`);
      break;
    case "second":
      AMOUNT_July = -100;
      JulySlider.setAttribute("style", `transform: translateX(${AMOUNT_July}%)`);
      break;
    case "third":
      AMOUNT_July = -200;
      JulySlider.setAttribute("style", `transform: translateX(${AMOUNT_July}%)`);
      break;
    case "fourth":
      AMOUNT_July = -300;
      JulySlider.setAttribute("style", `transform: translateX(${AMOUNT_July}%)`);
      break;
    case "fifth":
      AMOUNT_July = -400;
      JulySlider.setAttribute("style", `transform: translateX(${AMOUNT_July}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeAugustBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_August = 0;
      AugustSlider.setAttribute("style", `transform: translateX(${AMOUNT_August}%)`);
      break;
    case "second":
      AMOUNT_August = -100;
      AugustSlider.setAttribute("style", `transform: translateX(${AMOUNT_August}%)`);
      break;
    case "third":
      AMOUNT_August = -200;
      AugustSlider.setAttribute("style", `transform: translateX(${AMOUNT_August}%)`);
      break;
    case "fourth":
      AMOUNT_August = -300;
      AugustSlider.setAttribute("style", `transform: translateX(${AMOUNT_August}%)`);
      break;
    case "fifth":
      AMOUNT_August = -400;
      AugustSlider.setAttribute("style", `transform: translateX(${AMOUNT_August}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeSeptemberBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_September = 0;
      SeptemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_September}%)`);
      break;
    case "second":
      AMOUNT_September = -100;
      SeptemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_September}%)`);
      break;
    case "third":
      AMOUNT_September = -200;
      SeptemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_September}%)`);
      break;
    case "fourth":
      AMOUNT_September = -300;
      SeptemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_September}%)`);
      break;
    case "fifth":
      AMOUNT_September = -400;
      SeptemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_September}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeOctoberBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_October = 0;
      OctoberSlider.setAttribute("style", `transform: translateX(${AMOUNT_October}%)`);
      break;
    case "second":
      AMOUNT_October = -100;
      OctoberSlider.setAttribute("style", `transform: translateX(${AMOUNT_October}%)`);
      break;
    case "third":
      AMOUNT_October = -200;
      OctoberSlider.setAttribute("style", `transform: translateX(${AMOUNT_October}%)`);
      break;
    case "fourth":
      AMOUNT_October = -300;
      OctoberSlider.setAttribute("style", `transform: translateX(${AMOUNT_October}%)`);
      break;
    case "fifth":
      AMOUNT_October = -400;
      OctoberSlider.setAttribute("style", `transform: translateX(${AMOUNT_October}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeNovemberBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_November = 0;
      NovemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_November}%)`);
      break;
    case "second":
      AMOUNT_November = -100;
      NovemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_November}%)`);
      break;
    case "third":
      AMOUNT_November = -200;
      NovemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_November}%)`);
      break;
    case "fourth":
      AMOUNT_November = -300;
      NovemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_November}%)`);
      break;
    case "fifth":
      AMOUNT_November = -400;
      NovemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_November}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}

function onChangeDecemberBtns(event) {
  const dataset = event.target.dataset;
  const value = dataset.value;
  if (value === undefined) {
    return;
  }
  switch (value) {
    case "first":
      AMOUNT_December = 0;
      DecemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_December}%)`);
      break;
    case "second":
      AMOUNT_December = -100;
      DecemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_December}%)`);
      break;
    case "third":
      AMOUNT_December = -200;
      DecemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_December}%)`);
      break;
    case "fourth":
      AMOUNT_December = -300;
      DecemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_December}%)`);
      break;
    case "fifth":
      AMOUNT_December = -400;
      DecemberSlider.setAttribute("style", `transform: translateX(${AMOUNT_December}%)`);
      break;
    default:
      throw error(`You clicked wrong button`);
  }
}