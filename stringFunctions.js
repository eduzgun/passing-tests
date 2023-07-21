const getLonger = (a, b) => {
    
    if (a==undefined || b==undefined ){
        throw "This function requires two arguments!";
    }
    
    else if ( typeof a!="string" && typeof b!="string"){
        throw "Arguments must be strings!";
    } 
        
    else if (typeof a!="string" ||  typeof b!="string"){
        throw "Arguments must be strings!";
    } else {
        if (a.length > b.length){
            return a;
        } else {
            return b;
        }    
    }
}

const greet = (str) => {
    if (str == undefined) {
        return "Hi!";
    } else if (str.length==0){
        return "Hi!";
    }
    else {
        return "Hello, "+str + "!";
    }
}

const isSubstring = (str, substr) => {
    if (str === undefined || substr === undefined){
        throw new Error("This function requires two arguments!");
    } else if (typeof str !="string" || typeof substr != "string"){
        throw "Arguments must be strings!";
    } else if (str.length == 0 || substr.length == 0){
        throw new Error("Arguments must have a length greater than zero!");
    }
    
    else {
        if (str.includes(substr)){
            return true;
        } else {
            return false;
        }
    }
}
module.exports = { getLonger, greet, isSubstring }