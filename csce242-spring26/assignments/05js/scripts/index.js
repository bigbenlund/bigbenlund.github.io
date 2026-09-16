/* Speech bubble appear on click */
document.getElementById("speech").onclick = (e) => {
    document.getElementById("bubble-content").innerHTML = "Hello"
    document.getElementById("bubble-container").classList.remove("hidden");
    
};

/*Item chose appears on selection */
document.getElementById("bev-options").onchange = (e) => {
    const bev = e.target.value;
    document.getElementById("choice").innerHTML = `You Chose ${bev}`;
}

/*lil sun emoji appears*/
document.getElementById("img-container").onclick = () => {
    document.getElementById("lil-sticker").style.opacity=1;
};
