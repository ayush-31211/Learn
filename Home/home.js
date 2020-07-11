var Tutorial,Practice,Quiz,Project;
Tutorial=document.getElementById("Tutorial");
Practice=document.getElementById("Practice");
Quiz=document.getElementById("Quiz");
Project=document.getElementById("Project");

var Tutorial_len,Practice_len,Quiz_len,Project_len;


var Tutorial_text,Practice_text,Quiz_text,Project_text;
Tutorial_text=Tutorial.textContent;
Practice_text=Practice.textContent;
Quiz_text=Quiz.textContent;
Project_text=Project.textContent;

Tutorial_len=Tutorial_text.length;
Practice_len=Practice_text.length;
Quiz_len=Quiz_text.length;
Project_len=Project_text.length;

if(Tutorial_len>300)
Tutorial.textContent=Tutorial_text.slice(0,300)+"...";

if(Quiz_len>300)
Quiz.textContent=Quiz_text.slice(0,300)+"...";

if(Practice_len>300)
Practice.textContent=Practice_text.slice(0,300)+"...";

if(Project_len>300)
Project.textContent=Project_text.slice(0,300)+"...";
