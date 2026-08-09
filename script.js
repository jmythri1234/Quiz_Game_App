const quizData = [
{
question: "What does HTML stand for?",
options: ["Hyper Text Markup Language","Home Tool Markup Language","Hyperlinks Text Mark Language","None"],
answer: "Hyper Text Markup Language"
},
{
question: "Which language is used for styling web pages?",
options: ["HTML","Python","CSS","Java"],
answer: "CSS"
},
{
question: "Which language is used for web interactivity?",
options: ["JavaScript","C","Python","SQL"],
answer: "JavaScript"
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
document.getElementById("question").innerText =
quizData[currentQuestion].question;

let answersDiv = document.getElementById("answers");
answersDiv.innerHTML = "";

quizData[currentQuestion].options.forEach(option => {
let btn = document.createElement("button");
btn.innerText = option;

btn.onclick = function(){
if(option === quizData[currentQuestion].answer){
score++;
}
};
answersDiv.appendChild(btn);
});
}

function nextQuestion(){
currentQuestion++;

if(currentQuestion < quizData.length){
loadQuestion();
}
else{
document.querySelector(".quiz-container").innerHTML =
`<h2>Quiz Completed!</h2>
<h3>Your Score: ${score}/${quizData.length}</h3>`;
}
}

loadQuestion();