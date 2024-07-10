//day-3
//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// function DNAtoRNA(dna) {
//  dna.replace(/T/g, "U");
//   }

const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA('GTGT')); 