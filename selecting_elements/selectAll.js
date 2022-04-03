const h1_select_all = d3.selectAll('h1');
console.log(h1_select_all);

const h1_select = d3.select('h1');
console.log(h1_select);


let allCircles = d3.selectAll('circle');
console.log(allCircles);

let allRects = d3.selectAll('rect');
console.log(allRects);

let allSvg = d3.selectAll('svg');
console.log(allSvg);

allSvg = d3.selectAll('.svgarea');
console.log(allSvg);

let allCirclesSelAll = allSvg.selectAll('circle');
console.log(allCirclesSelAll);

let allCirclesSel = allSvg.select('circle');
console.log(allCirclesSel);



// selection objects are iterable
for(let elem of allCirclesSel){
    console.log(elem);
}

for(let elem of allCirclesSelAll){
    console.log(elem);
}

allSvg.selectAll(function(d, i, n){
    console.log(d);
    console.log(i);
    console.log(n);
    console.log(n[i]);
    console.log(this);
})















