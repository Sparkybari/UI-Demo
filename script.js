// Select all menu list items
const menuItems = document.querySelectorAll(".menu-list li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove 'active' from all items
    menuItems.forEach(i => i.classList.remove("active"));
    // Add 'active' to the clicked item
    item.classList.add("active");
  });
});
