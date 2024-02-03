

let displayWindow = document.querySelector('.display-window');
let expression = '';

function compute(value) {
    if(value==='clear'){expression='';
    displayWindow.textContent='';    
}
    else if(value==='=')
    {
        var result=eval(expression);
        displayWindow.textContent=result;
    }
    else if (value===' ')
    {
        expression-=' ';
        displayWindow.textContent=expression;
    }
    else if(value==='del')
    {
        del();
    }
    else{
        expression += value;
    displayWindow.textContent = expression;
    }
    
}
function del() {
    expression = expression.slice(0, -1);
    displayWindow.textContent = expression;
}








































