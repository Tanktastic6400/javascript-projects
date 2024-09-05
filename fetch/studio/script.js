//TODO: Add Your Code Below
window.addEventListener("load", function (event) {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function(json){
            let div = document.getElementById("container");
            let astronautHTML = "";
            let activeColor;

            
            

            for(let i =0; i< json.length; i++){
                if(json[i].active){
                    activeColor = "green";
                }else{activeColor = "red";}
                astronautHTML += `
            <div class="astronaut">
                <div class ="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                     <ul>
                        <li> Hourse in space: ${json[i].hoursInSpace}</li>
                        <li style="color: ${activeColor}"> Active: ${json[i].active}</li>
                        <li> Skills: ${json[i].skills}</li>
                     <ul>
                </div>
                <img class="avatar" src ="${json[i].picture}">
                </div>`;

            }
            console.log(astronautHTML);
            div.innerHTML = astronautHTML;
        });
    });


});
