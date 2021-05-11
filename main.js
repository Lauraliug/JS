"use strict";

function getData(data) {
  let HTML = "";
  let middleBody = document.querySelector(".middle");

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      HTML += getList(data[i]);
    }
    return middleBody.innerHTML = HTML;
  }
}

//Main function

function getList(list) {
  let HTML = `<div class="card">${returnTop(list.autorius,list.laikas)}
  ${returnMiddle(list.pranesimas)} ${returnFooter(list)}</div>`;
  return HTML;
}

// other functions

function returnTop(autorius, laikas) {
  let HTML = `<div class="card__top">
  <img
    src="./img/avatar/user.png"
    alt="avataras"
    width="50px"
    height="50px"
  />
  <div class="block">
    <div class="name">${autorius.vardas} ${autorius.pavarde}</div>
    <div class="time">${laikas}</div>
  </div>
  <div class="info">
    <i class="fas fa-ellipsis-v"></i>
  </div>
</div>`;
return HTML;
}

function returnMiddle(pranesimas) {
  let HTML = `<div class="card__middle">
  <textarea name="text">${pranesimas.tekstas}</textarea>
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

function returnFooter() {
  let HTML = `<div class="card__footer">
  <img
    src="./img/avatar/user.png"
    alt="avataras"
    width="35px"
    height="35px"
  />
  <form
    class="form"
    action=""
    method="GET"
    enctype="multipart/form-data"
  >
    <input class="input" type="text" />
    <button class="button" type="submit"></button>
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
  </form>
</div>`;
return HTML;
}


getData(feed);






