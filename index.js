// Throttling Function
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

// replacing mousemove evnet from window to topBox
const topBox = document.querySelector(".topBox");
const h1 = document.querySelector(".wall-heading");

//////////////////////////////////// CREATING ARTRAY OF IMAGES ///////////////////////////////////////
const baseURL1 = "topAssets/0";
const baseURL = "topAssets/"; // Replace with your actual base path
const numImages = 200;
const imageArray = [];

let imageUrl;
for (let i = 1; i <= numImages; i++) {
  if (i < 10) {
    imageUrl = `${baseURL1}${i.toString()}.jpeg`;
    imageArray.push(imageUrl);
    continue;
  }
  imageUrl = `${baseURL}${i.toString()}.jpeg`;
  imageArray.push(imageUrl);
}

// console.log(imageArray); // Array of 200 images
//////////////////////////////////////////////////// END /////////////////////////////////////////////

topBox.addEventListener(
  "mousemove",
  throttleFunction((details) => {
    // jisko kam baar chalana hai usko yaha likhna hai

    let newDiv = document.createElement("div");
    newDiv.classList.add("new-image-container");
    topBox.appendChild(newDiv);
    newDiv.style.left = details.clientX + "px";
    newDiv.style.top = details.clientY + "px";

    let newImg = document.createElement("img");

    let randomNumber; // Random number between 0 and 199
    for (let i = 0; i < imageArray.length; i++) {
      randomNumber = Math.floor(Math.random() * 200);
    }

    newImg.setAttribute("src", imageArray[randomNumber]);
    newImg.classList.add("divImage");
    newDiv.appendChild(newImg);

    gsap.to(newImg, {
      y: "0",
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(newImg, {
      y: "100%",
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.6,
    });

    // rotate image
    // generate a random number between -20 and 20
    let randDegree = Math.floor(Math.random() * 40) - 20;
    newDiv.style.transform = `rotate(${randDegree}deg)`;

    // decide z index of image
    let randomNum = Math.floor(Math.random() * 10); // 0 to 9

    if (randomNum % 2 === 0) {
      newDiv.classList.add("front");
      newDiv.classList.remove("back");
    } else {
      newDiv.classList.add("back");
      newDiv.classList.remove("front");
    }

    let mapped_position_X = gsap.utils.mapRange(
      0,
      topBox.getBoundingClientRect().width,
      100,
      topBox.getBoundingClientRect().width -
        newDiv.getBoundingClientRect().width -
        150,
      details.clientX
    );

    let mapped_position_Y = gsap.utils.mapRange(
      0,
      topBox.getBoundingClientRect().height,
      100,
      topBox.getBoundingClientRect().height -
        newDiv.getBoundingClientRect().height -
        100,
      details.clientY
    );

    gsap.to(newDiv, {
      left: mapped_position_X,
      top: mapped_position_Y,
      ease: Power1,
      duration: 0.1,
    });

    setTimeout(() => {
      newDiv.remove();
    }, 2000);
  }, 160)
);

const sildingImages = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");

const coverContainer = document.querySelector(".anime-covers-container");

sildingImages.forEach((slide, index) => {
  sildingImages[index].style.left = `${index * 100}%`;
});

let counter = 0;

function slideFunction() {
  sildingImages.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

var flag = false;

leftBtn.addEventListener("click", () => {
  flag = true;
  counter--;
  if (counter < 0) {
    counter = sildingImages.length - 1;
  }
  slideFunction();
  clearInterval();
});

rightBtn.addEventListener("click", () => {
  flag = true;
  counter++;
  if (counter === sildingImages.length) {
    counter = 0;
  }
  slideFunction();
  clearInterval();
});

const headings = document.querySelectorAll(".headingHover");
const hoverImages = document.querySelectorAll(".heading-hoverImage");

// console.log(headings);
// console.log(hoverImages);

headings.forEach((element, index) => {
  element.addEventListener("mousemove", (details) => {
    const image = hoverImages[index];
    image.style.left = details.clientX + "px";
  });

  element.addEventListener("mouseenter", () => {
    const image = hoverImages[index];
    image.style.opacity = 1;
  });

  element.addEventListener("mouseleave", () => {
    const image = hoverImages[index];
    image.style.opacity = 0;
  });
});
