const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const integer = integers.sort(function(a, b){return b-a}).filter(integer => integer<19).map(function(num) {num=num*1.5-1;return num})

console.log(integer);

