const h1 = d3.select('h1');
console.log(h1);

let firstSvg = d3.select('svg');
console.log(firstSvg);
firstSvg = d3.select('svg#circle');
console.log(firstSvg);
firstSvg = d3.select('#circle');
console.log(firstSvg);


let secondSvg = d3.select('#rects');
console.log(secondSvg);
secondSvg = d3.select('svg:nth-of-type(2)');
console.log(secondSvg);

let firstCircles = d3.select('circle');
console.log(firstCircles);

let secondCircle = d3.select('circle:nth-of-type(2)');
console.log(secondCircle);

let firstRect = d3.select('rect');
console.log(firstRect);

let secondRect = d3.select('rect:nth-of-type(2)');
console.log(secondRect);


firstRect = secondSvg.select('rect');
console.log(firstRect);

secondSvg.select(function(d, i, n){
    console.log(d);  // data of secondSvg
    console.log(i);  // index of secondSvg
    console.log(n);  // current group of node
    console.log(n[i]);
    console.log(this);
});