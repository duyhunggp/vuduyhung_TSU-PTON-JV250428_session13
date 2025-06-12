let ip = prompt("nhap vao day so bat ky: ");
let arrInput = ip.split(" ");
console.log(arrInput);

//chuyen tu chuoi sang so
let max = Number(arrInput[0]);

//duyet qua phan tu
for (let i = 1; i < arrInput.length; i++) {
  if (Number(arrInput[i]) > max) {
    //so sanh phan tu voi max
    //neu phan tu lon hon max thi gan gia tri nay cho max
    max = Number(arrInput[i]);
  }
}
alert("so lon nhat la: " + max);
