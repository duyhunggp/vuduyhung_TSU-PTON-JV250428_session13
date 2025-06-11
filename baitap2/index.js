let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let search = +prompt("moi ban nhap mot con so may man");
let hasNumber = false;
for (i = 0; i < num.length - 1; i++) {
  if (num[i] === search) {
    hasNumber = true;
  }
}
if (hasNumber) {
  alert("Bingo");
} else {
  alert("Chúc bạn may mắn lần sau");
}
