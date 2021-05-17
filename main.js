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
  ${returnMiddle(list.pranesimas, list.pranesimas.paveiksliukai)} ${returnFooter(list.autorius)}</div>`;
  return HTML;
}

// other functions

function returnTop(autorius, laikas) {
  let HTML = `<div class="card__top">
  ${getAvatar(autorius)}
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
<p>${pranesimas.tekstas}</p>
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

  if (img.avataras === '') {

    img.avataras = 'user.png';
    
    }

  let HTML = `<img
  src="./img/avatar/${img.avataras}"
  alt="avataras"
/>`;

return HTML;
}

function getPictures(img) {

  let HTML = '';
  let pictures = '';

  if (img.length > 0) {

    for (let i = 0; i< img.length; i++) {
      pictures += `<img src="./img/${img[i]}" alt="pic">`
    }
    
    HTML = `<div class="pictures">
    ${pictures}
     </div>`;
  }
  return HTML;
 
}

function getTime(time) {
  
}








getData(feed);








