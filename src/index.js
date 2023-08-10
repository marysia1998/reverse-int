module.exports = function reverse (n) {
    let str = n.toString();
    let result = 0;
    if(n >= 0)
    {
    for(let i = 0; i < str.length; i++) {
        result = result + parseInt(str[i])*(10**i);
    }
   }
   if(n< 0) {
    for(let i = 1; i < str.length; i++) {
        result = result + parseInt(str[i])*(10**(i-1));
    }
   }

    return result;
  
}
