//how to pass function wth parameter
const x = function (){
    return "Good morning";
}

const y = function (){
    return "Good evening";
}
function abc (xy,name){
    console.log(xy()+" "+name);
}

abc (x,'Nikhil');