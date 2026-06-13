const questions = [

{
question:"What was your first impression about me?",
a:"You were the cutest person I had ever seen ❤️",
b:"You looked like a vegetable seller 😂",
correct:"a"
},

{
question:"What's my favorite food?",
a:"Biryani ❤️",
b:"Soap Curry 😂",
correct:"a"
},

{
question:"Which trip is unforgettable?",
a:"Our first trip together ❤️",
b:"Trip to the moon 🌙😂",
correct:"a"
}

];

let current = 0;
function updateQuestion(){

    document.getElementById("count").innerHTML =
    `Question ${current+1}/${questions.length}`;

    document.getElementById("question").innerHTML =
    questions[current].question;

    document.getElementById("optionA").innerHTML =
    "A. " + questions[current].a;

    document.getElementById("optionB").innerHTML =
    "B. " + questions[current].b;

    document.getElementById("result").innerHTML = "";

    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(choice){

    if(choice === questions[current].correct){

        document.getElementById("result").innerHTML =
        "❤️ Correct Answer ❤️";

    }
    else{

        document.getElementById("result").innerHTML =
        "😂 Wrong Answer";

    }

    document.getElementById("nextBtn").style.display =
    "inline-block";

}

function nextQuestion(){

    if(current === questions.length-1){

        window.location.href = "things.html";
        return;

    }

    current++;

    updateQuestion();

}
updateQuestion();