// Defining a global function with other functions nested inside it.
// Everything within this file has access to these three variables.
const a = 1; const b = 2; const c = 3;  
       
     (function firstFunction () {  
       const b = 5; const c = 6;  
       
       (function secondFunction () {  
         const b = 8;
         // This will print: a: 1, b: 8, c: 6 which is the second function
         console.log(`a: ${a}, b: ${b}, c: ${c}`);
       
         (function thirdFunction () {  
           const a = 7; const c = 9;
       
           (function fourthFunction () {  
             const a = 1; const c = 8;
              
           })()  
         })() 
       }) ()
     })()

     