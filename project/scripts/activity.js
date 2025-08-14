const activities = [
    {
      id: 1,
      title: "Discussion: 1984",
      date: "2025-10-15",
      location: "Community Library, Room A",
      description: "Join us to discuss George Orwell’s '1984' and its themes of surveillance and freedom.",
      bookId: 1 // Links to Books array
    },
    {
      id: 2,
      title: "Discussion: Pride and Prejudice",
      date: "2025-11-12",
      location: "Online via Zoom",
      description: "Explore Jane Austen’s classic romance novel with fellow book lovers.",
      bookId: 2
    },
    {
      id: 3,
      title: "Author Talk: Fantasy Worlds",
      date: "2025-12-05",
      location: "Downtown Bookstore",
      description: "Guest speaker discusses fantasy literature, including 'The Hobbit'.",
      bookId: 3
    },
    {
      id: 4,
      title: "Book Club Workshop",
      date: "2026-01-10",
      location: "Community Center",
      description: "Learn how to analyze literature and prepare for our 'To Kill a Mockingbird' discussion.",
      bookId: 4
    }
];

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()  =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


function displayActivity(activity){
    const activitySection = document.getElementById("activity");
  
    const div = document.createElement('div');
    div.className = 'activity-container'
  
    const paragraph = document.createElement('p');
    paragraph.className = 'activity-content'
  
  
    paragraph.innerHTML = `
      <strong>Title:</strong> ${activity.title}<br>
      <strong>Date:</strong> ${activity.date}<br>
      <strong>Location:</strong> ${activity.location}<br>
      <strong>Descrptions:</strong> ${activity.description}<br>
    `
  
  
  
    div.appendChild(paragraph);
  
    activitySection.appendChild(div);
  
  }

function displayActivities(arrays) {
  const activitySection = document.getElementById("activity");
  activitySection.innerHTML = '';

  arrays.forEach((array) => {
    displayActivity(array);
  });

}

displayActivities(activities)