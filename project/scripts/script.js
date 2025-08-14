// js/bookclub.js
const books = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      image: "images/1984.jpg",
      summary: "A dystopian novel exploring surveillance and control.",
      discussionDate: "2025-10-15"
    },
    {
      id: 2,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      image: "images/pride.jpg",
      summary: "A classic romance exploring love and societal expectations.",
      discussionDate: "2025-11-12"
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      image: "images/hobbit.jpg",
      summary: "A fantasy adventure about Bilbo Baggins' journey.",
      discussionDate: "2025-12-10"
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Literary Fiction",
      image: "images/mockingbird.jpg",
      summary: "A story of justice and morality in the American South.",
      discussionDate: "2026-01-14"
    }
];

// js/bookclub.js
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


function displayAvailableBooks(books){
    const bookSection = document.getElementById("books");
  
    const figure = document.createElement('figure');
    figure.className = 'book-figure'
  
    const img = document.createElement('img');
    img.className = 'book-image'
    img.src = books.image
    img.alt = `A picture of ${books.title}`
  
    const figcaption = document.createElement('figcaption');
    figcaption.className = 'book-caption'
  
    figcaption.innerHTML = `
      <strong>Name:</strong> ${books.title}<br>
      <strong>Author:</strong> ${books.author}<br>
      <strong>Genre:</strong> ${books.genre}<br>
      <strong>Summary:</strong> ${books.summary}<br>
    `
  
  
  
    figure.appendChild(figcaption);
    figure.appendChild(img);
  
    bookSection.appendChild(figure);
  
  }

function displayBooks(arrays) {
  const bookSection = document.getElementById("books");
  bookSection.innerHTML = '';

  arrays.forEach((array) => {
    displayAvailableBooks(array);
  });

}

  // Form submission with validation
  const form = document.querySelector('#join-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const location = document.querySelector('#location').value.trim();
      const message = document.querySelector('#message').value.trim();
      const newsletter = document.querySelector('#newsletter').checked;
      const formMessage = document.querySelector('#form-message');

      // Validation
      if (!name || !email || !location || !message) {
        formMessage.textContent = 'Please fill out all required fields.';
        formMessage.classList.remove('hidden', 'form-success');
        formMessage.classList.add('form-error');
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.remove('hidden', 'form-success');
        formMessage.classList.add('form-error');
        return;
      }

      // Increment and save member count
      let submissionCount = localStorage.getItem('submissionCount');
      submissionCount = submissionCount ? parseInt(submissionCount) + 1 : 1;
      localStorage.setItem('submissionCount', submissionCount);

      // Save user data
      localStorage.setItem('lastUser', JSON.stringify({
        name,
        email,
        location,
        message,
        newsletter
      }));

      // Show success message and redirect
      formMessage.textContent = 'Form submitted successfully!';
      formMessage.classList.remove('hidden', 'form-error');
      formMessage.classList.add('form-success');
      setTimeout(() => {
        window.location.href = 'members.html';
      }, 1000);
    });
  }

  // Display member count on members.html
  const memberCountDisplay = document.querySelector('#member-count');
  if (memberCountDisplay) {
    let count = localStorage.getItem('submissionCount');
    count = count ? parseInt(count) : 1;
    memberCountDisplay.textContent = count;
  }

displayBooks(books)
