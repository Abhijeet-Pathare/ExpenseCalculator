function bat(man,maxPower){
    power = maxPower;
    try{
        man();
    }finally{
        power = 400;
    }
    console.log(power);
}
function man(){
    try{
        throw new Error();
        power = 100;
    }catch(e){
        power = 200;
    }finally{
        power = 300;
    }
}
bat(man,100);









let output = []
var component = (...par1) =>{
    output = [...par1];
    return output.filter((a) => a.includes('Script'));
}
console.log(component('ES6','JavaScript','CoffeeScript','React'));








let power = 666;
function man(){
    power = 10;
    console.log("Man's power is:",power);
}
function bat(spider){
    power = 30;
    try{
        spider();
    }catch(e){
        power = 20;
    }
    console.log("Bat's power is:",power);
}
function spider(){
    bat(man);
}
spider();











function bat(man,maxPower){
    power = maxPower;
    try{
        man();
    }finally{
        let power = 400;
    }
    console.log(power);
}
function man(){
    try{
        throw new Error();
        power = 100;
    }catch(e){
        power = 200;
    }finally{
        power = 300;
    }
}
bat(man,100);








var i = 666;
function myFunc(){
    for(var i =1;i<10;i++){

    }console.log(i);
}
myFunc();







function emailFormat(email){
    try{
        if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
            console.log("Matching the email format!!")
            return true;
        }
        else{
            throw new Error("Email invalid");
        }
    }catch(error){
        console.log(error.message);
    }finally{
        console.log("into the finally block");
    }
}
console.log(emailFormat("hello.123@example.com"));

// Matching the email format!!
// into the finally block
// true









function man(){
    power = 10;
    
    console.log("Mans power is:",power);
}
function bat(spider){
    var power = 30;
    try{
        spider();
    }catch(e){
        power = 20;
    }
    console.log("Bats power is:",power);
}
function spider(){
    bat(man);
}
spider();







var myList = ["Edison","Tesla","Einstein"];
var [,a]= myList;
document.write(a);







bunny
benny
bunty
bonny
binny
banny
benty







var str = "The best things are ";
var pattern = new RegExp("[a-z")
