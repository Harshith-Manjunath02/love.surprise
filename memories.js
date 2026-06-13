const memories = [
{
    title:"First Meet ❤️",
    image:"1.jpg",
    story:"This was the first time we met. It became one of the most beautiful memories of our life ❤️"
},

{
    title:"1st Marriage 💕",
    image:"2.jpg",
    story:"Those late-night conversations are still my favorite memories ❤️"
},

{
    title:"First Selfie After Marriage ❤️",
    image:"3.jpg",
    story:"A small gift with lots of love and happiness ❤️"
},

{
    title:"2nd Marriage ❤️",
    image:"4.jpg",
    story:"One of the most unforgettable days of our journey ❤️"
},

{
    title:"First Trip ✨",
    image:"5.jpg",
    story:"No matter what happens, these memories will stay forever ❤️"
}
];

let current = 0;

function updateMemory(){

    document.getElementById("memoryImage").src =
        memories[current].image;

    document.getElementById("title").innerHTML =
        memories[current].title;

    document.getElementById("story").innerHTML =
        memories[current].story;
}

function nextMemory(){

    if(current === memories.length - 1){

        // After the 5th image go to the next page
        window.location.href = "truth.html";
        return;
    }

    current++;

    updateMemory();
}


function prevMemory(){

    if(current > 0){

        current--;

        updateMemory();
    }

}
updateMemory();