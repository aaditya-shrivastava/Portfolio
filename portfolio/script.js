let mode = document.querySelector("#mode");
let aboutContent = document.getElementById("about");
let skillsContent = document.getElementById("skills");
let projectCount = document.getElementById("project");
let proBTN = document.getElementById("btn-bottom-left");
let aboutBtn = document.getElementById("btn-top-left");
let skillsBtn = document.getElementById("btn-top-right");
let projectBtn = document.getElementById("projectbtn");
let pro1 = document.getElementById("pro1");
let pro2 = document.getElementById("pro2");
let contactContent = document.getElementById("contact");
let contactBtn = document.getElementById("btn-bottom-right");

let countAbout = true;
let countSkills = true;
let countProBtn = true;
let countContact = true;

//!img
let front = document.getElementById("front");
let TL = document.getElementById("TL");
let TR = document.getElementById("TR");
let BL = document.getElementById("BL");
let BR = document.getElementById("BR");

myImg = [front, TL, TR, BL, BR];
function addHiddenToImg() {
  myImg.forEach((ele) => {
    ele.classList.add("hidden");
  });
}
function frontRemoveHidden() {
  front.classList.remove("hidden");
}

myContent = [aboutContent, skillsContent, projectCount, contactContent];
function addHidden() {
  myContent.forEach((element) => {
    element.classList.add("hidden");
  });
}

aboutBtn.addEventListener("click", () => {
  if (countAbout) {
    countAbout = false;
    addHidden();
    aboutContent.classList.remove("hidden");
    addHiddenToImg();
    TL.classList.remove("hidden");
  } else if (!countAbout) {
    countAbout = true;
    addHiddenToImg();
    frontRemoveHidden();
    aboutContent.classList.add("hidden");
  }
});
proBTN.addEventListener("click", () => {
  if (countProBtn) {
    countProBtn = false;
    addHidden();
    addHiddenToImg();
    BL.classList.remove("hidden");
    projectCount.classList.remove("hidden");
  } else if (!countProBtn) {
    countProBtn = true;
    addHiddenToImg();
    frontRemoveHidden();
    projectCount.classList.add("hidden");
  }
});

// for changing the projects
let countProject = false;
projectBtn.addEventListener("click", () => {
  if (countProject) {
    pro1.classList.remove("hidden");
    pro2.classList.add("hidden");
    countProject = false;
  } else if (!countProject) {
    pro1.classList.add("hidden");
    pro2.classList.remove("hidden");
    countProject = true;
  }
});

skillsBtn.addEventListener("click", () => {
  if (countSkills) {
    addHidden();
    countSkills = false;
    addHiddenToImg();
    TR.classList.remove("hidden");
    skillsContent.classList.remove("hidden");
  } else if (!countSkills) {
    countSkills = true;
    addHiddenToImg();
    frontRemoveHidden();
    skillsContent.classList.add("hidden");
  }
});

contactBtn.addEventListener("click", () => {
  if (countContact) {
    addHidden();
    countContact = false;
    addHiddenToImg();
    BR.classList.remove("hidden");
    contactContent.classList.remove("hidden");
  } else if (!countContact) {
    countContact = true;
    addHiddenToImg();
    frontRemoveHidden();
    contactContent.classList.add("hidden");
  }
});

//! mode
let initialMode = "Light";
mode.addEventListener("input", () => {
  if (initialMode === "Light") {
    document.getElementById("main").style.backgroundColor = "Black";
    document.getElementById("main").style.transition = "0.8s";
    document.querySelector(".centerDiv").style.color = "White";
    initialMode = "Dark";
  } else if (initialMode === "Dark") {
    document.getElementById("main").style.backgroundColor = "white";
    document.querySelector(".centerDiv").style.color = "Black";
    initialMode = "Light";
  }
});