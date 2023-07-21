

const getBigger = (a, b) => {
    if (a > b){
        return a;
    } else {
        return b;
    }
}

const getSmallest = (arr) => {
   if (arr.length==0){
    return null
   } else {
    const smallest = Math.min(...arr);
    return smallest;
   }
}

const countValue = (arr, value) => {
    if (value==undefined){
        return null;
    }
    return arr.filter((v) => (v === value)).length;
}

module.exports = {getBigger, getSmallest, countValue}