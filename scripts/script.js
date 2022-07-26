/*Filename: My java script
 Author: Esther Chukwunwike
 Date: 10/10/2021
 Description: My first Webpage javascript
*/

/*the letant nonchanging variables return the first element 
within the document that matched their specified selector*/
let play_board = document.querySelector(".play_area");
let check_btn = document.querySelector("#check-btn");
let popUp = document.querySelector(".popup");
let cross = document.querySelector("#cross");
let img = ["a", "b", "c"];
let cell = [];
let [b1, b2, b3, b4, b5, b6, b7, b8, b9] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

play_board.addEventListener('click', (t) => {
  let id = t.target.id;

  // algorithim for randomizing the pictures
  let ranNum = parseInt(Math.floor(Math.random() * 3), 10);
  let connectId = document.querySelector(`#${id}`);

  // this specifies where to find images and pick at random for each cell/box
  if (id == 'b1') {
    connectId.style.backgroundImage = `url("./images/${img[b1]}.jpg")`;
    cell[0] = b1;
    b1 = (b1 + 1) % 3;

  }

  if (id == 'b2') {
    connectId.style.backgroundImage = `url("./images/${img[b2]}.jpg")`;
    cell[1] = b2;
    b2 = (b2 + 1) % 3;

  }
  if (id == 'b3') {
    connectId.style.backgroundImage = `url("./images/${img[b3]}.jpg")`;
    cell[2] = b3;
    b3 = (b3 + 1) % 3;
  }
  if (id == 'b4') {
    connectId.style.backgroundImage = `url("./images/${img[b4]}.jpg")`;
    cell[3] = b4;
    b4 = (b4 + 1) % 3;
  }
  if (id == 'b5') {
    connectId.style.backgroundImage = `url("./images/${img[b5]}.jpg")`;
    cell[4] = b5;
    b5 = (b5 + 1) % 3;

  }
  if (id == 'b6') {
    connectId.style.backgroundImage = `url("./images/${img[b6]}.jpg")`;
    cell[5] = b6;
    b6 = (b6 + 1) % 3;
  }
  if (id == 'b7') {
    connectId.style.backgroundImage = `url("./images/${img[b7]}.jpg")`;
    cell[6] = b7;
    b7 = (b7 + 1) % 3;
  }
  if (id == 'b8') {
    connectId.style.backgroundImage = `url("./images/${img[b8]}.jpg")`;
    cell[7] = b8;
    b8 = (b8 + 1) % 3;
  }
  if (id == 'b9') {
    connectId.style.backgroundImage = `url("./images/${img[b9]}.jpg")`;
    cell[8] = b9;
    b9 = (b9 + 1) % 3;

  }


});

// message to be displayed in pop up
let message = ["You Win!", "Neither diagonal matches"];

// button Event, basically shows the pop up message
let sta = document.querySelector("#status");
check_btn.addEventListener('click', () => {

  console.log(cell[0], cell[4], cell[8]);

  popUp.style.visibility = "visible";

  // winning cases for game
  if (cell[0] == cell[4] && cell[4] == cell[8] && cell[0] != undefined) {

    sta.innerHTML = message[0];

  }
  else if (cell[2] == cell[4] && cell[4] == cell[6] && cell[2] != undefined) {

    sta.innerHTML = message[0];
  }

  // lose cases 
  else {

    sta.innerHTML = message[1];

  }

});

//when x is clicked on pop up it disappears and reload game
cross.addEventListener('click', () => {
  popUp.style.visibility = "hidden";
  document.location.reload(true);
});