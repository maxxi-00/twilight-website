const backBtn = document.getElementById("backBtn");
const choiceContainer = document.getElementById("choices-container");
const cullenpage = document.getElementById("cullenPage");
const volturipage = document.getElementById("volturiPage");
const wolvespage = document.getElementById("wolvesPage");
const humanpage = document.getElementById("humanPage");
const cullenChoice = document.getElementById("cullenChoice");
const volturiChoice = document.getElementById("volturiChoice");
const wolvesChoice = document.getElementById("wolvesChoice");
const humanChoice = document.getElementById("humanChoice");

backBtn.addEventListener("click", function(){
    backBtn.style.display = 'none';
    cullenpage.style.display = 'none';
    volturipage.style.display = 'none';
    wolvespage.style.display = 'none';
    humanpage.style.display = 'none';
    choiceContainer.style.display = 'block';
});

cullenChoice.addEventListener("click", function(){
    backBtn.style.display = 'block';
    cullenpage.style.display = 'block';
    choiceContainer.style.display = 'none';
});

volturiChoice.addEventListener("click", function(){
    backBtn.style.display = 'block';
    volturipage.style.display = 'block';
    choiceContainer.style.display = 'none';
});

wolvesChoice.addEventListener("click", function(){
    backBtn.style.display = 'block';
    wolvespage.style.display = 'block';
    choiceContainer.style.display = 'none';
});

humanChoice.addEventListener("click", function(){
    backBtn.style.display = 'block';
    humanpage.style.display = 'block';
    choiceContainer.style.display = 'none';
});