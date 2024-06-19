//pt 1
let num = 10.013;
let typeCastNum = String(num);
if(typeCastNum.includes(".")){
    console.log(typeCastNum.length-1);
}else{
console.log(typeCastNum.length);
}

//p2

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT "
dna = dna.trim().toUpperCase();
let splicedDNA = dna.replace('GCT','AGG');


if(dna.indexOf('CAT') > 0){
    console.log("CAT is found!")
}
else{
    console.log("CAT not found")
}

console.log(`Original strand: ${dna}
New Strand: ${splicedDNA}`);
console.log(dna.slice(16,19));

console.log(`The DNA strand is ${dna.length} characters long.`)

//pt3
let jS = "JavaScript";
let modifiedString = "";
console.log(modifiedString.concat(jS.slice(0,1), jS.slice(4,5)));
console.log(jS[0]+jS[4]);



