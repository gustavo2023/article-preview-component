const main = document.querySelector("main");
const authorInfoContainer = document.querySelector(".author-info-container");
const authorInfo = document.querySelector(".author-info");
const socialLinksBox = document.querySelector(".socials-links-box");
const shareBtn = document.querySelector(".share-btn");

socialLinksBox.style.display = "none";

const positionTooltip = () => {
  const btnRect = shareBtn.getBoundingClientRect();
  const mainRect = main.getBoundingClientRect();

  socialLinksBox.style.top = `${
    btnRect.top - mainRect.top - socialLinksBox.offsetHeight - 25
  }px`;
  socialLinksBox.style.left = `${
    btnRect.left - mainRect.left + btnRect.width / 2
  }px`;
  socialLinksBox.style.display = "flex";
};

const closeTooltip = (e) => {
  if (!socialLinksBox.contains(e.target) && !shareBtn.contains(e.target)) {
    socialLinksBox.style.display = "none";
  }
};

shareBtn.addEventListener("click", () => {
  if (socialLinksBox.style.display === "none") {
    positionTooltip();
  } else {
    socialLinksBox.style.display = "none";
  }
});

document.addEventListener("click", closeTooltip);
