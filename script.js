//your code here!
const list = document.getElementById("infi-list");
let itemCount = 1; // Start counter for list items

// Function to add 'n' list items
function addListItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// Initially add 10 items
addListItems(10);

// Scroll event listener
list.addEventListener("scroll", () => {
  // Check if user has scrolled to the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items
  }
});

