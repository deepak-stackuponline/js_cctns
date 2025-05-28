// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;//Function Y along with its lexical environment
// }

// var result = x();
// console.log(result);

// //...................

// result();


function add(a,b){
    function myAdd(){
        const c = a + b;
        return c;
    }
    return myAdd;
}

function main(){
    const res = add(3,4);
    const val = res();
    console.dir(res);
    console.log(val);
}   
main();

//Stack and Head...Stack is local memory. data stored only still the function is closed. While on heap the data is stored globally. Larage DS like objects are stored there. 
//Javascript uses stack most time which gets cleared once the function executed.
//JS have the property to write function inside a function