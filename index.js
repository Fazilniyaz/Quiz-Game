// [{ "id": 1, "answer": 3, "question": "Which was not one of Voldemort's Horcruxes?", "options": ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"] },
// { "id": 2, "answer": 1, "question": "Which of these are not one of Hagrid's many pets?", "options": ["Grawp", "Fluffy", "Aragog", "Noberta"] }, 
// { "id": 3, "answer": 3, "question": "Which class did Severus Snape always want to teach?", "options": ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"] }, 
// { "id": 4, "answer": 3, "question": "Which Hogwarts house did Moaning Myrtle belong in?", "options": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"] }, 
// { "id": 5, "answer": 2, "question": "What class did Neville end up teaching at Hogwarts?", "options": ["Astronomy", "Herbology", "Charms", "Muggle Studies"] }];


var quiz = document.getElementById("quiz")

var correctAnswers = []

//Framing the question dynamically using Jquery

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",function(response){
    var quiz = document.getElementById("quiz")

    for(var i=0;i<response.length;i++){
        correctAnswers.push(response[i].answer)
        quiz.innerHTML += `<h3 id="questions">${response[i].question}</h3>`
        var opt = response[i].options
        for(var j=0;j<opt.length;j++){
            quiz.innerHTML += `<label><input class="formargin" type="radio" name="q${response[i].id}" value="${j+1}"/>
            <span class="formargin">${opt[j]}</span></label><br>`

            if(j == opt.length-1){
                quiz.innerHTML += `<hr id = "hr">`
                
            }
            if(i == response.length-1 && j == opt.length-1){
                quiz.innerHTML += `<button id="btn" onclick="Checkstatus()">Submit</button>`
            }

        }
    }
})

function Checkstatus(){
    var s = $("#score")
    s.innerHTML = ""
    var answers = []
    var checkedInputs = $("input[type=radio]:checked")
    for(var i=0;i<checkedInputs.length;i++){
        answers.push(checkedInputs[i].value)
    }
    var score = 0
    for(var j=0;j<correctAnswers.length;j++){
        if(answers[j] == correctAnswers[j]){
            score++
        }
    }
    console.log(score)
    
    s.append(score + "/5")
    // $("#edit").innerText = `${score}`
}




