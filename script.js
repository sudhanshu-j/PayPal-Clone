// Select all elements with the class "logo" and add a click event listener to each
document.querySelectorAll(".logo").forEach((logo) => {
  logo.addEventListener("click", () => {
    // When the logo is clicked, display the front page and hide the login and signup pages
    document.querySelector(".front-page").style.display = "block";
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".signup-page").style.display = "none";
  });
});

// Select all elements with the class "login" and add a click event listener to each
document.querySelectorAll(".login").forEach((loginBtn) => {
  loginBtn.addEventListener("click", () => {
    // When the login button is clicked, hide the front page and display the login page
    document.querySelector(".front-page").style.display = "none";
    document.querySelector(".login-page").style.display = "block";
    document.querySelector(".signup-page").style.display = "none";
  });
});

// Select all elements with the class "signup" and add a click event listener to each
document.querySelectorAll(".signup").forEach((signupBtn) => {
  signupBtn.addEventListener("click", () => {
    // When the signup button is clicked, hide the front and login pages, and display the signup page
    document.querySelector(".front-page").style.display = "none";
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".signup-page").style.display = "flex"; // Flex display for layout purposes
  });
});
// End of Pages

// Navigation
// Select all elements with the class "dropdown-hover"
const dropdownItems = document.querySelectorAll(".dropdown-hover");

// Check if the window width is less than 1000 pixels
if (window.innerWidth < 1000) {
  const menuIcon = document.querySelector(".menu"); // Select the menu icon
  const navbar = document.querySelector(".navbar"); // Select the navbar

  // Add a click event listener to the menu icon
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change"); // Toggle the "change" class on the navbar for styling

    // If the navbar does not have the "change" class, move all dropdowns out of view
    if (!navbar.classList.contains("change")) {
      document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
        dropdown.style.left = "-20rem"; // Hide dropdowns by moving them off-screen
      });
    }
  });

  // Add click event listeners to show dropdowns when their corresponding link is clicked
  document.querySelectorAll(".show-dropdown").forEach((link) => {
    link.addEventListener("click", () => {
      link.nextElementSibling.style.left = "0"; // Move the dropdown into view
    });
  });

  // Add click event listeners to heading links to hide their dropdowns
  document.querySelectorAll(".dropdown-heading-link").forEach((headingLink) => {
    headingLink.addEventListener("click", () => {
      headingLink.parentElement.parentElement.style.left = "-20rem"; // Move the dropdown off-screen
    });
  });
} else {
  // If the window width is greater than or equal to 1000 pixels
  dropdownItems.forEach((dropdownItem) => {
    // Add mouseover event listener to show dropdowns
    dropdownItem.addEventListener("mouseover", () => {
      dropdownItem.lastElementChild.style.cssText =
        "opacity: 1; visibility: visible"; // Make the dropdown visible
      document.querySelector(".navbar-wrapper").style.background =
        "linear-gradient(to right, #066399, #2f8fdf, #066399)"; // Change navbar background
      dropdownItem.firstElementChild.firstElementChild.style.transform =
        "rotate(180deg)"; // Rotate the dropdown icon to indicate it’s open
    });
    // Add mouseout event listener to hide dropdowns
    dropdownItem.addEventListener("mouseout", () => {
      dropdownItem.lastElementChild.style.cssText =
        "opacity: 0; visibility: hidden"; // Hide the dropdown
      document.querySelector(".navbar-wrapper").style.background = "none"; // Reset navbar background
      dropdownItem.firstElementChild.firstElementChild.style.transform =
        "rotate(0)"; // Reset the dropdown icon rotation
    });
  });
}

// Add a resize event listener to reload the window on size change
window.addEventListener("resize", () => {
  window.location.reload(); // Reload the page to apply styles based on new size
});

// End of Navigation
