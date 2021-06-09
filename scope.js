function sum(first, second){
    let result = first + second;

    if(result > 5){
        const mood = "Happy";
        console.log(mood);
        
    }
    console.log(mood);
    
    return result;
}

const output = sum(5,7);
console.log(output);

// Javascript Hoisting
//    Defination:   Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope

//    ----> If i declare a variable using "VAR" its acessable from parent Scope.
//--------> It i declare a variable using "LET" and "CONST" it's only works on scope not elsewhere

//    V.V.I----> Hoisting, Block Scope, Global Scope, (Javacript Clouser).