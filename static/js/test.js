function checkAnswer(form){
    if(document.getElementById('option1').checked && document.getElementById('option1').value == "true") {
        console.log(1);
        document.getElementById("correct-div").style['visibility'] = 'visible';
        document.getElementById("wrong-div").style['visibility'] = 'invisible';
    }
    else if(document.getElementById('option2').checked && document.getElementById('option2').value == "true") {
        console.log(1);
        document.getElementById("correct-div").style['visibility'] = 'visible';
        document.getElementById("wrong-div").style['visibility'] = 'hidden';
    }
    else if(document.getElementById('option3').checked && document.getElementById('option3').value == "true") {
        console.log(1);
        document.getElementById("correct-div").style['visibility'] = 'visible';
        document.getElementById("wrong-div").style['visibility'] = 'hidden';
    }
    else if(document.getElementById('option4').checked && document.getElementById('option4').value == "true") {
        console.log(1);
        document.getElementById("correct-div").style['visibility'] = 'visible';
        document.getElementById("wrong-div").style['visibility'] = 'hidden';
    }
    else {
        console.log(0);
        document.getElementById("wrong-div").style['visibility'] = 'visible';
        document.getElementById("correct-div").style['visibility'] = 'hidden';
    }
}