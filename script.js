// Select DOM elements
const main = document.querySelector("main");
const authorInfoContainer = document.querySelector(".author-info-container");
const authorInfo = document.querySelector(".author-info");
const socialLinksBox = document.querySelector(".socials-links-box");
const shareBtn = document.querySelector(".share-btn");
const svgPath = document.querySelector(".share-icon-path");

// Initialize socials-links-box to be hidden
socialLinksBox.style.display = "none";

// Function to toggle the tooltip for desktop
const toggleTooltipDesktop = () => {
  const btnRect = shareBtn.getBoundingClientRect();
  const mainRect = main.getBoundingClientRect();
  const OFFSET = 25; // Offset for the tooltip position

  socialLinksBox.style.top = `${
    btnRect.top - mainRect.top - socialLinksBox.offsetHeight - OFFSET
  }px`;
  socialLinksBox.style.left = `${
    btnRect.left - mainRect.left + btnRect.width / 2
  }px`;
  socialLinksBox.style.display =
    socialLinksBox.style.display === "flex" ? "none" : "flex";
};

const toggleSocialLinksMobile = () => {
  const isVisible = socialLinksBox.style.display === "flex";

  if (isVisible) {
    socialLinksBox.style.display = "none";
    authorInfo.style.display = "flex";
    authorInfoContainer.style.backgroundColor = "#fff";
    authorInfoContainer.style.padding = "0 2rem 1.25rem 2rem";
    shareBtnMobile.style.backgroundColor = "#ecf2f8";
    svgPath.style.fill = "#6E8098";
  } else {
    authorInfo.style.display = "none";
    authorInfoContainer.style.backgroundColor = "#48556a";
    authorInfoContainer.style.padding = "0.874rem 2rem 0.875rem 1rem";
    socialLinksBox.style.display = "flex";
    shareBtnMobile.style.backgroundColor = "#6E8098";
    svgPath.style.fill = "#fff";
  }
};

// Event listener for the share button
shareBtn.addEventListener("click", () => {
  if (window.innerWidth >= 768) {
    // Desktop view
    toggleTooltipDesktop();
  } else {
    // Mobile view
    toggleSocialLinksMobile();
  }
});
