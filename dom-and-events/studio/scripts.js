// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let takeOff = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let land = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let rocket = this.document.getElementById("rocket");
    let x = 0;
    let y = 0;
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
   

    takeOff.addEventListener("click", function () {
        let confirmed = window.confirm("Confirm that shuttle is ready for takeoff");

        if (confirmed) {
            //window.alert("it worked");
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000
        }
     });

     land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.transform = `translate(${x=0}px,${y=0}px)`;
     });

     abortMission.addEventListener("click",function(){
        let confirmed = window.confirm("Confirm that you want to abort the mission.");
        if(confirmed){
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "red";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.transform = `translate(${x=0}px,${y=0}px)`;
        }

     });


     //rocket is id for img
    up.addEventListener("click", function(){
        rocket.style.transform = `translate(${x}px, ${y -= 10}px)`
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000

    });
    down.addEventListener("click", function(){
        rocket.style.transform = `translate(${x}px,${y += 10}px)`;
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000
    });
    left.addEventListener("click", function(){
        rocket.style.transform = `translate(${x-=10}px, ${y}px)`;
    });
    right.addEventListener("click", function(){
        rocket.style.transform = `translate(${x+=10}px, ${y}px)`;
    });






});