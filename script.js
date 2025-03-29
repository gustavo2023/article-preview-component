document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const authorInfoContainer = document.querySelector(".author-info-container");
  const authorInfo = document.querySelector(".author-info");
  const socialLinksBox = document.querySelector(".socials-links-box");
  const shareBtnDesktop = document.querySelector(".share-btn.desktop");
  const shareBtnMobile = document.querySelector(".share-btn.mobile");
  const svgPath = document.querySelector(".share-icon-path");

  socialLinksBox.style.display = "none";

  const positionTooltip = () => {
    const btnRect = shareBtnDesktop.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();

    socialLinksBox.style.top = `${
      btnRect.top - mainRect.top - socialLinksBox.offsetHeight - 25
    }px`;
    socialLinksBox.style.left = `${
      btnRect.left - mainRect.left + btnRect.width / 2
    }px`;
    socialLinksBox.style.display = "flex";
  };

  const displaySocialLinks = () => {
    authorInfo.style.display = "none";
    authorInfoContainer.style.backgroundColor = "#48556a";
    authorInfoContainer.style.padding = "0.874rem 2rem 0.875rem 1rem";
    socialLinksBox.style.display = "flex";
    shareBtnMobile.style.backgroundColor = "#6E8098";
    svgPath.style.fill = "#fff";
  };

  shareBtnDesktop.addEventListener("click", () => {
    if (socialLinksBox.style.display === "none") {
      positionTooltip();
    } else {
      socialLinksBox.style.display = "none";
    }
  });

  shareBtnMobile.addEventListener("click", () => {
    if (socialLinksBox.style.display === "none") {
      displaySocialLinks();
    } else {
      socialLinksBox.style.display = "none";
      authorInfo.style.display = "flex";
      authorInfoContainer.style.backgroundColor = "#fff";
      authorInfoContainer.style.padding = "0 2rem 1.25rem 2rem";
      shareBtnMobile.style.backgroundColor = "#ecf2f8";
      svgPath.style.fill = "#6E8098";
    }
  });
});
