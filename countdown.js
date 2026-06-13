let count = 5;

const counter = document.getElementById("count");

const timer = setInterval(() => {

    count--;

    if(count > 0){

        counter.innerHTML = count;

    }else{

        clearInterval(timer);

        heartBlast();

        setTimeout(()=>{

            window.location.href = "wish.html";

        },2000);

    }

},1000);


function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration =
    Math.random()*3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);

}


setInterval(createHeart,200);


function heartBlast(){

    for(let i=0;i<80;i++){

        createHeart();

    }

}