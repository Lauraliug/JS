"use strict";

function getData(data) {
  let HTML = "";
  let middleBody = document.querySelector(".middle");

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      HTML += getList(data[i]);
    }
    return (middleBody.innerHTML = HTML);
  }
}

//Main function

function getList(list) {
  let HTML = `<div class="card">${returnTop(list.autorius, list.laikas)}
  ${returnMiddle(
    list.pranesimas,
    list.pranesimas.paveiksliukai
  )} ${returnFooter(list.autorius)}</div>`;
  return HTML;
}

// other functions

function returnTop(autorius, laikas) {
  let HTML = `<div class="card__top">
  ${getAvatar(autorius)}
  <div class="block">
    <div class="name">${autorius.vardas} ${autorius.pavarde}</div>
    ${getTime(laikas)}
  </div>
  <div class="info">
    <i class="fas fa-ellipsis-v"></i>
  </div>
</div>`;
  return HTML;
}

function returnMiddle(pranesimas) {
  let HTML = `<div class="card__middle">
  ${getText(pranesimas)}
<div class="pictures">
${getPictures(pranesimas.paveiksliukai)}
</div>
  <hr />
  <div class="block">
    <div class="like">
      <i class="fas fa-heart">Like</i>
    </div>
    <div class="comments">
      <i class="fas fa-comment">Comments</i>
    </div>
  </div>
  <hr />
</div>`;
  return HTML;
}

function returnFooter(autorius) {
  let HTML = `<div class="card__footer">
  ${getAvatar(autorius)}
              <textarea placeholder=""></textarea>
              <div class="icon__block">
                <div class="smile">
                  <i class="fas fa-smile"></i>
                </div>
                <div class="photo">
                  <i class="fas fa-camera"></i>
                </div>
                <div class="gif">
                  <i class="fas fa-file"></i>
                </div>
                <div class="sticker">
                  <i class="fas fa-sticky-note"></i>
                </div>
              </div>
          </div>`;
  return HTML;
}

function getAvatar(img) {
  if (img.avataras === "") {
    img.avataras = "user.png";
  }

  let HTML = `<img
  src="./img/avatar/${img.avataras}"
  alt="avataras"
/>`;

  return HTML;
}

function getPictures(img) {
  let HTML = "";
  let pictures = "";

  if (img.length > 0) {
    for (let i = 0; i < img.length; i++) {
      pictures += `<img src="./img/${img[i]}" alt="pic">`;
    }

    HTML = `<div class="pictures">
    ${pictures}
     </div>`;
  }
  return HTML;
}

function getTime(list) {
  let HTML = "";

  let time;
  let y = Math.floor(list / 3600 / 24 / 365);
  let d = Math.floor(list / 3600 / 24);
  let h = Math.floor(list / 3600);
  let min = Math.floor(list / 60);

  if (y > 0) {
    time = `${y} y.`;
  } else if (d > 0) {
    time = `${d} d.`;
  } else if (h > 0) {
    time = `${h} h.`;
  } else if (min > 0) {
    time = `${min} min.`;
  } else {
    time = `${list} s.`;
  }

  HTML = `<div class="time">${time}</div>`;

  return HTML;
}

function getText(pranesimas) {
  let messageText = pranesimas.tekstas;

  let HTML = `<p>${pranesimas.tekstas}</p>`;

  return HTML;
}

function getText(pranesimas) {
  let messageText = pranesimas.tekstas;

  let HTML;

  let kiek = 10;

  let cutted;

  let print;

  let textArr = messageText.split(" ");

  // Cutted TEXT first

  if (textArr.length > kiek) {
    cutted = textArr.slice();

    cutted.length = kiek;

    print = cutted.join(" ");

    HTML = `<p value="${messageText}">${print}</p><span id="showMore">...show more</span>`;
  } else {
    // Normal TEXT

    print = textArr.join(" ");

    HTML = `<p>${print}<span></span></p>`;
  }

  return HTML;
}

function renderText() {
  let cards = document.querySelectorAll(".card");

  let showButton = document.querySelectorAll(".card__middle span");

  let cardMiddle = document.querySelectorAll(".card__middle p");

  // let showButton = document.getElementById('.showMore');

  for (let i = 0; i < showButton.length; i++) {
    let feedText = feed[i].pranesimas.tekstas;

    showButton[i].addEventListener("click", (e) => {
      cardMiddle[i].innerHTML = feedText;
    });
  }
}






getData(feed);

renderText();
