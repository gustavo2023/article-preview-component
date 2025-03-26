document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("share-btn");
  const socialLinksContainer = document.querySelector(".socials-links-box");
  const main = document.querySelector("main");

  // Ensure the tooltip is hidden initially
  socialLinksContainer.style.display = "none";

  shareBtn.addEventListener("click", () => {
    const isVisible = socialLinksContainer.style.display === "flex";
    if (isVisible) {
      socialLinksContainer.style.display = "none";
    } else {
      const btnRect = shareBtn.getBoundingClientRect();
      const mainRect = main.getBoundingClientRect();

      socialLinksContainer.style.top = `${
        btnRect.top - mainRect.top - socialLinksContainer.offsetHeight
      }px`;
      socialLinksContainer.style.left = `${
        btnRect.left - mainRect.left + btnRect.width / 2
      }px`;
      socialLinksContainer.style.display = "flex";
    }
  });

  // Hide tooltip when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !shareBtn.contains(event.target) &&
      !socialLinksContainer.contains(event.target)
    ) {
      socialLinksContainer.style.display = "none";
    }
  });
});
