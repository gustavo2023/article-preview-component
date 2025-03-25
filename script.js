document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("share-btn");
  const tooltip = document.querySelector(".tooltip");
  const main = document.querySelector("main");

  // Ensure the tooltip is hidden initially
  tooltip.style.display = "none";

  shareBtn.addEventListener("click", () => {
    const isVisible = tooltip.style.display === "flex";
    if (isVisible) {
      tooltip.style.display = "none";
    } else {
      const btnRect = shareBtn.getBoundingClientRect();
      const mainRect = main.getBoundingClientRect();

      // Position tooltip above the button relative to the main element
      tooltip.style.top = `${btnRect.top - mainRect.top - tooltip.offsetHeight}px`;
      tooltip.style.left = `${btnRect.left - mainRect.left + btnRect.width / 2}px`;
      tooltip.style.display = "flex";
    }
  });

  // Hide tooltip when clicking outside
  document.addEventListener("click", (event) => {
    if (!shareBtn.contains(event.target) && !tooltip.contains(event.target)) {
      tooltip.style.display = "none";
    }
  });
});
