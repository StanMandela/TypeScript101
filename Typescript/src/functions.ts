let greetings:Function;

greetings=()=>{
 console.log('Hddello Again')
}

greetings()

//passing parameters to a function 
const add=(a:number, b:number,c:number|string=10)=>{
    console.log(a+b);
    console.log(c)
}
add(5,10)
