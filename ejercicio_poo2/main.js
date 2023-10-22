//Esto no cuenta
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let image = new Image();
image.src = "https://www.researchgate.net/publication/326272954/figure/fig2/AS:941745466535936@1601541024181/Original-2554x1438-sized-images-were-uniformly-cropped-and-scaled-down-to-200x300-sized_Q320.jpg";

image.addEventListener("load", load = () => ctx.drawImage(image, 10, 10));