/*
    * File Name : script.js
    * Author Name: Chinmaya  
    * Purpose : To perform basic calculations
    * Version : 1.0

*/

// text element i.e expression
var txt = "";

/*
   Name : addtoDispaly()
   Purpose : To append each element entered in text-box to txt
   Input : element from text-box
   Return : void
*/
function addtoDisplay(element) {
    // changing the font-color 
    document.getElementById("result").style.color = "blue"; 
    
    //  converting the element to string
    element = element.toString();

    //  appending the element to txt
    txt += element;

    // changing font-size
    document.getElementById("result").style.fontSize = "x-large";

    //  changing font weight
    document.getElementById("result").style.fontWeight = "bold";
    
    // changing the conent of result to txt
    document.getElementById("result").value = txt;
}
    
/*
   Name : clearOneElement()
   Purpose : To delete recently entered element in the text-box
   Input : void
   Return : void
*/
function clearOneElement() {
   
    // collecting substring without last element
    txt = txt.substr(0, txt.length - 1);
    document.getElementById("result").value = txt;
}

/*
   Name : allclear()
   Purpose : To delete the content in the text-box
   Input : void
   Return : void
*/
function allclear() {
    txt = "";
    // changing content to empty
    document.getElementById("result").value = txt;
    
}

/*
   Name : calculate()
   Purpose : To calculate the result of the expression
   Input : onclick "=" 
   Return : void
*/
function calculate() {

    //  getting the expression from text box
    let exp = document.getElementById("result").value;

    // evaluating the expression and storing the result
    let result = eval(exp);

    // changing the content of text-box to result
    document.getElementById("result").value = result;

    // changing the font-color 
    document.getElementById("result").style.color = "black";
    
    // emptying the expression after the calculation
    txt = "";
}