let password = "240404";
let current = "";

function enterNumber(num){

    if(current.length < 6){

        current += num;

        updateDots();

        if(current.length === 6){

            if(current === password){

                window.location.href = "memories.html";

            }else{

                alert("Wrong Password!");

                current = "";

                updateDots();
            }
        }
    }
}

function removeNumber(){

    current = current.slice(0,-1);

    updateDots();

}

function updateDots(){

    let dots = document.querySelectorAll(".dot");

    dots.forEach(dot=>dot.classList.remove("active"));

    for(let i=0;i<current.length;i++){

        dots[i].classList.add("active");

    }

}

function updateTime(){

    let now = new Date();

    document.getElementById("time").innerHTML =
    now.toLocaleTimeString([],{
        hour:'2-digit',
        minute:'2-digit'
    });

}

setInterval(updateTime,1000);

updateTime();