function fizzBuzz(numArr) {
    numArr.forEach(num => {
        if(num%3==0 && num%5==0)        
        {console.log(num + "fizzbuzz")}         
        else if (num%3==0)     
        {console.log(num + "fizz")} 
        else if (num%5==0) 
        {console.log(num + "buzz")}
    });
};
let arr = [1,2,3,4,5,6,7,8,9,11,15,16,18,40,30,33,25.45,60, 90];
fizzBuzz(arr);

function sayHello(){console.log("Hello Baby!")};
document.getElementById("summary").addEventListener("click", sayHello);

function addActive() {
        var current = document.getElementsByClassName("active");
    
        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
    
        // Add the active class to the current/clicked button
        this.className += " active";
}

var btns = document.getElementsByClassName("nav-item");
console.log(btns);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", addActive);
}
