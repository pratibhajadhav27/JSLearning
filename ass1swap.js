
function swap(n1, n2) {
    console.log('before swap=n1',n1, "n2", n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log('after swap=n1',n1,"n2",n2);
}
var num1 =100;
var num2 =200;
swap(num1, num2);
console.log("============================");
var sweety = "Sweety";
var cutie = "Cutie";
swap(sweety,cutie);