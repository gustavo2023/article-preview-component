const main = document.querySelector("main");
const authorInfoContainer = document.querySelector(".author-info-container");
const authorInfo = document.querySelector(".author-info");
const socialLinksBox = document.querySelector(".socials-links-box");
const shareBtns = document.querySelectorAll(".share-btn");

socialLinksBox.style.display = "none";

const positionTooltip = () => {
  const btnRect = shareBtns[0].getBoundingClientRect();
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
  if (!socialLinksBox.contains(e.target) && !shareBtns.contains(e.target)) {
    socialLinksBox.style.display = "none";
  }
};

const displaySocialLinks = () => {
  authorInfo.style.display = "none";
  authorInfoContainer.style.backgroundColor = "#48556a";
  socialLinksBox.style.display = "flex";
};

shareBtns[0].addEventListener("click", () => {
  if (socialLinksBox.style.display === "none") {
    positionTooltip();
  } else {
    socialLinksBox.style.display = "none";
  }
});

shareBtns[1].addEventListener("click", () => {
  if (socialLinksBox.style.display === "none") {
    displaySocialLinks();
  } else {
    socialLinksBox.style.display = "none";
    authorInfo.style.display = "flex";
    authorInfoContainer.style.backgroundColor = "#fff";
  }
});

document.addEventListener("click", closeTooltip);
