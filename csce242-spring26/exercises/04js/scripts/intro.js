document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML= "done!";
}; //function is defined by its execution .. hence:  => {}

document.getElementById("link1").onclick = (e) => {
    e.preventDefault(); //dont go to links destination
    e.target.classList.add("cool-link");
};

document.getElementById("ball-button").onclick = (e) => {
    console.log("hi");
    document.getElementById("ball").classList.add("bouncing-ball");
};

document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-msg");
    const plantImage = document.getElementById("img-plant");
    plantImage.classList.remove("hidden");

    if (numDays == NaN ) {
        pMessage.innerHTML = `no plant`;
        plantImage.src="";
    }
    if (numDays <=2 ) {
        //pMessage.innerHTML = "Let yo plant rest" + numDays + "bruh"
        pMessage.innerHTML = `Let yo plant rest its been ${numDays} days.`;
        plantImage.src="images/healthy.png";
    } else if (numDays <= 5) {
        pMessage.innerHTML = `Time to wata it's been ${numDays} days.`;
        plantImage.src="images/thirsty.png"
    }
    else if (numDays <= 7) {
        pMessage.innerHTML = `Oh no ur plant its wilting, its been ${numDays} days.`;
        plantImage.src="images/wilting.png";
    }
    else {
        pMessage.innerHTML = `ur plant is dead x_x, its been ${numDays} days.`;
        plantImage.src="images/dead.png";
    }
};

//counting
let countInterval;
let count = 0;
const pCount = document.getElementById("p-const"); //if u need to access an element outside of the function, delcare it outside bro. 
const btnStart = document.getElementById("btn-Start");
const btnPause = document.getElementById("btn-Pause");
const btnStop = document.getElementById("btn-Stop");
btnPause.disabled = true;
btnStop.disabled = true;
btnStart.disabled = false;



btnStart.onclick = () => {
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
    },500); //every half a second (500ms) the function in there will be called. SetInterval has 2 parameters. 
    console.log("Start-clicked");
    btnPause.disabled = false;
    btnStop.disabled = false;
};

btnPause.onclick = () => {
    clearInterval(countInterval);
    console.log("Pause-clicked");
    btnPause.disabled = true;
    
};

btnStop.onclick = () => {
    console.log("Stop-clicked");
    count=0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnPause.disabled = true;
    btnStop.disabled = true;
};

//date display
setInterval(()=>{
    const pDisplay = document.getElementById("date-Display");
    const today = new Date(); //todays date
    const seconds = today.getSeconds();
    pDisplay.innerHTML = today,seconds;
}, 1000);