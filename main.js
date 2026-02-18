// document.querySelector("#one").innerHTML = "New str"; //Обращаемся к id
// document.getElementById("one").innerHTML = "New str";
// document.querySelector(".two").innerHTML = "New"; //Обращаемся к классу
// document.querySelector("p").innerHTML = "Nothing";

//let btn = document.querySelector(".check-in");
//let inp = document.querySelector(".text");
//let div = document.querySelector("#one");
//btn.onclick = function () {
//console.log("Hi");
//let s = +inp.value; //меняет тип данных
//console.log(inp.value);
//let e = inp.value;
//div.innerHTML = e; //Меняет значение div
//};

// let mybirth = prompt("Когда ваш день рождения?"); //Диалоговое окно с полем ввода
// if (mybirth == 22) {
//   console.log("Good");
// } else {
//   console.log("Fine");
// }

let inp = document.querySelector(".text");
let h2 = document.querySelector(".answer");
let btn = document.querySelector(".check-in");

btn.onclick = function () {
  let num = Number(inp.value); //Преобразуем в число, если вдруг введен текст, чтобы был NaN

  if (num >= 100) {
    h2.innerHTML = num;
  } else {
    h2.innerHTML = "Ваше число меньше ста, смотрите консоль";
    console.log(num);
  }
};
