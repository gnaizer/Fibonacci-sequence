const n = Number(prompt('Enter ur number: '));
// function fib(n) {
//     var a = 1,
//         b = 1;
//     for (var i = 3; i <= n; i++) {
//         var c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
alert(fib(n));
const result = fib(n);
document.write(result);
