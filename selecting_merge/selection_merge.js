

let allCSvg1 = d3.selectAll('#svg1 circle');
console.log(allCSvg1);

let allCSvg2 = d3.selectAll('#svg2 circle');
console.log(allCSvg2);


let allCSvg1Odd = allCSvg1.select(function(d, i, n){
    // console.log(d);
    // console.log(i);
    // console.log(n);
    // console.log(n[i]);
    // console.log(this);
    if(i % 2 == 0){
        this.style.fill = 'indianred';
        return this;
    }else{
        return null;
    }

});

console.log(allCSvg1Odd);


let allCSvg1Even = allCSvg2.select(function(d, i, n){
    // console.log(d);
    // console.log(i);
    // console.log(n);
    // console.log(n[i]);
    // console.log(this);
    if(i % 2 == 0){
        return null;
    }else{
        this.style.fill = 'pink';
        this.style.fill = 'pink';
        return this;
    }

});
console.log(allCSvg1Even);

let allCSvg1OddEven = allCSvg1Odd.merge(allCSvg1Even);
console.log(allCSvg1OddEven);


let allCSvg = allCSvg1.merge(allCSvg2);
console.log(allCSvg);