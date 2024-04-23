const sliders = document.querySelectorAll(".content input");
const rColor = document.getElementById("red");
const gColor = document.getElementById("green");
const bColor = document.getElementById("blue");
const color = document.querySelector(".color input");
const copyBtn = document.getElementById("copy-btn");

let generateColor = () => {
    let rColorValue = rColor.value;
    let gColorValue = gColor.value;
    let bColorValue = bColor.value;

    let rgbColor = `rgb(${rColorValue}, ${gColorValue}, ${bColorValue})`;
    color.value = rgbColor;

    document.body.style.backgroundColor = rgbColor;
}

let copyColor = () => {
    /*color.select();
    document.execCommand("copy");*/
    color.select();
    color.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(color.value);
    copyBtn.innerText = "Copied RGB"
    setTimeout(() => {
        copyBtn.innerText = "Copy RGB"
    },2000)
}

sliders.forEach((val) => {
    val.addEventListener("input",generateColor);
})


window.addEventListener("load",generateColor);
copyBtn.addEventListener("click",copyColor);