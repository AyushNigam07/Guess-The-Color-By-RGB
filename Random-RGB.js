let i = 0;
let failedMusic = new Audio('232796015.mp3')
let successMusic = new Audio("228134147.mp3") 
function generateRandomColor() {
  let array = [
    "rgb(206, 206, 192)",
    "rgb(124, 95, 36)",
    "rgb(43, 153, 0)",
    "rgb(84, 229, 145)",
    "rgb(41, 218, 246)",
    "rgb(181, 206, 140)",
    "rgb(151, 54, 3)",
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
document.getElementById(
  "lev"
).innerHTML = `Difficulity Level - Easy : Your Score ${j}/5`;
function myFunc(value, id) {
  const input = document.getElementById("ipt").value;
  if(input !== ""){
    let result = document.getElementById("ipt");
    if (j == 4) {
      let msg = `<div class=" my-5 container alert alert-success text-center " role="alert" style="font-family: Times New Roman">
          <h1>Hurrah! You Passed The Beginner Level , Your Score - ${
            j + 1
          }/5</h1>
          <a type="button" href="./RandomRGB_Med.html" class="btn btn-primary my-4">Next Level -> </a>
          </div>  `;
      document.getElementById("msg").innerHTML = msg;
      setTimeout(() => {
       (document.getElementById("status").innerHTML = null);
      }, 3000);
      j = 0;
      console.log(j);
      let chglev = "Difficulty Level - Medium";
      let val = (document.getElementById("lev").innerText = chglev);
    } else if (result.value === value) {
      console.log("You Won")
      document.body.style.backgroundColor = result.value;
      result.value = "";
      j++;
      console.log(id);
      successMusic.play()
      document.getElementById(
        "lev"
      ).innerHTML = `Difficulity Level - Easy : Your Score ${j}/5`;
      (document.getElementById(
        id
      ).innerHTML = ` <span class="tick">&#10003;</span>`);
      setTimeout(() => {
        let chk = (document.getElementById(id).innerHTML = null);
      }, 2000);
      // console.log(chk)
      let msg = `<div class="alert alert-success" role="alert">
          Hurrah! You Passed  Your Score - ${j}/5
        </div>`;
      document.getElementById("status").innerHTML = msg;
      setTimeout(() => {
        let chck = (document.getElementById("status").innerHTML = null);
      }, 3000);
      // console.log(j);
    } else {
      result.value="";
      i--;
      let msg = `<div class="alert alert-danger m-0" role="alert">
          Wrong ! You Loose , Your Score - ${j}/5 Attempts-${z}/3
      </div>`;
      failedMusic.play();
      let chk = (document.getElementById(
        id
      ).innerHTML = ` <span class="tickwrg">&#10007;</span> `);
      setTimeout(() => {
        let chk = (document.getElementById(id).innerHTML = null);
      }, 2000);
  
      if (z == 3) {
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
      },3000);
    }
  }
  else {
    alert("Please generate rgb first")
  }
}