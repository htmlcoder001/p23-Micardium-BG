let doors = document.querySelectorAll(".door"),
  doorSales = document.querySelectorAll(".door__sales"),
  doorWrapper = document.querySelector(".door__wrapper"),
  spinResultWrapper = document.querySelector(".spin-result-wrapper"),
  orderBlock = document.querySelector(".order_block"),
  orderBlockForm = document.querySelector(".order_block"),
  door1 = document.getElementById("door__1"),
  door2 = document.getElementById("door__2"),
  door3 = document.getElementById("door__3"),
  doorSale1 = document.getElementById("door__sales1"),
  doorSale2 = document.getElementById("door__sales2"),
  doorSale3 = document.getElementById("door__sales3");
doors.forEach(function (o) {
  o.addEventListener("click", openDoor);
});
var closePopup = document.querySelector(".close-popup");
function openDoor(o) {
  o.currentTarget.classList.add("open"),
    setTimeout(function () {
      (spinResultWrapper.style.display = "block"),
        setTimeout(function () {
          (doorWrapper.style.display = "none"),
            (orderBlock.style.display = "block"),
            start_timer();
        }, 3500);
    }, 3500),
    doorSales.forEach(function (o) {
      door1.classList.contains("open")
        ? ((doorSale1.innerHTML = "50%"),
          (doorSale1.style.left = "12px"),
          (doorSale2.innerHTML = "25%"),
          (doorSale2.style.left = "30px"),
          (doorSale3.innerHTML = "10%"),
          (doorSale3.style.left = "32px"))
        : door2.classList.contains("open")
        ? ((doorSale2.innerHTML = "50%"),
          (doorSale2.style.left = "12px"),
          (doorSale1.innerHTML = "10%"),
          (doorSale1.style.left = "32px"),
          (doorSale3.innerHTML = "25%"),
          (doorSale3.style.left = "30px"))
        : door3.classList.contains("open") &&
          ((doorSale1.innerHTML = "25%"),
          (doorSale1.style.left = "30px"),
          (doorSale3.innerHTML = "50%"),
          (doorSale3.style.left = "12px"),
          (doorSale2.innerHTML = "10%"),
          (doorSale2.style.left = "32px"));
    });
  for (let o = 0; o < doors.length; o++)
    doors[o].classList.contains("open") ||
      setTimeout(function () {
        doors[o].classList.add("open");
      }, 2500);
  for (let o = 0; o < doors.length; o++)
    doors[o].removeEventListener("click", openDoor);
}
$(".close-popup, .pop-up-button").click(function (o) {
  start_timer(),
    (doorWrapper.style.display = "none"),
    $(".spin-result-wrapper").fadeOut(),
    (orderBlock.style.display = "block"),
    (orderBlockForm.style.display = "block");
});
var intr,
  time = 600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    t = time - 60 * e;
  0 == e && 0 == t && clearInterval(intr), (t = t >= 10 ? t : "0" + t), $("#min").html("0" + e), $("#sec").html(t);
}
