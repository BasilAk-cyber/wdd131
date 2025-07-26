const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()  =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

 const currentYear = new Date().getFullYear()
  document.getElementById("currentyear").textContent = currentYear

  // Set last modified date in footer
  const lastModified = document.lastModified
  document.getElementById("lastmodified").textContent = lastModified