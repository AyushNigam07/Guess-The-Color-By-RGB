let i = 0;
let failedMusic = new Audio('232796015.mp3')
let successMusic = new Audio("228134147.mp3") 
function generateRandomColor() {
  let array = [
    "rgb(0, 255, 255)",
    "rgb(206, 206, 192)",
    "rgb(43, 153, 0)",
    "rgb(124, 95, 36)",
    "rgb(84, 229, 145)",
    "rgb(255, 0, 0)",
    "rgb(41, 218, 246)",
    "rgb(255, 255, 0)",
    "rgb(181, 206, 140)",
    "rgb(151, 54, 3)",
    "rgb(0, 128, 0)",
    "rgb(255, 215, 0)",
    "rgb(41, 218, 246)",
  ]
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  shuffle(array);
  
 let val = array[i];
 document.getElementById("ipt").value = val;
 if(i+1 == array.length){
   i=0;
 }
 else(
   i++ 
 )
}
let z = 1;
let j = 0;
document.getElementById("lev").innerHTML = `Difficulity Level - Medium : Your Score ${j}/10`;
function myFunc1(value, id) {
  const input = document.getElementById("ipt").value;
  if(input){
    console.log(value);
    let result = document.getElementById("ipt");
    if (j == 9) {
      let msg = `<div class=" my-5 container alert alert-success text-center " role="alert" style="font-family: Times New Roman">
          <h1>Hurrah! You Passed The Medium Level , Your Score - ${
            j + 1
          }/10</h1>
          <a type="button" href="./RandomRGB_Hard.html" class="btn btn-primary my-4"> Next Level -> </a>
          </div>  `;
      document.getElementById("msg").innerHTML = msg;
      setTimeout(() => {
        let chk = (document.getElementById("status").innerHTML = null);
      }, 3000);
      j = 0;
      console.log(j);
      let chglev = "Difficulty Level - Medium";
      let val = (document.getElementById("lev").innerText = chglev);
    } else if (result.value === value) {
      console.log("You Won");
      result.value = "";
      successMusic.play();
      document.body.style.backgroundColor = val;
      // console.log(j);
      j++;
      console.log(id);
      document.getElementById(
        "lev"
      ).innerHTML = `Difficulity Level - Medium : Your Score ${j}/10`;
      let chk = (document.getElementById(
        id
      ).innerHTML = ` <span class="tick">&#10003;</span>`);
      setTimeout(() => {
        let chk = (document.getElementById(id).innerHTML = null);
      }, 2000);
      let msg = `<div class="alert alert-success" role="alert">
          Hurrah! You Passed  Your Score - ${j}/10
        </div>`;
      document.getElementById("status").innerHTML = msg;
      setTimeout(() => {
        let chck = (document.getElementById("status").innerHTML = null);
      }, 3000);
      // console.log(j);
    } else {
      console.log(result.value);
      console.log(value);
      result.value="";
      failedMusic.play();
      i--;
      let msg = `<div class="alert alert-danger" role="alert">
          Wrong ! You Loose , Your Score - ${j}/10 Attempts-${z}/5
      </div>`;
      let chk = (document.getElementById(
        id
      ).innerHTML = ` <span class="tickwrg">&#10007;</span> `);
      setTimeout(() => {
        let chk = (document.getElementById(id).innerHTML = null);
      }, 2000);
      if (z == 5) {
        let mesg = `
        <div  class="container text-center h-100" style="font-family: Times New Roman">
        <h1 class="my-4 text-center text-light">
        You Lose The Game , See You Next Time </h1>
        <a type="button" class="btn btn-secondary" href="./index.html" >Try Again</a>
        </div>
        `;
        document.getElementById("msg").innerHTML = mesg;
      } else {
        z++;
      }
      document.getElementById("status").innerHTML = msg;
      setTimeout(() => {
        let chk = (document.getElementById("status").innerHTML = null);
      }, 3000);
    }
  }
  else {
    alert("Please generate rgb")
  }
 
}

