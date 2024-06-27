function makeLine(num){
    let arr = [];
    let character = '#';
    for(let i = 0; i < num; i++){
        arr.push(character);
    }

    return arr.join("");
}

function makeSquare(num){
    let arr = [];
    
    arr.push(makeRectangle(num,num));
      
    return arr.join("");
}

function makeRectangle(width, height){
    let arr = [];
    for(let i = 0; i < height; i++){
        arr.push(makeLine(width));
        arr.push("\n");
    }
    
    return arr.join("");
}

function makeDownwardStairs(height){
    let arr = [];
    for(let i = 0; i <= height; i++){
        arr.push(makeLine(i));
        arr.push("\n");
    }
    return arr.join("");
}

function makeSpaceLine(numSpaces, numChars){
    let arr = [];
    for(let i = 0; i < (numSpaces + numChars); i++){
        if(i < numSpaces){
            arr.push(" ");
        }else{arr.push("#")}
    }
    for(let i = 0; i < numSpaces; i++){
        arr.push(" ");
    }

    return arr.join(" ");
}

function makeIsoscelesTriangle(height){
    let arr = [];
    
    for(let i = 0; i < height; i++){
        arr.push(makeSpaceLine(height - i, i + i +1));
        arr.push("\n");
              
    }
    
    return arr.join("");
}

function makeDiamond(height){
    let arr = [];
    arr = makeIsoscelesTriangle(height).split();
    
    for(let i = height; i >= 0; i--){
       arr.push(makeSpaceLine(height - i, i + i +1))
       arr.push("\n");
    }
    
    return arr.join("");
}

//console.log(makeRectangle(10,14));
console.log(makeDiamond(5));
