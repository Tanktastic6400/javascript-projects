
let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
function selectRandomEntry(idArr){
  let randNum = Math.floor(Math.random() * idArr.length);

  return idArr[randNum];
}


const selectedNums = [];
let luckyPick; 
  while (selectedNums.length < 3){
    luckyPick = selectRandomEntry(idNumbers);

    if(!(selectedNums.includes(luckyPick))){
      selectedNums.push(luckyPick);
    }
  }

  //console.log(selectedNums);
// Code your buildCrewArray function here:

function buildCrewArray (idArr , candidateArr){
  let selectedCand = [];

  for(let i = 0; i < candidateArr.length; i++){
      if(idArr.includes(candidateArr[i].astronautID)){
        selectedCand.push(candidateArr[i]);
      }
  
  }

  return selectedCand;
}


// Here are the candidates and the 'animals' array:


let candidateA = {
  'name' :'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
//'____, ____, and ____ are going to space!'
let crew = buildCrewArray(selectedNums, animals);

console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`)