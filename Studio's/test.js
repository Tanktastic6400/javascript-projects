let candidateAnswers = ["sally ride", "TRUE", "40", "TrAjEcToRy", "3"];
let temp = "";
//console.log("Before: " + candidateAnswers);
for(let i = 0; i < candidateAnswers.length; i++){
   temp = "";
   //figure out the question your on and do things
    if(i ===0){
        //capitalize the first letter of each word and slice the rest on lowercase
        temp += candidateAnswers[i][0].toUpperCase() + candidateAnswers[i].slice(1,6).toLowerCase();
        temp += candidateAnswers[i].charAt(candidateAnswers[i].indexOf(" ") + 1).toUpperCase() + candidateAnswers[i].slice(7);

    }else if(i ===1){
        //lower case all the letters
        temp += candidateAnswers[i].toLowerCase();
    }else if(i ===3){
        //capitalize the first letter and lowercase the rest.
        temp += candidateAnswers[i][0].toUpperCase() + candidateAnswers[i].slice(1).toLowerCase();
    }else{
        temp = candidateAnswers[i];
    }
    candidateAnswers[i] = temp;
    

}

//console.log("After: " + candidateAnswers);
