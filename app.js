

// document.getElementById("show2").style.display="none"
// document.getElementById("show3").style.display="none"
// document.getElementById("show4").style.display="none"
// document.getElementById("show5").style.display="none"
function check(){
    document.getElementById("show1").style.display="none"
    document.getElementById("show2").className = "ok"
}
function check2(){
    document.getElementById("show2").style.display="none"
    document.getElementById("show3").className = "ok"
}
function check3(){
    document.getElementById("show3").style.display="none"
    document.getElementById("show4").className = "ok"
}
function check4(){
    document.getElementById("show4").style.display="none"
    document.getElementById("show5").className = "ok"
}
function result(){
    var a = 0
    var d;
    var Corrent_que1_1 = document.getElementById('q1-4');
    var Corrent_que1_2 = document.getElementById('q2-1');
    var Corrent_que1_3 = document.getElementById('q3-2');
    var Corrent_que1_4 = document.getElementById('q4-1');
    var Corrent_que1_5 = document.getElementById('q5-2');

    if(Corrent_que1_1.checked == true){
        a++
    }
    if(Corrent_que1_2.checked == true){
        a++
    }
    if(Corrent_que1_3.checked == true){   
        a++
    }
    if(Corrent_que1_4.checked == true){   
        a++
    }
    if(Corrent_que1_5.checked == true){   
        a++
    }
 d = a*10
 alert("your score is " + d + " out of 50") 
    
}
