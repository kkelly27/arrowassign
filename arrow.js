/*ES2015 Arrow Functions Shorthand*/


const double = arr => array.map(val => val * 2)


/*Refactor the following function to use arrow functions:*/

function squareAndFindEvans(numbers){
    var squares = numbers.map(function(num){
        return num ** 2;
    });

        var evens = squares.filter(function(square){
            return square % 2 === 0;
        
        });
        return evens; 
}

