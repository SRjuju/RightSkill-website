let points1=0
const video = document.createElement('video');
let test1=document.getElementById("test1");
let test2=document.getElementById("test2");
let qe1=document.getElementById("q1");
video.src =
  'HTML tutorial.mp4';
video.autoplay = false;
video.controls = true;
video.muted = false;
video.height = 520;
video.width = 680;
video.className="htmlt1";

function htmlpg2(){
    test1.appendChild(video);
    qe1.style.visibility= 'visible';
    test2.remove();
}


let upts = localStorage.getItem("points1");
function webcrs1(){
    if (upts<50){
        location="courses.html"
        alert("Complete html course to continue!")
    }
    else{
        location="csscourse.html"
    }
}

function webcrs2(){
    if (upts<100){
        location="courses.html"
        alert("Complete css course to continue!")
    }
    else{
        location="javascriptcourse.html"
    }
}

let questions = [
    {
        id: 1,
        question: "What is the Full Form Of HTML?",
        answer:"HyperText Markup Language",
        options: [
            "Hyper Technology Malfunction Link",
            "Hyper Text Manipulation Language",
            "HyperText Markup Language",
            "None of these"
        ]   
    },
    {
        id: 2,
        question: "Which of the following tags is used to represent a paragraph?",
        answer: "p",
        options: [
          "para",
          "p",
          "pg",
          "None of these"
        ]
      },
    {
        id: 3,
        question: "Why do we need HTML?",
        answer:"To add elements to the website",
        options: [
            "To add elements to the website",
            "To design the website",
            "To close the website",
            "None of these"
        ]   
    },
    {
        id: 4,
        question: "What is the extension for a HTML file?",
        answer:".html",
        options: [
            ".html",
            ".htp",
            ".ppt",
            "None of these"
        ]   
    },
];
let question_count = 0;

window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}
function next(){
    


    let user_answer = document.querySelector("li.option.active").innerHTML;

    if(user_answer == questions[question_count].answer){
        points1 += 5;
        localStorage.setItem("points1",points1);
    }
    console.log(points1)
    question_count++;
    show(question_count);
    return points1
}



function show1(){
    alert(points1);
}


