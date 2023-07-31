var operando1=0;
var operando2=0;
var operador="";
var display=[];

function add(n1,n2){
    return n1+n2;
}

function sub(n1,n2){
    return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    return n1/n2;
}

function operate(operador,operando1,operando2){
    let resultado;

    if(operador=="+"){
        resultado=add(operando1,operando2);
    }
    if(operador=="-"){
        resultado=sub(operando1,operando2);
    }
    if(operador=="*"){
        resultado=multiply(operando1,operando2);
    }
    if(operador=="/"){
        resultado=divide(operando1,operando2);
    }
    return resultado;
}

function atualizaDisplay(){
    
    var displayText=document.getElementById('dp');
    displayText.innerText=display.join("");
}


function separaOperandos(){
    let operando1;
    let operando2;
    for (let i=0;i<display.length;i++){
        if(isNaN(display[i])){
            operando1=+display.slice(0,i).join('');
            operando2=+display.slice(i+1).join('');
            operador=display[i];
            display=[];
            display[0]=operate(operador,operando1,operando2);
            break;
        }
        
    }

}


function buttonPressed(theId){
    
    if (theId=="clear"){
        display.pop();
    }else if (theId=="clearAll"){
        display=[];
    } else if(theId=='='){
        separaOperandos();
    }else{
        display.push(theId);
    }

    
    atualizaDisplay();
}

//Função que add evventListener às divs.
function start(){
    let aux;
    aux= document.getElementById('clear');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('clearAll');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('7');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('8');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('9');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('/');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('4');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('5');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('6');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('*');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('1');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('2');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('3');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('-');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('0');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('.');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('=');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
    aux= document.getElementById('+');
    aux.addEventListener('click',(e)=>{buttonPressed(e.target.id);})
}



start();






































