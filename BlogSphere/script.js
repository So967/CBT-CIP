// nav
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// login sign up
function openModal(type) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-title").innerText =
    type === "login" ? "Login" : "Sign Up";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Here you would typically send a request to your server
  alert(`Email: ${email}\nPassword: ${password}`); // Just for demonstration
  closeModal(); // Close the modal after submission
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

// filter
document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".filter-item");
  const postBoxes = document.querySelectorAll(".post--box");

  filterItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Filter logic
      postBoxes.forEach((post) => {
        if (filterValue === "all" || post.classList.contains(filterValue)) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });

      // Active class toggle
      filterItems.forEach((i) => i.classList.remove("active-filter"));
      this.classList.add("active-filter");
    });
  });
});

// scoll top
// Get the button
const topBtn = document.getElementById("topBtn");

// Show the button when scrolled down 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
};

// Smooth scroll to top when button clicked
topBtn.onclick = function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Function to handle like button click
function toggleLike(button) {
  const likeCountSpan = button.nextElementSibling;
  let likeCount = parseInt(likeCountSpan.textContent.split(" ")[0]);

  if (button.classList.toggle("liked")) {
    likeCount++;
    button.textContent = "👍 Liked";
  } else {
    likeCount--;
    button.textContent = "👍 Like";
  }

  likeCountSpan.textContent = `${likeCount} Likes`;
}

// Function to add a comment
function addComment(button) {
  const commentInput = button.previousElementSibling;
  const commentText = commentInput.value.trim();

  if (commentText) {
    const commentsList = button
      .closest(".comments-section")
      .querySelector(".comments-list");
    const newComment = document.createElement("div");
    newComment.textContent = commentText;
    commentsList.appendChild(newComment);

    // Clear the input
    commentInput.value = "";
  } else {
    alert("Please enter a comment.");
  }
}
