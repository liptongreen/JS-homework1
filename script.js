


var editbtn_2 = document.querySelectorAll('button'); //all buttons

document.getElementById("btn_2").onclick = function(){
    changestyle();
}
var chst = document.getElementById("btns");
function changestyle(){
        /*editbtn_2.classList.toggle("btn");*/
        if(chst.style.backgroundColor == "chocolate"){
        chst.style.backgroundColor = "white" ;   
        }
        else{
        chst.style.backgroundColor = "chocolate" ;
        }
}

var editbtn_3 = document.getElementById("btn_3");

function clearstyle(){
    document.body.style.display = "none";
}


var temp = {   //часть задания с выведением средней и суммы 
Canada : 10 ,
Germany : 13 ,
Spain : 22 ,
Belarus : 11 ,
};
var result = 0;
var i = 0;
    for(var property in temp){
    result += temp[property];
    i++;
    }
var srtemp = result / i;
document.write( 'Сумма всех температур: ' + result + ' Среднее значение - ' + srtemp);


var max = 0; //часть задания с выведением максимальной температуры
function maxtemp(){
    for(var prop in temp){
        if (max <= temp[prop]){
            max = temp[prop];
        };
        console.log(max + '     ' + temp[prop]);
    }
}


maxtemp();
document.write(' MAX - ' + max);