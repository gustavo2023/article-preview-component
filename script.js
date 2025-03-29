// Select DOM elements
const main = document.querySelector("main");
const authorInfoContainer = document.querySelector(".author-info-container");
const authorInfo = document.querySelector(".author-info");
const socialLinksBox = document.querySelector(".socials-links-box");
const shareBtnDesktop = document.querySelector(".share-btn.desktop");
const shareBtnMobile = document.querySelector(".share-btn.mobile");
const svgPath = document.querySelector(".share-icon-path");

// Initialize socials-links-box to be hidden
socialLinksBox.style.display = "none";

// Utility function to toggle display
const toggleDisplay = (element, displayStyle) => {
  element.style.display =
    element.style.display === "none" ? displayStyle : "none";
};

// Function to position the tooltip
const positionTooltip = () => {
  const btnRect = shareBtnDesktop.getBoundingClientRect();
  const mainRect = main.getBoundingClientRect();
  const OFFSET = 25; // Offset for the tooltip position

  socialLinksBox.style.top = `${
    btnRect.top - mainRect.top - socialLinksBox.offsetHeight + OFFSET
  }px`;
  socialLinksBox.style.left = `${
    btnRect.left - mainRect.left + btnRect.width / 2
  }px`;
  socialLinksBox.style.display = "flex";
};

// Function to display social links for mobile
const displaySocialLinksMobile = () => {
  authorInfo.style.display = "none";
  authorInfoContainer.style.backgroundColor = "#48556a";
  authorInfoContainer.style.padding = "0.874rem 2rem 0.875rem 1rem";
  socialLinksBox.style.display = "flex";
  shareBtnMobile.style.backgroundColor = "#6E8098";
  svgPath.style.fill = "#fff";
};

// Function to reset mobile styles
const resetMobileStyles = () => {
  socialLinksBox.style.display = "none";
  authorInfo.style.display = "flex";
  authorInfoContainer.style.backgroundColor = "#fff";
  authorInfoContainer.style.padding = "0 2rem 1.25rem 2rem";
  shareBtnMobile.style.backgroundColor = "#ecf2f8";
  svgPath.style.fill = "#6E8098";
};

// Event listener for desktop share button
shareBtnDesktop.addEventListener("click", () => {
  toggleDisplay(socialLinksBox, "flex");
  if (socialLinksBox.style.display === "flex") {
    positionTooltip();
  }
});

// Event listener for mobile share button
shareBtnMobile.addEventListener("click", () => {
  if (socialLinksBox.style.display === "none") {
    displaySocialLinksMobile();
  } else {
    resetMobileStyles();
  }
});
