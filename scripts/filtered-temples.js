const byuTemples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
]

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


function displayTempleImage(temples){
  const imageSection = document.getElementById("image-gallery");

  const figure = document.createElement('figure');
  figure.className = 'image-figure'

  const img = document.createElement('img');
  img.className = 'temple-image'
  img.src = temples.imageUrl
  img.alt = `The ${temples.templeName} temple`

  const figcaption = document.createElement('figcaption');
  figcaption.className = 'image-caption'

  figcaption.innerHTML = `
    <strong>Name:</strong> ${temples.templeName}<br>
    <strong>Location:</strong> ${temples.location}<br>
    <strong>Dedicated:</strong> ${temples.dedicated}<br>
    <strong>Area:</strong> ${temples.area}<br>
  `



  figure.appendChild(figcaption);
  figure.appendChild(img);

  imageSection.appendChild(figure);

}

function displayTemple(arrays) {
  const imageSection = document.getElementById("image-gallery");
  imageSection.innerHTML = '';

  arrays.forEach((array) => {
    displayTempleImage(array);
  });

}

function displayLargeTemple(arrays) {
  const imageSection = document.getElementById("image-gallery");
  imageSection.innerHTML = '';

  arrays.forEach((array) => {
    if (array.area >= 90000){
      displayTempleImage(array);
    }
  });

}

function displaySmallTemple(arrays) {
  const imageSection = document.getElementById("image-gallery");
  imageSection.innerHTML = '';

  arrays.forEach((array) => {
    if (array.area <= 10000){
      displayTempleImage(array);
    }
  });

}

function displayOldTemple(arrays) {
  const imageSection = document.getElementById("image-gallery");
  imageSection.innerHTML = '';

  arrays.forEach((array) => {
    const year = parseInt(array.dedicated.split(",")[0]);
    if (year < 1900){
      displayTempleImage(array);
    }
  });

}

function displayNewTemple(arrays) {
  const imageSection = document.getElementById("image-gallery");
  imageSection.innerHTML = '';

  arrays.forEach((array) => {
    const year = parseInt(array.dedicated.split(",")[0]);
    if (year > 2000){
      displayTempleImage(array);
    }
  });

}


document.getElementById("large-temple").addEventListener("click", () => {
  displayLargeTemple(byuTemples);
});

document.getElementById("home").addEventListener("click", () => {
  displayTemple(byuTemples);
});

document.getElementById("smalls-temple").addEventListener("click", () => {
  displaySmallTemple(byuTemples);
});

document.getElementById("old-temple").addEventListener("click", () => {
  displayOldTemple(byuTemples);
});

document.getElementById("new-temple").addEventListener("click", () => {
  displayNewTemple(byuTemples);
});





displayTemple(byuTemples);