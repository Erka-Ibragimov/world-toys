const littleLine = document.querySelector(".suffed-animals__lineMove");
const littleLineTwo = document.querySelector(".wooden-animals__lineMove");
const sliderSuffed = document.querySelector(".suffed-toys");
const sliderWooden = document.querySelector(".wooden-toys");
const suffedItem = document.querySelectorAll(".suffed-toys__item");
const woodenItem = document.querySelectorAll(".wooden-toys__item");
const collectSpan = document.querySelector(".nav-info__cart span");
const collectSum = document.querySelector(".nav-info__cart h4");
const navInfo = document.querySelector(".nav-info");
const payBtn = document.querySelector(".nav-info__cart button");
document.querySelector(".slider-suffed-toys-arrows .left").onclick = leftOne;
document.querySelector(".slider-suffed-toys-arrows .right").onclick = rightOne;
document.querySelector(".slider-wooden-toys-arrows .left").onclick = leftTwo;
document.querySelector(".slider-wooden-toys-arrows .right").onclick = rightTwo;
let moveOne = 0;
let moveTwo = 0;
let moveLineOne = 0;
let moveLineTwo = 0;
let collectNumber = 0;
let collectSumm = 0;

window.addEventListener("scroll", function () {
  let scrolled = scrollY;

  if (scrolled > 750) {
    navInfo.classList.add("nav-fixed");
  } else {
    navInfo.classList.remove("nav-fixed");
  }
});

const resultItems = document.querySelector('.result')
const itemFromDocument = document.querySelector('.result .items')
const totalResultCost = document.querySelector('.totalResult h2')

suffedItem.forEach((item, key) => {
  item.addEventListener("click", function () {
    const a = item.querySelector(".suffed-toys__item h4");
    const b = item.querySelector(".suffed-toys__item p");
    const c = item.querySelector(".suffed-toys__item img");
    const suffedName = a.getAttribute("data-name");
    const suffedCost = b.getAttribute("data-cost");
    const suffedImg = c.getAttribute("data-img");
    if (!item.classList.contains("active-suffed-toys__item")) {
      const elem = document.createElement('div')
      elem.classList.add("itemBasket");
      const p = document.createElement('p')
      const h3 = document.createElement('h5')
      const img = document.createElement('img')
      img.src = suffedImg;
      elem.appendChild(p);
      elem.appendChild(h3);
      elem.appendChild(img);
      itemFromDocument.appendChild(elem);
      item.classList.add("active-suffed-toys__item");
      collectSpan.innerHTML = collectNumber++ + 1;
      if (collectNumber > 0) {
        payBtn.style.display = "block";
      }
      collectSumm += +suffedCost;
      h3.innerHTML = suffedName;
      p.innerHTML = suffedCost;
      totalResultCost.innerHTML = collectSumm;
      collectSum.innerHTML = collectSumm;
      if(collectSumm > 0){
        resultItems.style.opacity = 1;
      }
      c.style.transform = `scale(1.5)`;
      setTimeout(
        () => {
          c.style.transform = `scale(1)`;
        },
        300
      );
    } else {
      const remobeItem = document.querySelectorAll('.itemBasket')
      remobeItem.forEach(element => {
        const dataFromDom = element.innerText;
        const arr = dataFromDom.split('\n\n')
        if(arr[1] == suffedName){
          itemFromDocument.removeChild(element) 
        }
      });
      item.classList.remove("active-suffed-toys__item");
      collectSpan.innerHTML = collectNumber-- - 1;
      if (collectNumber == 0) {
        payBtn.style.display = "none";
      }
      collectSumm -= +suffedCost;
      if(collectSumm == 0){
        resultItems.style.opacity = 0;
      } 
      collectSum.innerHTML = collectSumm;
      totalResultCost.innerHTML = collectSumm;
    }
  });
});

