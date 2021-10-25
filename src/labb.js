

function sum(a, b) {

    return a + b
    
    
}

function myOwnMultiplyFunction(a, b) {
console.log("test")

    return a * b

}


function isBelowZero(a) {

    if(a < 0 ) return true
    if(a > 0) return false
    
}

function round(a){

    return Math.round(a)

}

function addUp(a){ 
    
    let sum  
    sum = a *(a+1) / 2
    return sum
}


function findMinAndMax(array){

          
    let minNumber = Math.min(...array);
    let maxNumber = Math.max(...array);   
     
          
    const minmax = {min:0, max:0}; 
    
    minmax.max=maxNumber;
    minmax.min=minNumber;

    return minmax

    
    
}

function afterXmasEve2020(input){ 

    let datecheck = '2020-12-24'

    let date = new Date(input)
    const date2 = new Date(datecheck) 
    
    if(date >= date2) return true;
    if(date < date2) return false;      
         

}

function sortByStringLength(array){
        
    array.sort(function(a,b) {return a.length-b.length})
    return array;
    
}

function charCounter(char, string){ 

    string = string.toLowerCase()
    var char_Count = 0;
    for (var position = 0; position < string.length; position++) 
    {
        if (string.charAt(position) == char) 
        {
            char_Count += 1;
        }
    }
    return char_Count;

}

function numbersOnly(array){ 

    var filtered = array.filter(function(item){
        return (parseInt(item) === item);
    });
    return filtered   

}

function sortNumbers(array, argument){
        
    if(argument == 1){

        array.sort(function(a,b) {return a-b})     
    }
    if(argument == -1){

         array.sort(function(a,b) {return b-a})     
    }
    return array;     
}

function personFactory(firstname, lastname){

    this.firstname = firstname.charAt(0).toUpperCase()+firstname.slice(1)
    this.lastname = lastname.charAt(0).toUpperCase(0)+lastname.slice(1)
    this.fullname = firstname+lastname
    this.initials = `${firstname.charAt(0).toUpperCase()}.${lastname.charAt(0).toUpperCase()}`
}

function doublePrice(array){ 

    array.forEach(products => {
        products.price *= 2
        return products
    });
    return array
        
    
}

function and(bool1, bool2){

    
    let value

    if(bool1 && bool2){ 
        value = true
    }else{
        value = false
    }
    return value
    

}


function removeLeadingTrailing(input){
       
    number = parseFloat(input)
    number*1
    return number    
}

function getKeysAndValues(obj){

   

    let newKeys =  Object.keys(obj)
    let newValues = Object.values(obj) 

    const newObject = {keys:newKeys, values:newValues,};

    
    
    return newObject      
    
    
   
}
// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!


//etc...


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addUp
module.exports.findMinMax = findMinAndMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
