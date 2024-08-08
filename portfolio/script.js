let mode = document.querySelector("#mode");
let aboutBtn = document.getElementById("btn-top-left");
let aboutContent = document.getElementById("about");
let skillsBtn = document.getElementById("btn-top-right");
let skillsContent = document.getElementById("skills")

let initialMode = "Light";
let countAbout = true;
let countSkills = true;

aboutBtn.addEventListener('click',()=>{
  if(countAbout){
    aboutContent.classList.remove('hidden')
    countAbout = false;
  }else if (!countAbout) {
    aboutContent.classList.add('hidden');
    countAbout = true
  }
})
 
skillsBtn.addEventListener('click',()=>{
  if(countSkills){
    skillsContent.classList.remove('hidden')
    countSkills = false;
  }else if (!countSkills) {
    skillsContent.classList.add('hidden');
    countSkills = true
  }
})


//! mode
mode.addEventListener("input", () => {
  if (initialMode === "Light") {
    document.getElementById("main").style.backgroundColor = "Black";
    document.querySelector(".centerDiv").style.color = "White";
    initialMode = "Dark";
  } else if (initialMode === "Dark") {
    document.getElementById("main").style.backgroundColor = "white";
    document.querySelector(".centerDiv").style.color = "Black";
    initialMode = "Light";
  }
});