woodenItem.forEach((item) => {
  item.addEventListener("click", function () {
    const a = item.querySelector(".wooden-toys__item h4");
    const b = item.querySelector(".wooden-toys__item p");
    const c = item.querySelector(".wooden-toys__item img");
    const woodenName = a.getAttribute("data-name");
    const woodenCost = b.getAttribute("data-cost");
    const woodenImg = c.getAttribute("data-img");
    if (!item.classList.contains("active-wooden-toys__item")) {
      const elem = document.createElement('div')
      elem.classList.add("itemBasket");
      const p = document.createElement('p')
      const h3 = document.createElement('h5')
      const img = document.createElement('img')
      img.src = woodenImg;
      elem.appendChild(p);
      elem.appendChild(h3);
      elem.appendChild(img);
      itemFromDocument.appendChild(elem);
      item.classList.add("active-wooden-toys__item");
      collectSpan.innerHTML = collectNumber++ + 1;
      if (collectNumber > 0) {
        payBtn.style.display = "block";
      }
      collectSumm += +woodenCost;
      h3.innerHTML = woodenName;
      p.innerHTML = woodenCost;
      totalResultCost.innerHTML = collectSumm
      collectSum.innerHTML = collectSumm;
      if(collectSumm > 0){
        resultItems.style.opacity = 1;
      }
      c.style.transform = `scale(1.5)`;
      setTimeout(
        () => {
          c.style.transform = `scale(1)`;
        },
        300
      );
    } else {
      const remobeItem = document.querySelectorAll('.itemBasket')
      remobeItem.forEach(element => {
        const dataFromDom = element.innerText;
        const arr = dataFromDom.split('\n\n')
        if(arr[1] == woodenName){
          itemFromDocument.removeChild(element) 
        }
      });
      item.classList.remove("active-wooden-toys__item");
      collectSpan.innerHTML = collectNumber-- - 1;
      if (collectNumber == 0) {
        payBtn.style.display = "none";
      }
      collectSumm -= +woodenCost;
      if(collectSumm == 0){
        resultItems.style.opacity = 0;
      } 
      collectSum.innerHTML = collectSumm;
      totalResultCost.innerHTML = collectSumm;
    }
  });
});

function leftOne() {
  moveOne -= 292.5;
  moveLineOne += 234;

  if (moveOne < -1170) {
    moveOne = 0;
  }

  if (moveLineOne > 936) {
    moveLineOne = 0;
  }

  littleLine.style.left = moveLineOne + "px";
  sliderSuffed.style.left = moveOne + "px";
  clearTimeout(timerOne);
  autoplayOne();
}

function rightOne() {
  if (moveOne == 0) {
    moveOne = -1170;
    sliderSuffed.style.left = moveOne + "px";
  } else {
    moveOne += 292.5;
    sliderSuffed.style.left = moveOne + "px";
  }

  if (moveLineOne == 0) {
    moveLineOne = 936;
    littleLine.style.left = moveLineOne + "px";
  } else {
    moveLineOne -= 234;
    littleLine.style.left = moveLineOne + "px";
  }

  clearTimeout(timerOne);
  autoplayOne();
}

function leftTwo() {
  moveTwo -= 292.5;
  moveLineTwo += 234;

  if (moveTwo < -1170) {
    moveTwo = 0;
  }

  if (moveLineTwo > 936) {
    moveLineTwo = 0;
  }

  littleLineTwo.style.left = moveLineTwo + "px";
  sliderWooden.style.left = moveTwo + "px";
  clearTimeout(timerTwo);
  autoplayTwo();
}

function rightTwo() {
  if (moveTwo == 0) {
    moveTwo = -1170;
    sliderWooden.style.left = moveTwo + "px";
  } else {
    moveTwo += 292.5;
    sliderWooden.style.left = moveTwo + "px";
  }

  if (moveLineTwo == 0) {
    moveLineTwo = 936;
    littleLineTwo.style.left = moveLineTwo + "px";
  } else {
    moveLineTwo -= 234;
    littleLineTwo.style.left = moveLineTwo + "px";
  }

  clearTimeout(timerTwo);
  autoplayTwo();
}

let timerOne;

function autoplayOne() {
  timerOne = setTimeout(leftOne, 3000);
}

autoplayOne();
let timerTwo;

function autoplayTwo() {
  timerTwo = setTimeout(rightTwo, 3000);
}

autoplayTwo();

suffedItem.forEach((card) => {
  card.onmouseover = function () {
    clearTimeout(timerOne);
  };

  card.onmouseout = function () {
    autoplayOne();
  };
});

woodenItem.forEach((card) => {
  card.onmouseover = function () {
    clearTimeout(timerTwo);
  };

  card.onmouseout = function () {
    autoplayTwo();
  };
});
const registration = document.querySelector(".registration");
const avtoreg = document.querySelector(".avtoreg");
const btnRegistration1 = document.querySelector(".nav-conecting__social-button1");
const btnRegistration2 = document.querySelector(".nav-conecting__social-button2");
const wrapRegistration = document.querySelector(".registration-wrap");
const xRegistration = document.querySelector(".registration span");
const xAvtoreg = document.querySelector(".avtoreg span");

btnRegistration1.addEventListener("click", function () {
  setTimeout(
    () => {
      wrapRegistration.style.display = "block";
    },

    200
  );

  setTimeout(
    () => {
      registration.style.top = 2 + "%";
    },

    100
  );

  xRegistration.addEventListener("click", function () {
    wrapRegistration.style.display = "none";
    registration.style.top = -200 + "%";
  });
});
btnRegistration2.addEventListener("click", function () {
  setTimeout(
    () => {
      wrapRegistration.style.display = "block";
    },

    200
  );

  setTimeout(
    () => {
      avtoreg.style.top = 2 + "%";
    },

    100
  );

  xAvtoreg.addEventListener("click", function () {
    wrapRegistration.style.display = "none";
    avtoreg.style.top = -200 + "%";
  });
});
