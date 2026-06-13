const lines = document.querySelectorAll(".line");

lines.forEach((line,index)=>{

    setTimeout(()=>{

        line.style.transition="1.5s";
        line.style.opacity="1";
        line.style.transform="translateY(0)";

    },index*2000);

});
function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

   petal.innerHTML = "🌸";

   petal.style.left = Math.random()*window.innerWidth + "px";

   petal.style.animationDuration =
(Math.random()*5 + 5) + "s";

petal.style.animationDelay =
(Math.random()*2) + "s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,300);